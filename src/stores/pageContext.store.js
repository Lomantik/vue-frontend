import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'

/** @typedef {import('@/types/product.js').Product
 * |import('@/types/category.js').Category
 * |import('@/types/page.js').Page
 * |null} ResolvedEntity */

/**
 * @returns {{
 * type: import('vue').Ref<string>,
 * data: import('vue').ShallowRef<ResolvedEntity|null>,
 * loading: import('vue').Ref<boolean>
 * }}
 */
export const usePageContextStore = defineStore('pageContext', () => {
  const type = ref('not-found')
  const data = shallowRef(null)
  const loading = ref(false)

  return {
    type,
    data,
    loading
  }
})
