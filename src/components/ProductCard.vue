<script setup>
import { RouterLink } from 'vue-router'
import { useNavigationStore } from '@/stores/navigation.store.js'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true
  },
  /** @type {Category} */
  category: {
    type: Object,
    required: false
  }
})

const navStore = useNavigationStore()
</script>

<template>
  <div class="card me-sm-3 mb-sm-3">
    <img class="card-img-top" :src="product.imageUrl" alt="">
    <div class="card-body">
      <h4 class="card-title text-center">{{ product.title }}</h4>
      <p class="card-text text-center">${{ product.price }}</p>
      <RouterLink :to="'/' + product.slug"
                  class="btn btn-primary stretched-link w-100" @click="category && navStore.setCategoryTrail(category)">Shop
        Now
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
}
</style>
