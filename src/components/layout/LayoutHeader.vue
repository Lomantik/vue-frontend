<script setup>
import LayoutMenu from '@/components/layout/LayoutMenu.vue'
import NavbarTogglerIcon from '@/components/ui/NavbarTogglerIcon.vue'
import UserActions from '@/components/UserActions.vue'
import MainLogo from '@/components/MainLogo.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const showMobileMenu = ref(false)
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    showMobileMenu.value = false
  }
)
</script>

<template>
  <header class="header px-15 px-md-50 border-bottom border-light-white sticky-top bg-white">
    <nav class="main-menu mt-auto navbar navbar-expand-lg p-0 fs-14 ls-02">
      <div class="container-fluid p-0">
        <MainLogo class="navbar-brand" />
        <button class="navbar-toggler order-first border-none p-0 d-flex d-lg-none shadow-none" type="button"
                @click="showMobileMenu = !showMobileMenu">
        <span class="navbar-toggler-icon-1">
          <NavbarTogglerIcon />
        </span>
        </button>
        <LayoutMenu :show-mobile-menu="showMobileMenu" />
        <UserActions />
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
