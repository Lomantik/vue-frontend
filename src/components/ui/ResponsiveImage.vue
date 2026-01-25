<script setup>
import { getImageById } from '@/api/images.api.js'
import { ref, watchEffect } from 'vue'

/** @typedef {import('@/types/images.js').Image} Image */

const props = defineProps({
  imageId: {
    type: Number,
    required: true
  }
})

/** @type {Image} */
const image = ref()
const srcset = ref('')
watchEffect(async () => {
  image.value = await getImageById(props.imageId)
  if (image.value.srcset.length > 0) {
    srcset.value = image.value.srcset.map(i => `${import.meta.env.BASE_URL}${i.src} ${i.w}w`)
      .join(', ') + `, ${import.meta.env.BASE_URL}${image.value.src} ${image.value.width}w`
  }
})
</script>

<template>
  <img v-if="image" :src="`/${image.src}`" :alt="image.alt"
       :srcset="srcset"
       :width="image.width"
       :height="image.height"
       :sizes="`(max-width: ${image.width}px) 100vw, ${image.width}px`">
</template>

<style scoped>

</style>
