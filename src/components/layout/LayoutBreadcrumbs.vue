<script setup>
import { useBreadcrumbs } from '@/composables/useBreadcrumbs.js'

const { meta, breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <nav v-if="!meta.hideBreadcrumbs" aria-label="breadcrumb" class="ms-5 py-20 px-0">
    <div class="container">
      <ol class="breadcrumb mb-0">
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
          <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">
            {{ crumb.label }}
          </RouterLink>
          <span v-else>{{ crumb.label }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped>

</style>
