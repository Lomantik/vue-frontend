<script setup>
import ProductQuantity from '@/components/ui/ProductQuantity.vue'
import { computed, reactive, ref, watch } from 'vue'
import { getProductAttributes, getProductVariants } from '@/api/products.api.js'

/** @typedef {import('@/types/product.js').Product} Product */

const props = defineProps({
  /** @type {{product: Product}} */
  product: {
    type: Object,
    required: true,
  },
})

const selectedOptions = reactive({})
const variants = ref([])
const attributes = ref([])
const availableOptions = computed(() => {
  const result = {}
  for (const attribute of attributes.value) {
    result[attribute.name] = new Set()
  }
  variants.value.forEach((variant) => {
    const matches = Object.entries(selectedOptions).every(([attrName, selectedValue]) => {
      if (!selectedValue) return true
      return variant[attrName] === selectedValue
    })

    if (matches) {
      for (const attribute of attributes.value) {
        result[attribute.name].add(variant[attribute.name])
      }
    }
  })

  return result
})

function isOptionAvailable(attrName, value) {
  return availableOptions.value[attrName]?.has(value)
}

watch(
  () => props.product,
  async (product) => {
    variants.value = await getProductVariants(product.id)
    console.log(variants.value)
    attributes.value = await getProductAttributes(product.id)
    attributes.value.forEach((attribute) => (selectedOptions[attribute.name] = ''))
  },
  { immediate: true },
)

const qty = ref(1)

const notAllOptionsSelected = computed(() => {
  return Object.values({ ...selectedOptions }).some((val) => val === '')
})

const zeroQty = computed(() => {
  return Number(qty.value) === 0
})

const handlePurchase = () => {
  if (zeroQty.value) {
    alert('Please set quantity greater than 0 before adding this product to your cart.')
  } else if (notAllOptionsSelected.value) {
    alert('Please select some product options before adding this product to your cart.')
  } else {
    alert('Product added to cart')
  }
}

const purchaseDisabled = computed(() => {
  return notAllOptionsSelected.value || zeroQty.value
})

watch(
  () => selectedOptions,
  (options) => {
    console.log(options)
    console.log(availableOptions.value)
  },
  { deep: true },
)
</script>

<template>
  <div class="product-actions-configurable">
    <form class="product-actions-configurable__form">
      <fieldset
        class="product-actions-configurable__group"
        v-for="attribute in attributes"
        :key="attribute.id"
      >
        <label :for="attribute.name" class="product-actions-configurable__group-label">{{
          attribute.title
        }}</label>
        <select
          :id="attribute.name"
          class="product-actions-configurable__group-select form-select"
          v-model="selectedOptions[attribute.name]"
        >
          <option value="">Choose an option</option>
          <option
            :value="option.value"
            v-for="option in attribute.options"
            :key="option.id"
            :disabled="!isOptionAvailable(attribute.name, option.value)"
          >
            {{ option.title }}
          </option>
        </select>
      </fieldset>
    </form>
    <div class="product-actions-configurable__wrapper row">
      <div class="col-auto"><ProductQuantity :min-qty="1" v-model="qty" /></div>
      <div class="col">
        <button
          class="product-actions-configurable__button btn btn-primary"
          :class="{ 'product-actions-configurable__button--disabled': purchaseDisabled }"
          @click="handlePurchase"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.product-actions-configurable {
  &__form {
    margin-bottom: 0.9375rem; // 15px;
  }
  &__group {
    padding-bottom: 1.25rem; // 20px
    &-label {
      font-size: 0.75rem; // 12px
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 0.625rem; // 10px
    }
    &-select {
      max-width: 450px;
      padding: 0 0.9375rem; // 0 15px
      font-size: 0.8125rem; // 13px
      line-height: 1.15;
      height: 46px;
      border-radius: 6px;
      box-shadow: none !important;
      cursor: pointer;
      border: 1px solid color.adjust(color-token(form-border), $alpha: -0.8) !important;
    }
  }
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
