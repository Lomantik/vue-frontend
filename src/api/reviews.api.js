import { dataService } from '@/services/data.service.js'
/** @typedef {import('@/types/review.js').Review} Review */

/**
 * @param {number} productId
 * @returns {Promise<Review[]>}
 */
export async function getReviewsByProductId(productId) {
  return dataService.getReviewsByProductId(productId)
}
