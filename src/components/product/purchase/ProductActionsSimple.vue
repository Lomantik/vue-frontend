<script setup>
import ProductQuantity from '@/components/ui/ProductQuantity.vue'
import { computed, ref } from 'vue'

/** @typedef {import('@/types/product.js').Product} Product */

defineProps({
  /** @type {{product: Product}} */
  product: {
    type: Object,
    required: true,
  },
})

const qty = ref(1)

const zeroQty = computed(() => {
  return Number(qty.value) === 0
})

const handlePurchase = () => {
  if (zeroQty.value) {
    alert('Please set quantity greater than 0 before adding this product to your cart.')
  } else {
    alert('Product added to cart')
  }
}

const purchaseDisabled = computed(() => {
  return zeroQty.value
})
</script>

<template>
  <div class="product-actions-simple">
    <div class="product-actions-simple__wrapper row">
      <div class="col-auto"><ProductQuantity :min-qty="1" v-model="qty" /></div>
      <div class="col">
        <button
          class="product-actions-simple__button btn btn-primary"
          :class="{ 'product-actions-simple__button--disabled': purchaseDisabled }"
          @click="handlePurchase"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-actions-simple {
  &__wrapper {
    --bs-gutter-x: 10px;
  }
  &__button {
    text-transform: uppercase;
    width: auto;
    @include media-breakpoint-up(lg) {
      width: 280px;
    }
    &--disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>
