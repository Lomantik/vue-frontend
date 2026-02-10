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
  <div class="page page--home">
    <HeroBlock class="section section--hero" />
    <ProductCarousel :categoryId="5" :title="'Best Sellers'" class="section section--carousel" />
    <BlogPromoBlock class="section section--blog" />
    <BannerGrid class="section section--banners" :title="'Shop Your <em>Favorite Collections</em>'" />
    <BrandsBlock class="section section--brands" />
    <SubscribeBlock class="section section--subscribe" />
    <JourneyBlock class="section section--journey" />
  </div>
</template>

<style scoped lang="scss">
.page--home {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .section {
    &--hero {
      margin-bottom: 3.125rem; // 50px
    }
    &--carousel {
      margin-bottom: 5.625rem; // 90px
    }
    &--blog {
      margin-bottom: 6.375rem; // 102px
    }
    &--banners {
      margin-bottom: 5rem; // 80px
      @include media-breakpoint-up(sm) {
        margin-bottom: 1.875rem; // 30px
      }
    }
    &--brands {
      margin-bottom: 3.125rem; // 50px
      @include media-breakpoint-up(sm) {
        margin-bottom: 0;
      }
    }
    &--subscribe {
      margin-bottom: 6.25rem; // 100px
    }
    &--journey {
      margin-bottom: 4.375rem; // 70px
    }
  }
}
</style>
