<script setup>
/** @typedef {import('@/types/product.js').Product} Product */
import RatingIndicator from '@/components/ui/RatingIndicator.vue'
import { computed, ref, watch } from 'vue'
import { getReviewsByProductId } from '@/api/reviews.api.js'

/** @typedef {import('@/types/review.js').Review} Review */

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true,
  },
})

/** @type {import('vue').Ref<Review[]>} */
const reviews = ref([])
const productRating = computed(() => {
  return (
    reviews.value.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / reviews.value.length
  )
})

watch(
  () => props.product,
  async (product) => {
    reviews.value = await getReviewsByProductId(product.id)
  },
  { immediate: true },
)
</script>

<template>
  <RatingIndicator v-if="productRating > 0" :rating="productRating" />
</template>

<style scoped lang="scss"></style>
