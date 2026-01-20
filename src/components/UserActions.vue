<script setup>
import SearchIcon from '@/components/ui/SearchIcon.vue'
import UserAreaIcon from '@/components/ui/UserAreaIcon.vue'
import CartIcon from '@/components/ui/CartIcon.vue'
</script>

<template>
  <nav class="user-actions">
    <ul class="d-flex m-0 p-0">
      <li class="d-none d-lg-flex ps-22 text-primary list-unstyled">
        <SearchIcon />
      </li>
      <li class="d-flex ps-22 list-unstyled">
        <UserAreaIcon />
      </li>
      <li class="d-flex ps-22 list-unstyled">
        <CartIcon />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

</style>
