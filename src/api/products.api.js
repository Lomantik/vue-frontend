import { dataService } from '@/services/data.service.js'
/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @returns {Promise<Product[]>}
 */
export async function getAllProducts() {
  return dataService.getAllProducts()
}

/**
 * @param {number} categoryId
 * @returns {Promise<Product[]>}
 */
export async function getProductsByCategoryId(categoryId) {
  return dataService.getProductsByCategoryId(categoryId)
}

/**
 * @param {string} categorySlug
 * @returns {Promise<Product[]>}
 */
export async function getProductsByCategorySlug(categorySlug) {
  return dataService.getProductsByCategorySlug(categorySlug)
}

/**
 * @param {number} productId
 * @returns {Promise<Product>}
 */
export async function getProductById(productId) {
  return dataService.getProductById(productId)
}

/**
 * @param {string} productSlug
 * @returns {Promise<Product>}
 */
export async function getProductBySlug(productSlug) {
  return dataService.getProductBySlug(productSlug)
}
