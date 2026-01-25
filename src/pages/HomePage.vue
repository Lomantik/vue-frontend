<script setup>
import HeroBlock from '@/components/blocks/HeroBlock.vue'
import ProductCarousel from '@/components/product/ProductCarousel.vue'
import BlogPromoBlock from '@/components/blocks/BlogPromoBlock.vue'
import BannerGrid from '@/components/blocks/BannerGrid.vue'
import BrandsBlock from '@/components/blocks/BrandsBlock.vue'
import SubscribeBlock from '@/components/blocks/SubscribeBlock.vue'
import JourneyBlock from '@/components/blocks/JourneyBlock.vue'
</script>

<template>
  <div class="d-flex flex-column gap-30">
    <HeroBlock class="mb-50" />
    <ProductCarousel :categoryId="5" :title="'Best Sellers'" class="mb-90" />
    <BlogPromoBlock class="mb-102" />
    <BannerGrid class="mb-80 mb-sm-30" />
    <BrandsBlock class="mb-50 mb-sm-0" />
    <SubscribeBlock class="mb-124" />
    <JourneyBlock class="mb-70" />
  </div>
</template>

<style scoped>

</style>
