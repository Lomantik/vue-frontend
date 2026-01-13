import { getCategoryById } from '@/api/categories.api.js'
import { describe, test, expect } from 'vitest'

describe('getCategoryById', () => {
  test('should return the same CategoryID as the requested one', async () => {
    const category = await getCategoryById(1)
    expect(category.id).toBe(1)
  })
})
