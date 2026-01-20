<script setup>/** @typedef {import('@/types/product.js').Product} Product */
import { ref, watchEffect } from 'vue'
import { useProductRating } from '@/composables/useProductRating.js'

/** @typedef {import('@/types/review.js').Review} Review */

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true
  }
})


const ratingData = ref(null)
watchEffect(async () => {
  ratingData.value = await useProductRating(props.product)
})
</script>

<template>
  <div class="star-rating" v-if="ratingData && ratingData.show">
    <span :style="ratingData.style"></span>
  </div>
</template>

<style scoped lang="scss">
@use "sass:map";

.star-rating {
  position: relative;
  line-height: 1;
  font-size: 14px;
  height: 28px;
  max-width: 66px;
  letter-spacing: 0.05px;
  align-self: flex-start;
}
.star-rating:before {
  opacity: 1;
  color: #ffcd00;
  font-family: map.get($custom-font-family, 'blooms');
  content: "\e805 \e805 \e805 \e805 \e805" !important;
}
.star-rating > span {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  line-height: 1;
}
.star-rating > span:before {
  color: #ffd0ad;
  content: "\e806 \e806 \e806 \e806 \e806" !important;
  font-family: map.get($custom-font-family, 'blooms');
}
</style>
