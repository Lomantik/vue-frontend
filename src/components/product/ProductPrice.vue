<script setup>/** @typedef {import('@/types/product.js').Product} Product */
import { useProductPrice } from '@/composables/useProductPrice.js'

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true
  }
})

const {
  minPrice,
  maxPrice,
  hasDiscount,
  salePrice,
  isRange
} = useProductPrice(props.product)
</script>

<template>
  <span class="price fs-14">
    <template v-if="isRange">
      <bdi>
        <span class="currency-symbol">$</span>{{ minPrice }}
      </bdi>
      –
      <bdi>
        <span class="currency-symbol">$</span>{{ maxPrice }}
      </bdi>
    </template>
    <template v-else-if="hasDiscount">
      <del class="opacity-60">
        <bdi>
          <span class="currency-symbol">$</span>{{ minPrice }}
        </bdi>
      </del>
      <ins class="text-decoration-none ms-7">
        <bdi>
          <span class="currency-symbol">$</span>{{ salePrice }}
        </bdi>
      </ins>
    </template>
    <template v-else>
      <bdi>
        <span class="currency-symbol">$</span>{{ minPrice }}
      </bdi>
    </template>

  </span>
</template>

<style scoped>

</style>
