import products from '@/data/products.json'
import categories from '@/data/categories.json'
import pages from '@/data/pages.json'
import aboutHtml from '@/content/pages/about.html?raw'
import contactHtml from '@/content/pages/contact.html?raw'

const pagesContent = {
  about: aboutHtml,
  contact: contactHtml,
}

export const mockService = {
  async getAllProducts() {
    return products
  },
  async getProductsByCategoryId(categoryId) {
    return products.filter(product => product.categoryIds.includes(categoryId))
  },
  async getProductsByCategorySlug(categorySlug) {
    const category = await this.getCategoryBySlug(categorySlug)
    if (!category) return []
    return products.filter(product => product.categoryIds.includes(category.id))
  },
  async getProductById(productId) {
    return products.find(product => product.id === productId)
  },
  async getProductBySlug(productSlug) {
    return products.find(product => product.slug === productSlug)
  },
  async getAllCategories() {
    return categories
  },
  async getCategoryById(categoryId) {
    return categories.find(category => category.id === categoryId)
  },
  async getCategoryBySlug(categorySlug) {
    return categories.find(category => category.slug === categorySlug)
  },
  async getAllPages() {
    const results = []
    for (const page of pages) {
      results.push({...page, content: pagesContent[page.content]})
    }
    return results
  },
  async getPageBySlug(pageSlug) {
    const page = pages.find(page => page.slug === pageSlug)
    if (!page) return
    return {...page, content: pagesContent[page.content]}
  }
}
