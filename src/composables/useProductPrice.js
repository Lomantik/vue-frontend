import { computed, ref, watch } from 'vue'
import { getAllChildProducts } from '@/utils/product.js'

/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @param {Product} product
 * @returns {{
 * minPrice: import('vue').ComputedRef<string|null>,
 * maxPrice: import('vue').ComputedRef<string|null>,
 * hasDiscount: import('vue').ComputedRef<boolean>,
 * salePrice: import('vue').ComputedRef<string|null>,
 * isRange: import('vue').ComputedRef<boolean>
 * }}
 */
export function useProductPrice(product) {
  const prices = ref([])
  const minPrice = computed(() => {
    return prices.value.length ? Math.min(...prices.value).toFixed(2) : null
  })
  const maxPrice = computed(() => {
    return prices.value.length ? Math.max(...prices.value).toFixed(2) : null
  })
  const isRange = computed(() => {
    return minPrice.value < maxPrice.value
  })
  const hasDiscount = computed(() => {
    return typeof product.value.salePrice === 'number'
  })
  const salePrice = computed(() => {
    return product.value.salePrice.toFixed(2)
  })

  watch(
    () => product.value,
    async (product) => {
      prices.value = []
      if (product.type === 'simple') {
        prices.value.push(product.price)
      } else {
        const childProducts = await getAllChildProducts(product)
        for (const childProduct of childProducts) {
          prices.value.push(childProduct.salePrice ? childProduct.salePrice : childProduct.price)
        }
      }
    },
    { immediate: true }
  )

  return {
    minPrice,
    maxPrice,
    hasDiscount,
    salePrice,
    isRange
  }
}
