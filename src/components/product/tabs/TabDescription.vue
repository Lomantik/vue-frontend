<script setup>
/** @typedef {import('@/types/product.js').Product} Product */

import { resolveHtmlUrls } from '@/domain/urls.js'

/** @type {{ product: Product }} */
defineProps({
  /** @type { import('vue').PropType<Product> } */
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="product-description" v-html="resolveHtmlUrls(product.description)" />
</template>

<style scoped lang="scss"></style>
