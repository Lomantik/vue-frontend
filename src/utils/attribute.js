/** @typedef {import('@/types/attribute.js').Attribute} Attribute */

/**
 * @param {Product} product
 * @returns {Promise<Attribute[]>}
 */
export async function getProductConfigurableAttributes(product) {
  return await Promise.all(product.configurableAttributeIds.map(async (id) => await id))
}
