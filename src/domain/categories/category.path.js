import { getCategoryById } from '@/api/categories.api.js'

/** @typedef {import('@/types/category.js').Category} Category */

/**
 * @param {Category} category
 * @returns {Promise<string[]>}
 */
export async function buildCategoryPath(category) {
  const path = [category.slug]
  let parentId = category.parentId

  while (parentId !== 0 && parentId !== null) {
    const parent = await getCategoryById(category.parentId)
    path.unshift(parent.slug)
    parentId = parent.parentId
  }

  return path
}
