import { ref, watch } from 'vue'
import { getProductsByCategoryId } from '@/api/products.api.js'

/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @returns {{
 * products: import('vue').Ref<Product[]>,
 * }}
 */
export function useProductCarousel(categoryId) {
  const products = ref([])

  watch(
    () => categoryId.value,
    async (categoryId) => {
      products.value = await getProductsByCategoryId(categoryId)
    }, { immediate: true }
  )

  return {
    products
  }
}
