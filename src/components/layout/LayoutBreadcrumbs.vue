<script setup>
import { useBreadcrumbs } from '@/composables/useBreadcrumbs.js'

const { hideBreadcrumbs, breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <nav v-if="!hideBreadcrumbs" aria-label="breadcrumb" class="breadcrumbs container-fluid">
    <div class="">
      <ol class="breadcrumbs__wrapper breadcrumb">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumbs__wrapper-item breadcrumb-item"
        >
          <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">
            {{ crumb.label }}
          </RouterLink>
          <span v-else class="breadcrumbs__wrapper-item--active">{{ crumb.label }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
  padding-top: 0.9375rem; // 15px
  padding-bottom: 0.9375rem; // 15px
  //border-bottom: 1px solid color-token(border);
  @include media-breakpoint-up(md) {
    padding: 0.9375rem 3.125rem; // 15px 50px
  }
  @include media-breakpoint-up(lg) {
    padding: 1.5625rem 3.125rem; // 25px 50px
  }
  &__wrapper {
    margin-bottom: 0;
    &-item {
      font-size: 0.75rem; // 12px
      &--active {
        color: color-token(link-active);
      }
    }
  }
}
</style>
