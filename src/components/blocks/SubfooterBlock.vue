<script setup></script>

<template>
  <div class="subfooter">
    <div class="container">
      <div>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2026</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.subfooter {
  font-size: 0.75rem; // 12px
  color: color.adjust(color-token(footer-text), $alpha: -0.4);
  padding-top: 1.875rem; // 30px
  padding-bottom: 1.875rem; // 30px
  background: color-token(primary);
  display: flex;
  justify-content: center;
  @include media-breakpoint-up(md) {
    justify-content: start;
  }
}
</style>
