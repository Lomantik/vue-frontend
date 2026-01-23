<script setup>
import ProductCard from '@/components/product/ProductCard.vue'
import { useProductList } from '@/composables/useProductList.js'
import { toRef } from 'vue'

/** @typedef {import('@/types/category.js').Category} Category */

const props = defineProps({
  /** @type {Category} */
  category: {
    type: Object,
    required: false
  },
  titleTag: {
    type: String,
    required: false
  }
})
const categoryRef = toRef(props, 'category')
const { products } = useProductList(categoryRef)
</script>

<template>
  <div class="row g-30">
    <div class="col-6 col-lg-3" v-for="product in products" :key="product.id">
      <ProductCard :product="product" :category="category" :titleTag="titleTag" />
    </div>
  </div>
</template>

<style scoped>

</style>
