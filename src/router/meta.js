/**
 * @typedef {Object} Breadcrumb
 * @property {string} label
 * @property {string} path
 */

/**
 * @typedef {Object} AppRouteMeta
 * @property {string} layout
 * @property {boolean} hideHome
 * @property {boolean} hideBreadcrumbs
 * @property {string|((route: import('vue-router').RouteLocationNormalizedLoaded) => string)=} breadcrumb
 * @property {(route: import('vue-router').RouteLocationNormalizedLoaded) => Breadcrumb} parentBreadcrumb
 */

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

export {}
