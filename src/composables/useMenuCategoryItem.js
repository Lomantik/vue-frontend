import { computed, inject, ref, watch } from 'vue'
import { buildCategoryPath } from '@/domain/categories/category.path.js'

/**
 * @returns {{
 * resolvedLevel: number,
 * activeMenu: any[],
 * openLevel: (level: number, id: any) => void,
 * hasChildren: import('vue').ComputedRef<boolean>,
 * isDropend: import('vue').ComputedRef<boolean>,
 * canonicalPath: import('vue').Ref<string[]>,
 * joinedCanonicalPath: import('vue').ComputedRef<string>
 * }}
 */
export function useMenuCategoryItem(category, link, level) {
  const resolvedLevel = level.value ? level.value : 0
  const { activeMenu, openLevel } = inject('activeMenu')
  const hasChildren = computed(() => {
    return category.value.children && category.value.children.length > 0
  })
  const isDropend = computed(() => {
    return resolvedLevel % 2 !== 0
  })
  const canonicalPath = ref([])
  const joinedCanonicalPath = computed(() => {
    return canonicalPath.value ? canonicalPath.value.join('/') : ''
  })

  watch(
    () => category.value,
    async (category) => {
      canonicalPath.value = await buildCategoryPath(category)
    }, { immediate: true }
  )

  return {
    resolvedLevel,
    activeMenu,
    openLevel,
    hasChildren,
    isDropend,
    canonicalPath,
    joinedCanonicalPath
  }
}
