<script setup>

import { RouterLink } from 'vue-router'
import MediaBanner from '@/components/blocks/MediaBanner.vue'
</script>

<template>
  <section class="hero container-fluid px-50 px-xl-0">
    <MediaBanner class="d-flex min-vh-65 overflow-hidden ratio-unset
      p-xl-123 justify-content-start align-items-end fs-17 mx-m50 mx-xl-0" :grayed="true" image-key="hero-img">
      <h1 class="text-white fs-54 lh-145 mb-16">Plants made easy</h1>
      <p class="text-white fs-17 mb-46">
        Blooms co. helps you discover the best plants for your space, delivers
        <br/>
        them to your door and helps you look after them.
      </p>
      <div>
        <RouterLink class="btn btn-secondary" to="/shop">
          SHOP PLANTS
        </RouterLink>
      </div>
    </MediaBanner>
  </section>
</template>

<style scoped>

</style>
