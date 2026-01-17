<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="main-menu mt-auto">
    <ul class="nav">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link" exact-active-class="active">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/shop" class="nav-link" exact-active-class="active">Shop</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/arid" class="nav-link" exact-active-class="active">Arid</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/blog" class="nav-link" exact-active-class="active">Blog</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link" exact-active-class="active">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/contact" class="nav-link" exact-active-class="active">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-menu {
  font-size: 14px;
  font-weight: 400;
  padding-left: 45px;
  letter-spacing: 0.02em;
}

.main-menu ul li {
  padding: 20px 0;

}

.main-menu ul li a {
  padding: 10px 20px;
  line-height: 14px;
  border-radius: 120px;
  min-height: 38px;
  display: flex;
  align-items: center;
}

.nav-link.active {
  color: #6b6b6b;
}

.main-menu ul li a:hover {
  background-color: rgba(21, 71, 71, 0.1);
}
</style>
