<script setup>
import { useBreadcrumbs } from '@/composables/useBreadcrumbs.js'

const { meta, breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <nav v-if="!meta.hideBreadcrumbs" aria-label="breadcrumb" class="breadcrumbs">
    <div class="container">
      <ol class="breadcrumbs__wrapper breadcrumb">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumbs__wrapper-item breadcrumb-item"
        >
          <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">
            {{ crumb.label }}
          </RouterLink>
          <span v-else>{{ crumb.label }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
  margin-left: 0.3125rem; // 5px
  padding: 1.25rem 0; // 20px 0
  &__wrapper {
    margin-bottom: 0;
    &-item {
      font-size: 1rem; // 16px
    }
  }
}
</style>
