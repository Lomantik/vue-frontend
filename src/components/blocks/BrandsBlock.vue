<script setup>

import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
</script>

<template>
  <div class="brands container">
    <div class="px-0 px-md-90">
      <div class="row g-40 g-md-60 text-center w-100">
        <div class="col-md">
          <ResponsiveImage class="w-md-100 mw-180 mw-md-100 h-auto" image-key="l-1" loading="lazy" />
        </div>
        <div class="col-md">
          <ResponsiveImage class="w-md-100 mw-180 mw-md-100 h-auto" image-key="l-2" loading="lazy" />
        </div>
        <div class="col-md">
          <ResponsiveImage class="w-md-100 mw-180 mw-md-100 h-auto" image-key="l-3" loading="lazy" />
        </div>
        <div class="col-md">
          <ResponsiveImage class="w-md-100 mw-180 mw-md-100 h-auto" image-key="l-4" loading="lazy" />
        </div>
        <div class="col-md">
          <ResponsiveImage class="w-md-100 mw-180 mw-md-100 h-auto" image-key="l-5" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
