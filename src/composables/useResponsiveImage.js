import { computed, ref, watch } from 'vue'
import { getImageById, getImageBySlug } from '@/api/images.api.js'

/** @typedef {import('@/types/images.js').Image} Image */

export function useResponsiveImage(imageKey) {
  /** @type {Image} */
  const image = ref()
  const resolvedSrc = computed(() => {
    if (!image.value) return ''

    return import.meta.env.BASE_URL + image.value.src
  })
  const resolvedSrcset = computed(() => {
    if (!image.value?.srcset?.length) return ''

    return image.value.srcset.map(i => `${import.meta.env.BASE_URL}${i.src} ${i.w}w`).join(', ')
      + `, ${resolvedSrc.value} ${image.value.width}w`
  })

  watch(
    () => imageKey.value,
    async (imageKey) => {
      if (imageKey == null) return

      if (typeof imageKey === 'number') {
        image.value = await getImageById(imageKey)
      } else {
        image.value = await getImageBySlug(imageKey)
      }
    }, { immediate: true }
  )

  return {
    image,
    src: resolvedSrc,
    srcset: resolvedSrcset
  }
}
