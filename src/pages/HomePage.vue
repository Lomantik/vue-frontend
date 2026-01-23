<script setup>
import LayoutHero from '@/components/layout/LayoutHero.vue'
import ProductCarousel from '@/components/product/ProductCarousel.vue'
</script>

<template>
  <LayoutHero />
  <ProductCarousel :categoryId="5" />
</template>

<style scoped>

</style>
