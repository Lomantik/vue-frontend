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

/** @typedef {import('@/types/product.js').Product} Product */

const pagesContent = {
  about: aboutHtml,
  contact: contactHtml,
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
    return products.find((product) => product.id === productId)
  },
  async getProductBySlug(productSlug) {
    return products.find((product) => product.slug === productSlug)
  },
  async getProductAttributes(productId) {
    const result = []
    const product = await this.getProductById(productId)
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
