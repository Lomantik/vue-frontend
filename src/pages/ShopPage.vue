<script setup>
import ProductList from '@/components/product/ProductList.vue'
</script>

<template>
  <section>
    <div class="page container pb-4">
      <h1 class="page__title pb-2">Shop</h1>
      <ProductList :titleTag="'h3'" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.page {
  &__title {
    font-size: 2.5rem; // 40px
  }
}
</style>
