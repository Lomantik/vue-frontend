<script setup>
import { ref, watchEffect } from 'vue'
import { getProductById } from '@/api/products.api.js'
import ProductSlider from '@/components/product/ProductSlider.vue'

/** @typedef {import('@/types/product.js').Product} Product */

/** @type {{ product: Product }} */
const props = defineProps({
  /** @type { import('vue').PropType<Product> } */
  product: {
    type: Object,
    required: true,
  },
})

const products = ref([])

watchEffect(async () => {
  products.value = await Promise.all(
    props.product.relatedProductIds.map(async (id) => await getProductById(id)),
  )
})
</script>

<template>
  <ProductSlider
    :title="'Related products'"
    :products="products"
    class="section section--carousel"
  />
</template>

<style scoped lang="scss"></style>
