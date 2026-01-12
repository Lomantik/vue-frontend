<script setup>
import { ref, watchEffect } from 'vue'
import { getAllProducts } from '@/api/products.api.js'
import ProductCard from '@/components/ProductCard.vue'

/** @typedef {import('@/types/product.js').Product} Product */

/** @type {import('vue').Ref<Product[]>} */
const products = ref([])

watchEffect(async () => {
  products.value = await getAllProducts()
})
</script>

<template>
  <section class="hero">
    <div class="container px-0">
      <div class="row">
        <div class="col-12">
          <h1 class="pb-2">Shop</h1>
          <div class="row g-3">
            <div class="col-12 col-sm-6 col-md-3" v-for="product in products" :key="product.id">
              <ProductCard :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
