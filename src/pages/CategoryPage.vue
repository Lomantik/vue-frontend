<script setup>
import ProductList from '@/components/product/ProductList.vue'
import PageTitle from '@/components/blocks/PageTitle.vue'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

defineProps({
  /** @type {{product: Category}} */
  category: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section>
    <div class="category-page">
      <PageTitle :title="category.title" v-if="category" />
      <div class="category-page__product-list container">
        <ProductList :category="category" :titleTag="'h3'" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.category-page {
  padding-bottom: 2.5rem; // 40px
  @include media-breakpoint-up(md) {
    padding-bottom: 3.75rem; // 60px
  }
  &__product-list {
    padding-top: 1.875rem; // 30px
    padding-bottom: 1.875rem; // 30px
  }
}
</style>
