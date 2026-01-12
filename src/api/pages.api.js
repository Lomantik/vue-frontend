import { dataService } from '@/services/data.service.js'
/** @typedef {import('@/types/page.js').Page} Page */

/**
 * @returns {Promise<Page[]>}
 */
export async function getAllPages() {
  return dataService.getAllPages()
}

/**
 * @param {string} pageSlug
 * @returns {Promise<Page[]>}
 */
export async function getPageBySlug(pageSlug) {
  return dataService.getPageBySlug(pageSlug)
}
