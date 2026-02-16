import { dataService } from '@/services/data.service.js'

/** @typedef {import('@/types/attribute.js').Attribute} Attribute */

/**
 * @param {number} attributeId
 * @returns {Promise<Attribute>}
 */
export async function getAttributeById(attributeId) {
  return dataService.getAttributeById(attributeId)
}
