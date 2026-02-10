<script setup>
/** @typedef {import('@/types/product.js').Product} Product */
import { useProductRating } from '@/composables/useProductRating.js'
import { toRef } from 'vue'

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true,
  },
})

const productRef = toRef(props, 'product')
const { show, style } = useProductRating(productRef)
</script>

<template>
  <div class="product-rating" v-if="show">
    <span :style="style" class="product-rating__filler"></span>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:map';

.product-rating {
  position: relative;
  line-height: 1;
  font-size: 0.875rem; // 14px
  height: 28px;
  max-width: 66px;
  letter-spacing: 0.05em;
  align-self: start;
  &:before {
    opacity: 1;
    color: color-token(stars-empty);
    font-family: map.get($custom-font-family, 'blooms');
    content: content-token(stars-empty);
  }
  &__filler {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    line-height: 1;
    &:before {
      color: color-token(stars-filled);
      font-family: map.get($custom-font-family, 'blooms');
      content: content-token('stars-filled');
    }
  }
}
</style>
