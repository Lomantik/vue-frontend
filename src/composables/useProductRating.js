import { getReviewsByProductId } from '@/api/reviews.api.js'
import { computed, ref, watch } from 'vue'

/** @typedef {import('@/types/review.js').Review} Review */

/**
 * @param {Product} product
 * @returns {{
 * show: import('vue').Ref<boolean>
 * style: import('vue').ComputedRef<Object|any>
 * }}
 */
export  function useProductRating(product) {
  /** @type {import('vue').Ref<Review[]>} */
  const reviews = ref([])
  const overallRating = ref(0)
  const show = ref(false)
  const style = computed(() => ({
    width: (20 * overallRating.value) + '%'
  }))

  watch(
    () => product.value?.id,
    async (productId) => {
      reviews.value = await getReviewsByProductId(productId)
      for (const review of reviews.value) {
        overallRating.value += review.rating
      }
      if (overallRating.value > 0) {
        show.value = true
      }
    }, { immediate: true }
  )

  return {
    show,
    style
  }
}
