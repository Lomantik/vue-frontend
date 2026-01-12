import products from '@/data/products.json'
import pages from '@/data/pages.json'

export const httpService = {
  async getAllProducts() {
    return []
  },
  async getProductsByCategoryId(categoryId) {
    return []
  },
  async getProductsByCategorySlug(categorySlug) {
    return []
  },
  async getProductById(productId) {
    return {}
  },
  async getProductBySlug(productSlug) {
    return {}
  },
  async getAllCategories() {
    return []
  },
  async getCategoryById(categoryId) {
    return {}
  },
  async getCategoryBySlug(categorySlug) {
    return {}
  },
  async getAllPages() {
    return []
  },
  async getPageBySlug(pageSlug) {
    return {}
  }
}
