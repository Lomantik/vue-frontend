import { dataService } from '@/services/data.service.js'
/** @typedef {import('@/types/images.js').Image} Image */

/**
 * @param {number} imageId
 * @returns {Promise<Image>}
 */
export async function getImageById(imageId) {
  return dataService.getImageById(imageId)
}

/**
 * @param {string} imageSlug
 * @returns {Promise<Image>}
 */
export async function getImageBySlug(imageSlug) {
  return dataService.getImageBySlug(imageSlug)
}
