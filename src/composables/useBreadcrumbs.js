import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { getLayoutMeta } from '@/router/meta.js'
import { usePageContextStore } from '@/stores/pageContext.store.js'
import { useNavigationStore } from '@/stores/navigation.store.js'

/** @typedef {import('@/types/product.js').Product} Product */
/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/page.js').Page} Page */
/** @typedef {import('@/types/meta.js').AppRouteMeta} AppRouteMeta */
/** @typedef {import('@/types/meta.js').Breadcrumb} Breadcrumb */

/**
 * @param {Category} category
 */
export function buildCategoryBreadcrumbs(category) {
  const crumbs = []
  let path = ''
  for (const parent of category.parents) {
    path += '/' + parent.slug
    crumbs.push({label: parent.title, path: path})
  }
  path += '/' + category.slug
  crumbs.push({label: category.title, path: path})

  return crumbs
}

/**
 * @returns {{
 * meta: import('vue').ComputedRef<import('@/router/meta').AppRouteMeta>,
 * breadcrumbs: import('vue').ComputedRef<Breadcrumb[]>
 * }}
 */
export function useBreadcrumbs() {
  const route = useRoute()
  /** @type {import('vue').ComputedRef<import('@/router/meta').AppRouteMeta>} */
  const meta = computed(() => getLayoutMeta(route))

  const pageContext = usePageContextStore()
  const navStore = useNavigationStore()

  const breadcrumbs = computed(() => {
    const crumbs = []

    if (!meta.value.hideHome) crumbs.push({ label: 'Home', path: '/' })

    if (meta.value.breadcrumb) {
      crumbs.push({ label: meta.value.breadcrumb, path: route.path })
    } else {
      switch (pageContext.type) {
        case 'product':
          /** @type {Product} */
          const product = pageContext.data
          if (navStore.categoryTrail) {
            /** @type {Category} */
            const trail = navStore.categoryTrail
            crumbs.push(...buildCategoryBreadcrumbs(trail))
          } else if (navStore.fixedTrail) {
            /** @type {Category} */
            const trail = navStore.fixedTrail
            crumbs.push({ label: trail.title, path: trail.path })
          }
          crumbs.push({ label: product.title, path: product.slug })
          break
        case 'category':
          /** @type {Category} */
          const category = pageContext.data
          crumbs.push(...buildCategoryBreadcrumbs(category))
          break
        case 'page':
          /** @type {Page} */
          const page = pageContext.data
          crumbs.push({ label: page.title, path: page.slug })
          break
        case 'not-found':
          crumbs.length = 0
      }
    }
    return crumbs
  })

  return { meta, breadcrumbs }
}
