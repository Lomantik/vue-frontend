<script setup>
import { resolveHtmlUrls } from '@/domain/urls.js'

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
  <div class="container">
    <h1 v-if="page.title">{{ page.title }}</h1>
    <div class="static-content" v-html="resolveHtmlUrls(page.content)" />
  </div>
</template>

<style scoped>

</style>
