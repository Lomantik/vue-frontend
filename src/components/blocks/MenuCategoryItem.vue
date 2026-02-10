<script setup>
import { RouterLink } from 'vue-router'
import { useMenuCategoryItem } from '@/composables/useMenuCategoryItem.js'
import { toRef } from 'vue'

/** @typedef {import('@/types/category.js').Category} Category */
/**
 * @typedef {Object} Link
 * @property {string} title
 * @property {string} slug
 */

const props = defineProps({
  /** @type {Category} */
  category: {
    type: Object,
    required: true,
  },
  /** @type {import('vue').PropType<Link>} */
  link: {
    type: Object,
    required: false,
  },
  level: {
    type: Number,
    required: false,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
})

const categoryRef = toRef(props, 'category')
const linkRef = toRef(props, 'link')
const levelRef = toRef(props, 'level')
const {
  itemTitle,
  itemSlug,
  hasChildren,
  currentLevel,
  showExpandable,
  isDropend,
  toggleLevel,
  openLevel,
} = useMenuCategoryItem(categoryRef, linkRef, levelRef)
</script>

<template class="expandable-menu">
  <li
    class="expandable-menu__item nav-item"
    :class="{
      'expandable-menu__item--level0': currentLevel === 0,
      'expandable-menu__item--dropend': isDropend,
    }"
    @mouseenter="!isMobile && openLevel(currentLevel, itemSlug)"
  >
    <div class="row">
      <div class="col">
        <RouterLink
          class="expandable-menu__item-link"
          :to="'/' + itemSlug"
          :class="{
            'expandable-menu__item-link--level0 nav-link': currentLevel === 0,
            'expandable-menu__item-link--has-children': hasChildren,
            'expandable-menu__item-link--dropend': isDropend,
          }"
        >
          {{ itemTitle }}
        </RouterLink>
      </div>
      <div class="col" v-if="hasChildren && isMobile">
        <button
          class="expandable-menu__item-expander"
          :class="{
            'expandable-menu__item-expander--expanded': showExpandable,
          }"
          @click="isMobile && toggleLevel(currentLevel, itemSlug)"
        >
          <span class="text-primary"></span>
        </button>
      </div>
    </div>
    <ul
      class="expandable-menu__item-dropdown dropdown-menu"
      v-if="hasChildren"
      :class="{ 'expandable-menu__item-dropdown--show': showExpandable }"
    >
      <MenuCategoryItem
        v-for="child in category.children"
        :key="child.id"
        :category="child"
        :level="currentLevel + 1"
        :is-mobile="isMobile"
      />
    </ul>
  </li>
</template>

<style scoped lang="scss">
@use 'sass:map';
@use 'sass:color';

.expandable-menu {
  &__item {
    padding: 0;
    position: relative;
    &-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.625rem 0; // 10px 0
      //padding: 1.0625rem 0; // 17px 0
      width: 180px;
      border-radius: 120px;
      @include media-breakpoint-up(lg) {
        min-height: 38px;
        padding: 0.625rem 0; // 10px 0
      }
      &--level0 {
        width: auto;
        justify-content: flex-start;
        padding: 1.0625rem 0; // 17px 0
        @include media-breakpoint-up(lg) {
          &:hover {
            background-color: color.adjust(color-token(menu-item-bg), $alpha: -0.9);
          }
          padding: 0.625rem 1.25rem; // 10px 20px
        }
      }
      &--has-children {
        &::after {
          display: none;
          content: content-token('arrow-down');
          font-family: map.get($custom-font-family, 'blooms');
          font-size: 1rem; // 16px
          border: none;
          margin-left: 0.625rem; // 10px
          @include media-breakpoint-up(lg) {
            display: block;
          }
        }
        &.expandable-menu__item-link--dropend::after {
          content: content-token('arrow-right');
        }
      }
    }
    &-expander {
      display: flex;
      background: color-token(menu-bg);
      align-items: center;
      border: none;
      height: 100%;
      margin-left: auto;
      & > span::after {
        content: content-token('mobile-arrow-down');
        font-family: map.get($custom-font-family, 'blooms');
        font-size: 0.8125rem; // 13px
        border: none;
        margin-left: auto;
        display: block;
      }
      &--expanded {
        transform: rotateX(-180deg);
      }
    }
    &-dropdown {
      display: none;
      top: 100%;
      left: 0;
      padding: 0.9375rem 0.9375rem 0 0.9375rem; // 15px 15px 0 15px
      border: none;
      @include media-breakpoint-up(lg) {
        margin-top: 0.5rem; // 8px
        margin-left: -0.5rem; // -8px
        padding: 1.125rem 1.6875rem; // 18px 27px
        border: 1px solid color-token(primary);
      }
      &--show {
        display: block;
      }
      &::before {
        pointer-events: auto;
        content: '';
        position: absolute;
        top: -0.5625rem; // -9px
        left: 0;
        right: 0;
        height: 10px;
        width: 100%;
      }
    }
    &--level0 {
      border-bottom: 1px solid var(--bs-border-color);
      font-size: 1.0625rem; // 17px
      @include media-breakpoint-up(lg) {
        border-bottom: none;
        padding: 1.25rem 0; // 20px 0
        font-size: 0.875rem; // 14px
      }
      > .expandable-menu__item-dropdown {
        padding: 0 0.9375rem 0.9375rem 0.9375rem; // 0 15px 15px 15px
        @include media-breakpoint-up(lg) {
          padding: 1.125rem 1.6875rem; // 18px 27px
        }
      }
    }
    &--dropend {
      > .expandable-menu__item-dropdown {
        @include media-breakpoint-up(lg) {
          top: 0;
          left: 100%;
          margin-top: -1rem; // -16px
          margin-left: 2.1875rem; //35px
          &::before {
            top: 0;
            left: -0.5625rem; // -9px
            bottom: 0;
            height: 100vh;
            width: 10px;
          }
        }
      }
    }
  }
}
</style>
