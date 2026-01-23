import { ref, watch } from 'vue'
import { getAllProducts, getProductsByCategoryId } from '@/api/products.api.js'

/** @typedef {import('@/types/product.js').Product} Product */

export function useProductList(category) {
  /** @type {import('vue').Ref<Product[]>} */
  const products = ref([])

  watch(
    () => category.value?.id,
    async (categoryId) => {
      if (categoryId) products.value = await getProductsByCategoryId(categoryId)
      else products.value = await getAllProducts()
    }, { immediate: true }
  )

  return {
    products
  }
}
