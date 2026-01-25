<script setup>

import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'

defineProps({
  grayed: {
    type: Boolean,
    required: false
  },
  imageId: {
    type: Number,
    required: true
  },
  lazy: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div class="position-relative p-10p">
    <span v-if="grayed" class="bg-grayer position-absolute d-block w-100 h-100 top-0 left-0
      bottom-0 right-0 bg-black opacity-30 z-1"></span>
    <ResponsiveImage :image-id="imageId" :loading="lazy ? 'lazy' : 'auto'" decoding="async"
                     class="w-100 object-fit-cover position-absolute z-0 left-0 top-0 bottom-0
                     right-0 h-100" />
    <div class="z-1 h-100 d-flex flex-column justify-content-between position-relative">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
