/**
 * @param {string} url
 * @returns {string}
 */
export function getImageUrl(url) {
  return import.meta.env.BASE_URL + url
}
