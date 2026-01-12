import { dataService } from '@/services/data.service.js'

/** @typedef {import('@/types/category.js').Category} Category */

/**
 * @returns {Promise<Category[]>}
 */
export async function getAllCategories() {
  return dataService.getAllCategories()
}

/**
 * @param {number} categoryId
 * @returns {Promise<Category>}
 */
export async function getCategoryById(categoryId) {
  return dataService.getCategoryById(categoryId)
}

/**
 * @param {string} categorySlug
 * @returns {Promise<Category>}
 */
export async function getCategoryBySlug(categorySlug) {
  return dataService.getCategoryBySlug(categorySlug)
}
