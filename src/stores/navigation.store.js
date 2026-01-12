import { defineStore } from 'pinia'
import { ref } from 'vue'

/** @typedef {import('@/types/category').Category} Category */
/** @typedef {{ title: string, path: string }} FixedTrail */

/**
 * @returns {{
 * categoryTrail: import('vue').Ref<Category|null>,
 * fixedTrail: import('vue').Ref<Category|null>,
 * setCategoryTrail(trail: Category): void,
 * setFixedTrail(trail: Category): void,
 * clearTrails(): void
 * }}
 */
export const useNavigationStore = defineStore('navigation', () => {
  const categoryTrail = ref(null)
  const fixedTrail = ref(null)

  function setCategoryTrail(trail) {
    categoryTrail.value = trail
  }

  function setFixedTrail(trail) {
    fixedTrail.value = trail
  }

  function clearTrails() {
    categoryTrail.value = null
    fixedTrail.value = null
  }

  return {
    categoryTrail,
    fixedTrail,
    setCategoryTrail,
    setFixedTrail,
    clearTrails
  }
}, /** @type {any} */ ({
  persist: {
    key: 'nav',
    storage: sessionStorage,
    paths: ['categoryTrail', 'fixedTrail']
  }
}))
