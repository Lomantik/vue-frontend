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
export {}
