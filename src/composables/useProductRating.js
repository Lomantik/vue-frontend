import { getReviewsByProductId } from '@/api/reviews.api.js'
import { computed, ref } from 'vue'

/** @typedef {import('@/types/review.js').Review} Review */

/**
 * @param {Product} product
 * @returns {Promise<{
 * reviews: Review[],
 * overallRating: import('vue').Ref<number>
 * show: import('vue').Ref<boolean>
 * style: Object<string|any>
 * }>}
 */
export async function useProductRating(product) {
  const reviews = await getReviewsByProductId(product.id)
  const overallRating = ref(0)
  const show = ref(false)
  for (const review of reviews) {
    overallRating.value += review.rating
  }
  if (overallRating.value > 0) {
    show.value = true
  }
  const style = computed(() => ({
    width: (20 * overallRating.value) + '%'
  }))

  return {
    reviews,
    overallRating,
    show,
    style
  }
}
