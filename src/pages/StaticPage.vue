<script setup>
import { resolveHtmlUrls } from '@/domain/urls.js'
import BannerGrid from '@/components/blocks/BannerGrid.vue'

/** @typedef {import('@/types/page.js').Page} Page */

defineProps(({
  /** @type {{page: Page}} */
  page: {
    type: Object,
    required: true
  },
}))
</script>

<template>
  <div class="container mb-70">
    <h1 v-if="page.showTitle && page.title">{{ page.title }}</h1>
    <div class="static-content" v-html="resolveHtmlUrls(page.content)" />
    <BannerGrid v-if="page.slug === 'contact'" class="mb-136" />
  </div>
</template>

<style scoped>

</style>
