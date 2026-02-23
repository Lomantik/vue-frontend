import products from '@/data/products.json'
import categories from '@/data/categories.json'
import pages from '@/data/pages.json'
import reviews from '@/data/reviews.json'
import images from '@/data/images.json'
import aboutHtml from '@/content/pages/about.html?raw'
import contactHtml from '@/content/pages/contact.html?raw'
import attributes from '@/data/attributes.json'
import { getProductById } from '@/api/products.api.js'
import { getAttributeById } from '@/api/attributes.api.js'
import defaultProductDescriptionHtml from '@/content/products/default_description.html?raw'

/** @typedef {import('@/types/product.js').Product} Product */

const pagesContent = {
  about: aboutHtml,
  contact: contactHtml,
}
const productDescriptions = {
  default_description: defaultProductDescriptionHtml,
}

export const mockService = {
  async getAllProducts(activeOnly = true, showInCatalogOnly = true) {
    /** @type Product */
    let result = products
    if (activeOnly) result = result.filter((product) => product.active === true)
    if (showInCatalogOnly) result = result.filter((product) => product.showInCatalog === true)
    return result
  },
  async getProductsByCategoryId(categoryId, activeOnly = true, showInCatalogOnly = true) {
    /** @type Product */
    let result = products.filter((product) => product.categoryIds.includes(categoryId))
    if (activeOnly) result = result.filter((product) => product.active === true)
    if (showInCatalogOnly) result = result.filter((product) => product.showInCatalog === true)
    return result
  },
  async getProductsByCategorySlug(categorySlug, activeOnly = true, showInCatalogOnly = true) {
    const category = await this.getCategoryBySlug(categorySlug, activeOnly, showInCatalogOnly)
    if (!category) return []
    return products.filter((product) => product.categoryIds.includes(category.id))
  },
  async getProductById(productId) {
    const product = products.find((product) => product.id === productId)
    if (!product) return
    return {
      ...product,
      description: productDescriptions[product.description],
    }
  },
  async getProductBySlug(productSlug) {
    const product = products.find((product) => product.slug === productSlug)
    if (!product) return
    return {
      ...product,
      description: productDescriptions[product.description],
    }
  },
  async getProductAttributes(productId) {
    const result = []
    const product = await this.getProductById(productId)
    if (product.type === 'simple') {
      if (product.attributes) {
        const res = await Promise.all(
          Object.entries(product.attributes).map(async ([attributeId, attributeOptionId]) => {
            const attribute = await getAttributeById(Number(attributeId))
            return {
              ...attribute,
              options: attribute.options.filter((option) => option.id === attributeOptionId),
            }
          }),
        )
        result.push(...Object.values(res))
      }
    } else if (product.type === 'grouped') {
      const productsAttributes = await Promise.all(
        product.variantIds.map(async (id) => await this.getProductAttributes(id)),
      )

      result.push(
        ...Object.values(
          productsAttributes
            .flat()
            .flat()
            .reduce((acc, item) => {
              if (item.name in acc) {
                item.options
                  .filter((option) => !acc[item.name].options.some((x) => x.id === option.id))
                  .forEach((opt) => acc[item.name].options.push(opt))
              } else {
                acc[item.name] = { ...item }
              }
              return acc
            }, {}),
        ),
      )
    } else if (product.type === 'configurable') {
      const variantProducts = await Promise.all(
        product.variantIds.map(async (id) => await getProductById(id)),
      )
      for (const attributeId of product.configurableAttributeIds) {
        const attribute = await getAttributeById(attributeId)
        result.push({
          ...attribute,
          options: attribute.options.filter((option) =>
            variantProducts.some((prod) => prod.attributes[attributeId] === option.id),
          ),
        })
      }
    }
    return result
  },
  async getProductVariants(productId) {
    const result = new Set()
    const product = await getProductById(productId)
    const configurableAttributes = await Promise.all(
      product.configurableAttributeIds.map(async (id) => await getAttributeById(id)),
    )
    const variantProducts = await Promise.all(
      product.variantIds.map(async (id) => await getProductById(id)),
    )

    for (const variantProduct of variantProducts) {
      const newValue = { id: variantProduct.id }
      for (const [attributeId, optionId] of Object.entries(variantProduct.attributes)) {
        if (!product.configurableAttributeIds.includes(Number(attributeId))) continue
        const attribute = configurableAttributes.find((x) => x.id === Number(attributeId))
        const option = attribute.options.find((x) => x.id === Number(optionId))
        newValue[attribute.name] = option.value
      }
      result.add(newValue)
    }

    return [...result]
  },
  async getAllCategories() {
    return categories
  },
  async getCategoryById(categoryId) {
    return categories.find((category) => category.id === categoryId)
  },
  async getCategoryTree(category = null) {
    const resultChildren = []
    if (category === null) category = await this.getCategoryById(0)
    const children = categories.filter((child) => child.parentId === category.id)
    for (const child of children) {
      if (child) resultChildren.push(await this.getCategoryTree(child))
      else resultChildren.push(null)
    }
    return { ...category, children: resultChildren }
  },
  async getCategoryBySlug(categorySlug) {
    return categories.find((category) => category.slug === categorySlug)
  },
  async getAllPages() {
    const results = []
    for (const page of pages) {
      results.push({ ...page, content: pagesContent[page.content] })
    }
    return results
  },
  async getPageBySlug(pageSlug) {
    const page = pages.find((page) => page.slug === pageSlug)
    if (!page) return
    return { ...page, content: pagesContent[page.content] }
  },
  async getReviewsByProductId(productId) {
    return reviews.filter((review) => review.productId === productId)
  },
  async getImageById(imageId) {
    return images.find((image) => image.id === imageId)
  },
  async getImageBySlug(imageSlug) {
    return images.find((image) => image.slug === imageSlug)
  },
  async getAttributeById(attributeId) {
    return attributes.find((attribute) => attribute.id === attributeId)
  },
}
