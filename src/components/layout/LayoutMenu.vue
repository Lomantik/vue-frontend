<script setup>
import { RouterLink } from 'vue-router'
import { useLayoutMenu } from '@/composables/useLayoutMenu.js'
import { toRef } from 'vue'
import MenuCategoryItem from '@/components/blocks/MenuCategoryItem.vue'

const props = defineProps({
  showMobileMenu: {
    type: Boolean,
    required: true,
  },
})

const showMobileMenuRef = toRef(props, 'showMobileMenu')
const { showMobileMenuClass, openLevel, closeAll, categoryTree, isMobile } =
  useLayoutMenu(showMobileMenuRef)
</script>

<template>
  <div
    class="menu navbar-collapse collapse"
    :class="showMobileMenuClass"
    @mouseleave="!isMobile && closeAll()"
  >
    <ul class="menu__wrapper navbar-nav" :class="{ 'is-mobile': isMobile }">
      <li class="menu__item nav-item" @mouseenter="!isMobile && openLevel(0, 'home')">
        <RouterLink
          to="/"
          class="menu__item-link nav-link"
          exact-active-class="active"
          :class="{ 'menu__item-link--is-mobile': isMobile }"
          >Home</RouterLink
        >
      </li>
      <MenuCategoryItem
        v-if="categoryTree"
        :is-mobile="isMobile"
        :category="categoryTree"
        :link="{ title: 'Shop', slug: 'shop' }"
      />
      <!--      <li class="menu__item nav-item" @mouseenter="!isMobile && openLevel(0, 'blog')">-->
      <!--        <RouterLink-->
      <!--          to="/blog"-->
      <!--          class="menu__item-link nav-link"-->
      <!--          exact-active-class="active"-->
      <!--          :class="{ 'menu__item-link&#45;&#45;is-mobile': isMobile }"-->
      <!--          >Blog</RouterLink-->
      <!--        >-->
      <!--      </li>-->
      <li class="menu__item nav-item" @mouseenter="!isMobile && openLevel(0, 'about')">
        <RouterLink
          to="/about"
          class="menu__item-link nav-link"
          exact-active-class="active"
          :class="{ 'menu__item-link--is-mobile': isMobile }"
          >About</RouterLink
        >
      </li>
      <li class="menu__item nav-item" @mouseenter="!isMobile && openLevel(0, 'contact')">
        <RouterLink
          to="/contact"
          class="menu__item-link nav-link"
          exact-active-class="active"
          :class="{ 'menu__item-link--is-mobile': isMobile }"
          >Contact</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.menu {
  //start-0 end-0
  background: color-token(menu-bg);
  position: absolute;
  top: 100%;
  margin-left: -0.9375rem; // -15px
  margin-right: -0.9375rem; // -15px
  height: 100vh;
  left: 0;
  right: 0;
  @include media-breakpoint-up(md) {
    margin-left: -3.125rem; // -50px
    margin-right: -3.125rem; // -50px
  }
  @include media-breakpoint-up(lg) {
    position: static;
    margin-left: 0;
    margin-right: 0;
    height: auto;
  }
  &__wrapper {
    line-height: 1;
    padding-left: 0.9375rem; // 15px
    padding-right: 0.9375rem; // 15px
    @include media-breakpoint-up(lg) {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &__item {
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: 1px solid color-token(header-border);
    @include media-breakpoint-up(lg) {
      border-bottom: none;
      padding-top: 1.25rem; // 20px
      padding-bottom: 1.25rem; // 20px
    }
    &-link {
      padding-top: 1.0625rem; // 17px
      padding-bottom: 1.0625rem; // 17px
      min-height: 38px;
      display: flex;
      align-items: center;
      border-radius: 120px;
      font-size: 1.0625rem; // 17px
      @include media-breakpoint-up(lg) {
        border-bottom: none;
        padding: 0.625rem 1.25rem; // 10px 20px
        font-size: 0.875rem; // 14px
      }
      &--is-mobile {
        color: color-token(primary) !important;
        &:hover {
          background: color-token(menu-bg) !important;
          color: color-token(link-hovered) !important;
        }
      }
      &:hover {
        background-color: color.adjust(color-token(menu-item-bg), $alpha: -0.9);
      }
    }
  }
}
</style>
