import { getCategoryById } from '@/api/categories.api.js'
import { computed, ref, watch } from 'vue'
import { useNavigationStore } from '@/stores/navigation.store.js'

/** @typedef {import('@/types/category.js').Category} Category */

/**
 * @returns {{
 * resolvedTitleTag: import('vue').ComputedRef<string>,
 * navStore: ReturnType<typeof useNavigationStore>,
 * primaryCategory: import('vue').Ref<Category>
 * }}
 */
export function useProductCard(product, titleTag) {
  const resolvedTitleTag = computed(() => {
    return titleTag.value ? titleTag.value : 'span'
  })
  /** @type {ReturnType<typeof useNavigationStore>} */
  const navStore = useNavigationStore()
  const primaryCategory = ref()

  watch(
    () => product.value?.primaryCategoryId,
    async (primaryCategoryId) => {
      primaryCategory.value = await getCategoryById(primaryCategoryId)
    }, { immediate: true }
  )

  return {
    resolvedTitleTag,
    navStore,
    primaryCategory
  }
}
