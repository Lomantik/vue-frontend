import { ref, shallowRef } from 'vue'
import { getProductBySlug } from '@/api/products.api.js'
import { getCategoryById, getCategoryBySlug } from '@/api/categories.api.js'
import { buildCategoryPath } from '@/domain/categories/category.path.js'
import { arraysEqual } from '@/utils/general.js'
import { getPageBySlug } from '@/api/pages.api.js'

/** @typedef {import('@/types/product.js').Product
 * |import('@/types/category.js').Category
 * |import('@/types/page.js').Page
 * |null} ResolvedEntity */

/**
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route
 * @returns {{
 * resolvedType: import('vue').Ref<string>,
 * resolvedData: import('vue').ShallowRef<ResolvedEntity>,
 * loading: import('vue').Ref<boolean>,
 * resolve: () => Promise<void>}}
 */
export function useSlugResolver(route) {
  const resolvedType = ref('')
  /** @type {import('vue').ShallowRef<ResolvedEntity>} */
  const resolvedData = shallowRef(null)
  const loading = ref(false)

  async function resolve() {
    loading.value = true
    const segments = route.params.pathMatch
    const slug = segments[segments.length - 1]

    const product = await getProductBySlug(slug)
    if (product && segments.length === 1) {
      resolvedType.value = 'product'
      resolvedData.value = product
      loading.value = false
      return
    }

    const category = await getCategoryBySlug(slug)
    if (category) {
      const canonicalPath = await buildCategoryPath(category)
      if(arraysEqual(canonicalPath, segments)) {
        const parents = []
        let current = category
        while (current.parentId) {
          const parent = await getCategoryById(current.parentId)
          if (!parent) break
          parents.push(parent)
          current = parent
        }

        resolvedType.value = 'category'
        resolvedData.value = {
          ...category,
          parents: parents
        }
        loading.value = false
        return
      }
    }

    const page = await getPageBySlug(slug)
    if (page && segments.length === 1) {
      resolvedType.value = 'page'
      resolvedData.value = page
      loading.value = false
      return
    }

    resolvedType.value = 'not-found'
    resolvedData.value = null
    loading.value = false
  }

  return {resolvedType, resolvedData, loading, resolve}
}
