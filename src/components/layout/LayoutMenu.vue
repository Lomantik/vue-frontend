<script setup>
import { RouterLink, useRoute } from 'vue-router'
import MainLogo from '@/components/MainLogo.vue'
import { computed, ref, watchEffect, provide, watch } from 'vue'
import UserActions from '@/components/UserActions.vue'
import LayoutMenuCategoryItem from '@/components/layout/LayoutMenuCategoryItem.vue'
import { getCategoryTree } from '@/api/categories.api.js'
import NavbarTogglerIcon from '@/components/ui/NavbarTogglerIcon.vue'

const showMobileMenu = ref(false)
const showMobileMenuClass = computed(() => {
  return showMobileMenu.value ? 'show' : ''
})

function openLevel(level, id) {
  activeMenu.value[level] = id
}

function closeAll() {
  activeMenu.value = []
}

const activeMenu = ref([])
provide('activeMenu', {
  activeMenu,
  openLevel(level, id) {
    activeMenu.value[level] = id
  }
})

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    closeAll()
  }
)

const categoryTree = ref()
watchEffect(async () => {
  categoryTree.value = await getCategoryTree()
})
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
        <ul class="navbar-nav">
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'home')">
            <RouterLink to="/" class="nav-link py-10 px-20 lh-14 min-h-38 d-flex align-items-center
              border-radius-120" exact-active-class="active">Home</RouterLink>
          </li>
          <LayoutMenuCategoryItem v-if="categoryTree" :link="{ title: 'Shop', slug: 'shop'}"
                                  :category="categoryTree" />
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'blog')">
            <RouterLink to="/blog" class="nav-link py-10 px-20 lh-14 min-h-38 d-flex
              align-items-center border-radius-120" exact-active-class="active">Blog</RouterLink>
          </li>
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'about')">
            <RouterLink to="/about" class="nav-link py-10 px-20 lh-14 min-h-38 d-flex
              align-items-center border-radius-120" exact-active-class="active">About</RouterLink>
          </li>
          <li class="nav-item py-20" @mouseenter="openLevel(0, 'contact')">
            <RouterLink to="/contact" class="nav-link py-10 px-20 lh-14 min-h-38 d-flex
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
