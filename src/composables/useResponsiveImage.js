import { ref, watch } from 'vue'
import { getImageById, getImageBySlug } from '@/api/images.api.js'

/** @typedef {import('@/types/images.js').Image} Image */

export function useResponsiveImage(imageKey) {
  /** @type {Image} */
  const image = ref()
  const srcset = ref('')

  watch(
    () => imageKey.value,
    async (imageKey) => {
      if (imageKey == null) return

      if (typeof imageKey === 'number') {
        image.value = await getImageById(imageKey)
      } else {
        image.value = await getImageBySlug(imageKey)
      }
      if (image.value?.srcset?.length > 0) {
        srcset.value = image.value.srcset.map(i => `${import.meta.env.BASE_URL}${i.src} ${i.w}w`)
          .join(', ') + `, ${import.meta.env.BASE_URL}${image.value.src} ${image.value.width}w`
      }
    }, { immediate: true }
  )

  return {
    image,
    srcset
  }
}
