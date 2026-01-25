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
    required: true
  },
  title: {
    type: String,
    required: false
  },
})
const categoryIdRef = toRef(props, 'categoryId')
const { products } = useProductCarousel(categoryIdRef)
</script>

<template>
  <section class="product-carousel container py-3" v-if="products">
      <div class="row mb-14">
        <div class="col-6">
          <h3 v-if="title" class="fs-34 mb-16">{{ title }}</h3>
        </div>
        <div class="col-6 text-end">
          <RouterLink class="d-inline-flex shop-all text-decoration-none fs-13 ls-02 fw-medium
            align-items-center" to="/shop">
            SHOP ALL BEST-SELLERS
          </RouterLink>
        </div>
      </div>
      <Swiper
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="{ 320: { slidesPerView: 2 }, 555: { slidesPerView: 4 }}">
        <SwiperSlide v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
  </section>
</template>

<style scoped lang="scss">
@use "sass:map";

.shop-all::after {
  content: content('big-arrow-right');
  margin-left: spacer(12);
  font-size: font-size(7);
  font-family: map.get($custom-font-family, 'blooms');
}
</style>
