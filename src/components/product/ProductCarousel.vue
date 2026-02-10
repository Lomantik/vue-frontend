<script setup>
import ProductCard from '@/components/product/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useProductCarousel } from '@/composables/useProductCarousel.js'
import { toRef } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  categoryId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
})
const categoryIdRef = toRef(props, 'categoryId')
const { products } = useProductCarousel(categoryIdRef)
</script>

<template>
  <section class="product-carousel container" v-if="products">
    <div class="product-carousel__wrapper row">
      <div class="col-6">
        <h3 v-if="title">{{ title }}</h3>
      </div>
      <div class="product-carousel__main-link col-6">
        <RouterLink class="product-carousel__main-link-link shop-all" to="/shop">
          SHOP ALL BEST-SELLERS
        </RouterLink>
      </div>
    </div>
    <Swiper
      :slides-per-view="4"
      :space-between="30"
      :breakpoints="{ 320: { slidesPerView: 2 }, 555: { slidesPerView: 4 } }"
    >
      <SwiperSlide v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped lang="scss">
@use 'sass:map';

.product-carousel {
  padding-top: 0.1875rem; // 3px
  padding-bottom: 0.1875rem; // 3px
  &__wrapper {
    margin-bottom: 0.875rem; // 14px
  }
  &__main-link {
    text-align: right;
    &-link {
      display: inline-flex;
      font-size: 0.8125rem; // 13px
      letter-spacing: 0.02em;
      font-weight: 500;
      align-items: center;
      &::after {
        content: content-token('big-arrow-right');
        margin-left: 0.75rem; // 12px
        font-size: 0.4375rem; // 7px
        font-family: map.get($custom-font-family, 'blooms');
      }
    }
  }
}
</style>
