/**
 * @typedef {Object} ImageRef
 * @property {number} id
 * @property {number} order
 */

/**
 * @typedef {Object} ShippingDimensions
 * @property {number} length
 * @property {number} width
 * @property {number} height
 * @property {string} unit
 */

/**
 * @typedef {Object} Shipping
 * @property {number} weight
 * @property {ShippingDimensions} dimensions
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
 * @property {string} shortDescription
 * @property {string} sku
 * @property {string[]|null} tags
 * @property {ImageRef[]} images
 * @property {number} mainImageId
 * @property {number|null} qty
 * @property {Shipping|null} shipping
 * @property {Object<string, number>|null} attributes
 * @property {number[]} configurableAttributeIds
 * @property {number[]} variantIds
 * @property {number} defaultVariantId
 * @property {number[]} relatedProductIds
 * @property {boolean} showInCatalog
 * @property {boolean} active
 */
export {}
