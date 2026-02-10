<script setup>
defineProps({
  /** @type {{product: Category}} */
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="page-title">
    <h1 class="page-title__string container">{{ title }}</h1>
  </div>
</template>

<style scoped lang="scss">
.page-title {
  padding: 2.1875rem 0; // 35px 0
  border-bottom: 1px solid color-token(border);
  margin: 0;
  &__string {
    line-height: 1;
    margin-bottom: 0;
    @include media-breakpoint-up(lg) {
      font-size: 1.875rem; // 30px
    }
  }
}
</style>
