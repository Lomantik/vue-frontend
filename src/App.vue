<script setup>
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import { getLayoutMeta } from '@/router/meta.js'

const route = useRoute()

const meta = getLayoutMeta(route)

const layouts = {
  default: DefaultLayout,
}
</script>

<template>
  <component :is="layouts[meta.layout || 'default']">
    <RouterView />
  </component>
</template>

<style scoped>
</style>
