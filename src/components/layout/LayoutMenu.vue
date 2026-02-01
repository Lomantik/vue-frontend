<script setup>
import { RouterLink } from 'vue-router'
import MenuCategoryItem from '@/components/blocks/MenuCategoryItem.vue'
import { useLayoutMenu } from '@/composables/useLayoutMenu.js'
import { toRef } from 'vue'

const props = defineProps({
  showMobileMenu: {
    type: Boolean,
    required: true
  }
})

const showMobileMenuRef = toRef(props, 'showMobileMenu')
const {
  showMobileMenuClass,
  openLevel,
  closeAll,
  categoryTree,
  isMobile
} = useLayoutMenu(showMobileMenuRef)
</script>

<template>
  <div class="navbar-collapse collapse bg-white position-absolute position-lg-static top-100 start-0 vh-100 vh-lg-auto end-0 mx-m15 mx-md-m50 mx-lg-0" :class="showMobileMenuClass" @mouseleave="!isMobile && closeAll()">
    <ul class="navbar-nav lh-100 px-15 px-lg-0" :class="{'is-mobile': isMobile}">
      <li class="nav-item py-lg-20 border-bottom border-lg-none" @mouseenter="!isMobile && openLevel(0, 'home')">
        <RouterLink to="/" class="nav-link py-17 py-lg-10 px-lg-20 min-h-38 d-flex align-items-center
              border-radius-120 fs-17 fs-lg-14" exact-active-class="active" :class="{'text-primary': isMobile}">Home</RouterLink>
      </li>
      <MenuCategoryItem v-if="categoryTree" :link="{ title: 'Shop', slug: 'shop'}"
                        :category="categoryTree" :is-mobile="isMobile" />
      <li class="nav-item py-lg-20 border-bottom border-lg-none" @mouseenter="!isMobile && openLevel(0, 'blog')">
        <RouterLink to="/blog" class="nav-link py-17 py-lg-10 px-lg-20 min-h-38 d-flex
              align-items-center border-radius-120 fs-17 fs-lg-14" exact-active-class="active" :class="{'text-primary': isMobile}">Blog</RouterLink>
      </li>
      <li class="nav-item py-lg-20 border-bottom border-lg-none" @mouseenter="!isMobile && openLevel(0, 'about')">
        <RouterLink to="/about" class="nav-link py-17 py-lg-10 px-lg-20 min-h-38 d-flex
              align-items-center border-radius-120 fs-17 fs-lg-14" exact-active-class="active" :class="{'text-primary': isMobile}">About</RouterLink>
      </li>
      <li class="nav-item py-lg-20 border-bottom border-lg-none" @mouseenter="!isMobile && openLevel(0, 'contact')">
        <RouterLink to="/contact" class="nav-link py-17 py-lg-10 px-lg-20 min-h-38 d-flex
              align-items-center border-radius-120 fs-17 fs-lg-14" exact-active-class="active" :class="{'text-primary': isMobile}">Contact</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "sass:map";

.nav-link:hover {
  background-color: color('light-grey-10');
}
.is-mobile .nav-link:hover {
  background-color: transparent;
  color: color('blue') !important;
}
</style>
