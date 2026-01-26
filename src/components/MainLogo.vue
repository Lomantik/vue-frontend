<script setup>

import { RouterLink } from 'vue-router'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
</script>

<template>
  <div class="logo py-20 py-lg-0 d-flex ms-45 ms-lg-0 me-0 me-lg-45">
    <RouterLink class="d-flex" to="/">
      <ResponsiveImage class="w-auto mh-22" image-key="logo-2x" />
    </RouterLink>
  </div>
</template>

<style scoped>

</style>
