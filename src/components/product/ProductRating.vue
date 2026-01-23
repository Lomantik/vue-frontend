<script setup>/** @typedef {import('@/types/product.js').Product} Product */
import { useProductRating } from '@/composables/useProductRating.js'
import { toRef } from 'vue'

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true
  }
})

const productRef = toRef(props, 'product')
const {
  show,
  style
} = useProductRating(productRef)
</script>

<template>
  <div class="star-rating position-relative lh-100 fs-14 h-28 mw-66 ls-05 align-self-start" v-if="show">
    <span :style="style" class="star-rating-internal d-block overflow-hidden position-absolute top-0 left-0 h-14 lh-100"></span>
  </div>
</template>

<style scoped lang="scss">
@use "sass:map";

.star-rating:before {
  opacity: bg-opacity(1);
  color: color('yellow');
  font-family: map.get($custom-font-family, 'blooms');
  content: content('stars');
}
.star-rating-internal:before {
  color: color('secondary');
  content: content('stars-filled');
  font-family: map.get($custom-font-family, 'blooms');
}
</style>
