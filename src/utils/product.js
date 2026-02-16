import { getProductById } from '@/api/products.api.js'
import { getCategoryById } from '@/api/categories.api.js'
import { buildCategoryPath } from '@/domain/categories/category.path.js'

/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @param {Product} product
 * @returns {Promise<Product[]>}
 */
export async function getAllChildProducts(product) {
  /** @type Product[] */
  const childProducts = []
  if (product.type !== 'simple') {
    for (const variantId of product.variantIds) {
      const variant = await getProductById(variantId)
      if (variant.type === 'simple') childProducts.push(variant)
      else childProducts.push(...(await getAllChildProducts(variant)))
    }
  }

  return childProducts
}

/**
 * @param {Product} product
 */
export async function getProductCategories(product) {
  const categories = await Promise.all(
    product.categoryIds.map(async (id) => await getCategoryById(id)),
  )

  return [
    ...(await Promise.all(
      categories.map(async (cat) => ({
        id: cat.id,
        title: cat.title,
        link: `${import.meta.env.BASE_URL}${(await buildCategoryPath(cat)).join('/')}`,
      })),
    )),
  ].sort((a, b) => (a.title <= b.title ? -1 : 1))
}

/**
 * @param {Product} product
 * @returns {Promise<Product[]>}
 */
export async function getVariantProducts(product) {
  return await Promise.all(product.variantIds.map(async (id) => await getProductById(id)))
}
