<script setup>
import ProductCard from '@/components/product/ProductCard.vue'
import { ref, watchEffect } from 'vue'
import { getAllProducts, getProductsByCategoryId } from '@/api/products.api.js'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

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

/** @type {import('vue').Ref<Product[]>} */
const products = ref([])

watchEffect(async () => {
  if (props.category) products.value = await getProductsByCategoryId(props.category.id)
  else products.value = await getAllProducts()
})
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
