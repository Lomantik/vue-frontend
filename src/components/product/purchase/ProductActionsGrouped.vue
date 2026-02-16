<script setup>
import ProductQuantity from '@/components/ui/ProductQuantity.vue'
import { computed, reactive, ref, watch } from 'vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import { getVariantProducts } from '@/utils/product.js'

/** @typedef {import('@/types/product.js').Product} Product */

const props = defineProps({
  /** @type {{product: Product}} */
  product: {
    type: Object,
    required: true,
  },
})

const qtys = reactive({})

const groupedProducts = ref([])
watch(
  () => props.product,
  async (product) => {
    const variantProducts = await getVariantProducts(product)
    variantProducts.forEach((variantProduct) => (qtys[variantProduct.id] = 0))
    return (groupedProducts.value = variantProducts)
  },
  { immediate: true },
)

const zeroQtys = computed(() => {
  return Object.values({ ...qtys }).every((val) => Number(val) === 0)
})

const handlePurchase = () => {
  if (zeroQtys.value) {
    alert(
      'Please set quantity of any subproduct greater than 0 before adding this product to your cart.',
    )
  } else {
    alert('Product added to cart')
  }
}

const purchaseDisabled = computed(() => {
  return zeroQtys.value
})
</script>

<template>
  <div class="product-actions-grouped">
    <table class="product-actions-grouped__wrapper">
      <tr
        class="product-actions-grouped__item"
        v-for="groupedProduct in groupedProducts"
        :key="groupedProduct.id"
      >
        <td class="product-actions-grouped__item-field">
          <ProductQuantity :min-qty="0" v-model="qtys[groupedProduct.id]" />
        </td>
        <td class="product-actions-grouped__item-field product-actions-grouped__item-field--title">
          <RouterLink :to="'/' + groupedProduct.slug">{{ groupedProduct.title }}</RouterLink>
        </td>
        <td class="product-actions-grouped__item-field product-actions-grouped__item-field--price">
          <ProductPrice :product="groupedProduct" />
        </td>
      </tr>
    </table>
    <button
      class="product-actions-grouped__button btn btn-primary"
      :class="{ 'product-actions-grouped__button--disabled': purchaseDisabled }"
      @click="handlePurchase"
    >
      Add To Cart
    </button>
  </div>
</template>

<style scoped lang="scss">
.product-actions-grouped {
  &__wrapper {
    margin-bottom: 1.25rem; // 20px
  }
  &__item {
    --bs-gutter-x: 10px;
    vertical-align: middle;
    &-field {
      padding-top: 0.5rem; // 8px
      padding-bottom: 0.625rem; // 10px
      padding-right: 1.25rem; // 20px
      @include media-breakpoint-up(xl) {
        padding-right: 2.5rem; // 40px
      }
      &--title {
        font-size: 0.875rem; // 14px
      }
      &--price {
        @include media-breakpoint-up(xl) {
          padding-right: 1.25rem; // 20px
        }
      }
    }
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
