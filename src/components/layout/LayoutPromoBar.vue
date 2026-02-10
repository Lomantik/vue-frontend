<script setup></script>

<template>
  <aside class="promo-bar container-fluid">
    <div class="text-center">Free express shipping ➺ On all orders $40 + Easy returns</div>
  </aside>
</template>

<style scoped lang="scss">
.promo-bar {
  background: color-token(promo-bg);
  color: color-token(promo-text);
  display: none;
  font-size: 0.8125rem; // 13px
  padding: 0.8125rem 0; // 13px 0
  line-height: 1;
  @include media-breakpoint-up(lg) {
    display: block;
  }
}
</style>
