<script setup>
import { ref, watchEffect } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { getProductsByCategoryId } from '@/api/products.api.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const products = ref([])

watchEffect(async () => {
  products.value = await getProductsByCategoryId(5)
})
</script>

<template>
  <section class="product-carousel py-3" v-if="products">
    <div class="container">
      <Swiper
        :modules="[Navigation, Autoplay ]"
        navigation
        :autoplay="{delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true}"
        :slides-per-view="4"
        :space-between="16"
        :breakpoints="{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 }}">
        <SwiperSlide v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
</style>
