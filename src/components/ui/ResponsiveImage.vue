<script setup>
import { useResponsiveImage } from '@/composables/useResponsiveImage.js'
import { toRef } from 'vue'

/**
 * @typedef {number|string} ImageKey
 */

const props = defineProps({
  /** @type {import('vue').PropType<ImageKey>} */
  imageKey: {
    type: [Number, String],
    required: true,
  },
})

const imageKeyRef = toRef(props, 'imageKey')
const { image, src, srcset } = useResponsiveImage(imageKeyRef)
</script>

<template>
  <img
    v-if="image"
    :src="`${src}`"
    :alt="image.alt"
    :srcset="srcset !== '' ? srcset : undefined"
    :width="image.width"
    :height="image.height"
    :sizes="srcset !== '' ? `(max-width: ${image.width}px) 100vw, ${image.width}px` : undefined"
    decoding="async"
  />
</template>

<style scoped></style>
