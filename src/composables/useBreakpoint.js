import { onMounted, onUnmounted, ref } from 'vue'

/**
 * @returns {{
 * isMobile: import('vue').Ref<boolean>,
 * }}
 */
export function useBreakpoint() {
  const isMobile = ref(false)

  const check = () => isMobile.value = window.matchMedia('(max-width: 991px)').matches

  onMounted(() => {
    check()
    window.addEventListener('resize', check)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', check)
  })

  return {
    isMobile,
  }
}
