<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="logo">
    <RouterLink to="/" class="logo"><img src="/logo-2x.png" alt=""></RouterLink>
  </div>
</template>

<style scoped>
.logo {
  max-height: 22px;
}
.logo a {
  display: inline-flex;
  max-height: 22px;
}
.logo img {
  max-height: 22px;
}
</style>
