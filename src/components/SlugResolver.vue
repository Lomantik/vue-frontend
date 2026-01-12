<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ProductPage from '@/pages/ProductPage.vue'
import CategoryPage from '@/pages/CategoryPage.vue'
import NotFound from '@/pages/NotFound.vue'
import StaticPage from '@/pages/StaticPage.vue'
import { useSlugResolver } from '@/composables/useSlugResolver.js'
import { usePageContextStore } from '@/stores/pageContext.store.js'
import { useNavigationStore } from '@/stores/navigation.store.js'

const route = useRoute()
const pageContext = usePageContextStore()
const navStore = useNavigationStore()

const {
  resolvedType,
  resolvedData,
  loading,
  resolve
} = useSlugResolver(route)

watchEffect(async () => {
  await resolve()
  pageContext.type = resolvedType.value
  pageContext.data = resolvedData.value
  pageContext.loading = loading.value

  if (pageContext.type !== 'product') {
    navStore.clearTrails()
  }
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <ProductPage v-if="resolvedType === 'product'" :product="resolvedData" />
  <CategoryPage v-else-if="resolvedType === 'category'" :category="resolvedData" />
  <StaticPage v-else-if="resolvedType === 'page'" :page="resolvedData" />
  <NotFound v-else />
</template>

<style scoped>

</style>
