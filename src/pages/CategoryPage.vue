<script setup>
import { ref, watchEffect } from 'vue'
import { getProductsByCategoryId } from '@/api/products.api.js'
import ProductList from '@/components/product/ProductList.vue'

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
  <section>
    <div class="container pb-4">
      <div class="row">
        <div class="col-12">
          <h1 class="pb-2" v-if="category">{{ category.title }}</h1>
          <ProductList :category="category" :titleTag="'h3'" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
