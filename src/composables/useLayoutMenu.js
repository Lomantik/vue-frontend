import { getCategoryTree } from '@/api/categories.api.js'
import { computed, provide, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useBreakpoint } from '@/composables/useBreakpoint.js'

/** @typedef {import('@/types/category.js').Category} Category */

/**
 * @returns {{
 * showMobileMenu: import('vue').Ref<boolean>,
 * showMobileMenuClass: import('vue').ComputedRef<string>,
 * activeMenu: import('vue').Ref<any[]>,
 * openLevel: (level: number, id: any) => void,
 * closeAll: () => void,
 * categoryTree: import('vue').Ref<Category[]>
 * }}
 */
export function useLayoutMenu(showMobileMenu) {
  const showMobileMenuClass = computed(() => {
    return showMobileMenu.value ? 'show' : ''
  })
  const activeMenu = ref([])
  /** @type {import('vue-router').RouteLocationNormalizedLoaded} */
  const route = useRoute()
  const categoryTree = ref()
  const { isMobile } = useBreakpoint()

  function openLevel(level, id) {
    activeMenu.value[level] = id
  }

  function closeAll() {
    activeMenu.value = []
  }

  provide('activeMenu', {
    activeMenu,
    openLevel(level, id) {
      activeMenu.value[level] = id
    },
    toggleLevel(level, id) {
      if (activeMenu.value[level] === id) activeMenu.value[level] = undefined
      else activeMenu.value[level] = id
    }
  })

  watch(
    () => route.fullPath,
    () => {
      closeAll()
    }
  )

  watchEffect(async () => {
    categoryTree.value = await getCategoryTree()
  })

  return {
    showMobileMenu,
    showMobileMenuClass,
    activeMenu,
    openLevel,
    closeAll,
    categoryTree,
    isMobile
  }
}
