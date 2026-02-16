import { dataService } from '@/services/data.service.js'
/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @param {boolean} activeOnly
 * @param {boolean} showInCatalogOnly
 * @returns {Promise<Product[]>}
 */
export async function getAllProducts(activeOnly = true, showInCatalogOnly = true) {
  return dataService.getAllProducts(activeOnly, showInCatalogOnly)
}

/**
 * @param {number} categoryId
 * @param {boolean} activeOnly
 * @param {boolean} showInCatalogOnly
 * @returns {Promise<Product[]>}
 */
export async function getProductsByCategoryId(
  categoryId,
  activeOnly = true,
  showInCatalogOnly = true,
) {
  return dataService.getProductsByCategoryId(categoryId, activeOnly, showInCatalogOnly)
}

/**
 * @param {string} categorySlug
 * @param {boolean} activeOnly
 * @param {boolean} showInCatalogOnly
 * @returns {Promise<Product[]>}
 */
export async function getProductsByCategorySlug(
  categorySlug,
  activeOnly = true,
  showInCatalogOnly = true,
) {
  return dataService.getProductsByCategorySlug(categorySlug, activeOnly, showInCatalogOnly)
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

/**
 * @param {string} productId
 */
export async function getProductVariants(productId) {
  return dataService.getProductVariants(productId)
}

/**
 * @param {string} productId
 */
export async function getProductAttributes(productId) {
  return dataService.getProductAttributes(productId)
}
