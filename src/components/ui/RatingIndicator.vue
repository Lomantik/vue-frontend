<script setup>
/** @typedef {import('@/types/product.js').Product} Product */
import { computed } from 'vue'

const props = defineProps({
  /** @type {Product} */
  rating: {
    type: Number,
    required: true,
  },
})

const width = computed(() => {
  return 20 * props.rating + '%'
})
</script>

<template>
  <span class="product-rating">
    <span :style="{ width: width }" class="product-rating__filler"></span>
  </span>
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
