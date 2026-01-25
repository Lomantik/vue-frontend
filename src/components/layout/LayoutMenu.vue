<script setup>
import { RouterLink } from 'vue-router'
import MainLogo from '@/components/MainLogo.vue'
import UserActions from '@/components/UserActions.vue'
import MenuCategoryItem from '@/components/blocks/MenuCategoryItem.vue'
import NavbarTogglerIcon from '@/components/ui/NavbarTogglerIcon.vue'
import { useLayoutMenu } from '@/composables/useLayoutMenu.js'

const {
  showMobileMenu,
  showMobileMenuClass,
  openLevel,
  closeAll,
  categoryTree
} = useLayoutMenu()
</script>

<template>
  <nav class="main-menu mt-auto navbar navbar-expand-lg p-0 fs-14 ls-02">
    <div class="container-fluid p-0">
      <MainLogo class="navbar-brand" />
      <button class="navbar-toggler order-first border-none p-0 d-flex d-lg-none shadow-none" type="button"
              @click="showMobileMenu = !showMobileMenu">
        <span class="navbar-toggler-icon-1">
          <NavbarTogglerIcon />
        </span>
      </button>
      <div class="navbar-collapse collapse" :class="showMobileMenuClass" @mouseleave="closeAll">
        <ul class="navbar-nav lh-100">
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'home')">
            <RouterLink to="/" class="nav-link py-10 px-20 min-h-38 d-flex align-items-center
              border-radius-120" exact-active-class="active">Home</RouterLink>
          </li>
          <MenuCategoryItem v-if="categoryTree" :link="{ title: 'Shop', slug: 'shop'}"
                                  :category="categoryTree" />
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'blog')">
            <RouterLink to="/blog" class="nav-link py-10 px-20 min-h-38 d-flex
              align-items-center border-radius-120" exact-active-class="active">Blog</RouterLink>
          </li>
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'about')">
            <RouterLink to="/about" class="nav-link py-10 px-20 min-h-38 d-flex
              align-items-center border-radius-120" exact-active-class="active">About</RouterLink>
          </li>
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'contact')">
            <RouterLink to="/contact" class="nav-link py-10 px-20 min-h-38 d-flex
              align-items-center border-radius-120" exact-active-class="active">Contact</RouterLink>
          </li>
        </ul>
      </div>
      <UserActions />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "sass:map";

.nav-link:hover {
  background-color: color('light-grey-10');
}
</style>
