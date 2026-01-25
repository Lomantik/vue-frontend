<script setup>
import { RouterLink } from 'vue-router'
import MediaSplit from '@/components/blocks/MediaSplit.vue'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
</script>

<template>
  <section class="blog-promo container">
    <MediaSplit>
      <template #content>
        <div class="mw-462">
          <p class="subtitle fs-13 ls-15 fw-medium lh-170 mb-5">CERTIFIED GREENERY</p>
          <h2 class="fs-28 fs-md-36 fs-lg-44 lh-145 mb-16">Our <em>plant finder</em> makes it real easy</h2>
          <p class="fs-17 mb-36">
            We only work with the very best! Our team of expert plant care specialists take great
            care to make sure your plants are healthy and thriving when they arrive at your doorstep.
            Plants are usually only in our care for a few days.
          </p>
          <RouterLink class="btn btn-primary" to="/shop">
            TAKE THE QUIZ
          </RouterLink>
        </div>
      </template>
      <template #media>
        <ResponsiveImage :image-id="22" loading="lazy" decoding="async" class="w-100 h-auto" />
      </template>
    </MediaSplit>
  </section>
</template>

<style scoped>

</style>
