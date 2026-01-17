import { getProductById } from '@/api/products.api.js'
import { computed, ref, watch } from 'vue'
import { getAllChildProducts } from '@/utils/product.js'

/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @param {Product} product
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
    return typeof product.salePrice === 'number'
  })

  const salePrice = computed(() => {
    return product.salePrice.toFixed(2)
  })

  watch(
    () => product,
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
