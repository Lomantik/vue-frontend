<script setup>
import { resolveHtmlUrls } from '@/domain/urls.js'
import BannerGrid from '@/components/blocks/BannerGrid.vue'

/** @typedef {import('@/types/page.js').Page} Page */

defineProps({
  /** @type {{page: Page}} */
  page: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="static-page container">
    <h1 v-if="page.showTitle && page.title">{{ page.title }}</h1>
    <div class="static-content" v-html="resolveHtmlUrls(page.content)" />
  </div>
  <BannerGrid v-if="page.slug === 'contact'" class="mb-136" />
</template>

<style scoped lang="scss">
.static-page {
  margin-bottom: 4.375rem; // 70px
}
</style>
