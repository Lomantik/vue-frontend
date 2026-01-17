import { getProductById } from '@/api/products.api.js'

/** @typedef {import('@/types/product.js').Product} Product */

/**
 * @param {Product} product
 * @returns {Promise<Product[]>}
 */
export async function getAllChildProducts(product) {
  /** @type Product[] */
  const childProducts = []
  if (product.type !== 'simple' ) {
    for (const variantId of product.variantIds) {
      const variant = await getProductById(variantId)
      if (variant.type === 'simple') childProducts.push(variant)
      else childProducts.push(...await getAllChildProducts(variant))
    }
  }

  return childProducts
}
