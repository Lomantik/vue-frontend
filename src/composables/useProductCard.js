import { getCategoryById } from '@/api/categories.api.js'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @param {Product} product
 * @returns {Promise<{
 * primaryCategory: Category,
 * }>}
 */
export async function useProductCard(product) {
  const primaryCategory = await getCategoryById(product.primaryCategoryId)
  return {
    primaryCategory
  }
}
