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
  <span class="price">
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
      <del>
        <bdi>
          <span class="currency-symbol">$</span>{{ minPrice }}
        </bdi>
      </del>
      <ins>
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
.price {
  font-size: 14px;
}
del {
  opacity: 0.6;
}
ins {
  text-decoration: none;
  margin-left: 7px;
}
</style>
