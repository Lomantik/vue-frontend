<script setup>
import ProductList from '@/components/product/ProductList.vue'
</script>

<template>
  <section>
    <div class="container pb-4">
      <h1 class="pb-2">Shop</h1>
      <ProductList :titleTag="'h3'" />
    </div>
  </section>
</template>

<style scoped>

</style>
