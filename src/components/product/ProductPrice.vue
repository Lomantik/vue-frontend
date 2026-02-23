<script setup>
/** @typedef {import('@/types/product.js').Product} Product */
import { useProductPrice } from '@/composables/useProductPrice.js'
import { toRef } from 'vue'

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true,
  },
})

const productRef = toRef(props, 'product')
const { minPrice, maxPrice, hasDiscount, salePrice, isRange } = useProductPrice(productRef)
</script>

<template>
  <span class="price">
    <template v-if="isRange">
      <bdi> <span>$</span>{{ minPrice }} </bdi>
      –
      <bdi> <span>$</span>{{ maxPrice }} </bdi>
    </template>
    <template v-else-if="hasDiscount">
      <del class="price__del">
        <bdi> <span>$</span>{{ minPrice }} </bdi>
      </del>
      <ins class="price__ins">
        <bdi> <span>$</span>{{ salePrice }} </bdi>
      </ins>
    </template>
    <template v-else>
      <bdi> <span>$</span>{{ minPrice }} </bdi>
    </template>
  </span>
</template>

<style scoped lang="scss">
.price {
  &__del {
    opacity: 0.6;
  }
  &__ins {
    text-decoration: none;
    margin-left: 0.4375rem; // 7px
  }
}
</style>
