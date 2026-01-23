<script setup>
import ProductCard from '@/components/product/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useProductCarousel } from '@/composables/useProductCarousel.js'
import { toRef } from 'vue'

const props = defineProps({
  categoryId: {
    type: Number,
    required: true
  },
})
const categoryIdRef = toRef(props, 'categoryId')
const { products } = useProductCarousel(categoryIdRef)
</script>

<template>
  <section class="product-carousel py-3 mt-10 mt-lg-20" v-if="products">
    <div class="container">
      <Swiper
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="{ 320: { slidesPerView: 2 }, 555: { slidesPerView: 4 }}">
        <SwiperSlide v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>

</style>
