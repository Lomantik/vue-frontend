/**
 * @typedef {Object} ProductRouteParams
 * @property {string} prodSlug
 * @property {string} catSlug
 */

/**
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route
 * @return {string|null}
 */
export function getProductSlug(route) {
  return route.params.prodSlug
}

/**
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route
 * @return {string|null}
 */
export function getCategorySlug(route) {
  return route.params.catSlug
}
