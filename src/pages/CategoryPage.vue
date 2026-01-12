<script setup>
import { ref, watchEffect } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { getProductsByCategoryId } from '@/api/products.api.js'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

const props = defineProps(({
  /** @type {{product: Category}} */
  category: {
    type: Object,
    required: true
  },
}))

/** @type {import('vue').Ref<Product[]>} */
const products = ref([])

watchEffect(async () => {
  products.value = await getProductsByCategoryId(props.category.id)
})
</script>

<template>
  <section class="hero">
    <div class="container px-0">
      <div class="row">
        <div class="col-12">
          <h1 class="pb-2" v-if="category">{{ category.title }}</h1>
          <div class="row g-3" v-if="category">
            <div class="col-12 col-sm-6 col-md-3" v-for="product in products" :key="product.id">
              <ProductCard :product="product" :category="category" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
