<script setup>
import ProductSlider from '@/components/product/ProductSlider.vue'
import { getProductById } from '@/api/products.api.js'
import { ref, watchEffect } from 'vue'

defineProps({
  title: {
    type: String,
    required: false,
  },
})

const products = ref([])

watchEffect(async () => {
  products.value = await Promise.all([1, 2, 3, 4].map(async (id) => await getProductById(id)))
})
</script>

<template>
  <ProductSlider
    :title="title"
    :products="products"
    class="section section--carousel"
    link-title="SHOP ALL BEST-SELLERS"
    link-url="/shop"
  />
</template>

<style scoped lang="scss"></style>
