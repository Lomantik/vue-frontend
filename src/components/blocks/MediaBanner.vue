<script setup>
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'

/**
 * @typedef {number|string} ImageKey
 */

defineProps({
  grayed: {
    type: Boolean,
    required: false,
  },
  /** @type {import('vue').PropType<ImageKey>} */
  imageKey: {
    type: [Number, String],
    required: true,
  },
  lazy: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <div class="media-banner">
    <span v-if="grayed" class="media-banner__grayer"></span>
    <ResponsiveImage
      :image-key="imageKey"
      :loading="lazy ? 'lazy' : undefined"
      class="media-banner__image"
    />
    <div class="media-banner__info">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.media-banner {
  position: relative;
  padding: 10%;
  &__grayer {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: color-token(grayer);
    opacity: 0.3;
    z-index: 1;
  }
  &__image {
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
  }
  &__info {
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
}
</style>
