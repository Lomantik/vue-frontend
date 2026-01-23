/** @typedef {import('@/types/meta.js').Breadcrumb} Breadcrumb */
/** @typedef {import('@/types/meta.js').AppRouteMeta} AppRouteMeta */

/**
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route
 * @return {AppRouteMeta}
 */
export function getLayoutMeta(route) {
  return /** @type {AppRouteMeta} */ route.meta
}

/**
 * @param {AppRouteMeta} meta
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route
 * @return {string|null}
 */
export function resolveBreadcrumb(meta, route) {
  if (!meta.breadcrumb) return null

  return typeof meta.breadcrumb === 'function' ? meta.breadcrumb(route) : meta.breadcrumb
}
