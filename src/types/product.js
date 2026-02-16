/**
 * @typedef {Object} ImageRef
 * @property {number} id
 * @property {number} order
 */

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} slug
 * @property {string} title
 * @property {string} type
 * @property {number[]|null} categoryIds
 * @property {number} primaryCategoryId
 * @property {number} price
 * @property {number|null} salePrice
 * @property {string} description
 * @property {string} sku
 * @property {string[]|null} tags
 * @property {ImageRef[]} images
 * @property {number} mainImageId
 * @property {number|null} qty
 * @property {Object<string, number>|null} attributes
 * @property {number[]} configurableAttributeIds
 * @property {number[]} variantIds
 * @property {number} defaultVariantId
 * @property {boolean} showInCatalog
 * @property {boolean} active
 */
export {}
