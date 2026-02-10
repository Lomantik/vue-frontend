import { computed, inject, ref, watch } from 'vue'
import { buildCategoryPath } from '@/domain/categories/category.path.js'

/**
 * @returns {{
 * itemTitle: import('vue').ComputedRef<string>,
 * itemSlug: import('vue').ComputedRef<string>,
 * hasChildren: import('vue').ComputedRef<boolean>,
 * currentLevel: import('vue').ComputedRef<number>,
 * showExpandable: import('vue').ComputedRef<boolean>,
 * isDropend: import('vue').ComputedRef<boolean>
 * toggleLevel: (level: number, id: any) => void,
 * openLevel: (level: number, id: any) => void,
 * }}
 */
export function useMenuCategoryItem(category, link, level) {
  const { activeMenu, openLevel, toggleLevel } = inject('activeMenu')
  const itemTitle = computed(() => {
    return link.value?.title ? link.value.title : category.value?.title
  })
  const itemSlug = computed(() => {
    return link.value?.slug ? link.value.slug : joinedCanonicalPath.value
  })
  const hasChildren = computed(() => {
    return link.value ? true : (category.value.children
      && category.value?.children?.length > 0)
  })
  const currentLevel = computed(() => {
    return level.value ? level.value : 0
  })
  const showExpandable = computed(() => {
    return link.value?.slug
      ? activeMenu.value[currentLevel.value] === link.value.slug
      : activeMenu.value[currentLevel.value] === category.value.slug
  })
  const isDropend = computed(() => {
    return currentLevel.value % 2 !== 0
  })
  const joinedCanonicalPath = computed(() => {
    return canonicalPath.value.join('/')
  })

  const canonicalPath = ref([])
  watch(
    () => category.value,
    async (category) => {
      canonicalPath.value = await buildCategoryPath(category)
    }, { immediate: true }
  )

  return {
    itemTitle,
    itemSlug,
    hasChildren,
    currentLevel,
    showExpandable,
    isDropend,
    toggleLevel,
    openLevel
  }
}
