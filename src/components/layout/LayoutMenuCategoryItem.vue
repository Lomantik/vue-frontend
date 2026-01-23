<script setup>
import { RouterLink } from 'vue-router'
import { useLayoutMenuCategoryItem } from '@/composables/useLayoutMenuCategoryItem.js'
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
    required: true
  },
  /** @type {import('vue').PropType<Link>} */
  link: {
    type: Object,
    required: false
  },
  level: {
    type: Number,
    required: false
  },
})

const categoryRef = toRef(props, 'category')
const linkRef = toRef(props, 'link')
const levelRef = toRef(props, 'level')
const {
  resolvedLevel,
  activeMenu,
  openLevel,
  hasChildren,
  isDropend,
  joinedCanonicalPath
} = useLayoutMenuCategoryItem(categoryRef, linkRef, levelRef)
</script>

<template>
  <template v-if="link">
    <li :class="{'dropdown position-relative': hasChildren, 'nav-item py-20 px-0': resolvedLevel === 0, dropend: isDropend}"
        @mouseenter="openLevel(resolvedLevel, link.slug)">
      <RouterLink :to="'/' + link.slug" class="nav-link py-10 px-20 min-h-38 d-flex align-items-center border-radius-120" exact-active-class="active"
                  :class="{'dropdown-toggle': hasChildren, 'dropdown-item d-flex justify-content-between py-10 px-0 min-w-180': level > 0}">
        {{ link.title }}
      </RouterLink>
      <ul v-if="hasChildren" class="dropdown-menu position-absolute py-18 px-27 border-primary lh-110"
          :class="{ show: activeMenu[resolvedLevel] === link.slug, 'top-0 left-100 mt-m16 ms-35': isDropend, 'top-100 left-0 mt-8 ms-m8': !isDropend }">
        <LayoutMenuCategoryItem v-for="child in category.children" :key="child.id"
                                :category="child" :level="resolvedLevel + 1" class="" />
      </ul>
    </li>
  </template>
  <template v-else>
    <li :class="{'dropdown position-relative': hasChildren, 'nav-item': level === 0, dropend: isDropend}"
        @mouseenter="openLevel(resolvedLevel, category.slug)">
      <RouterLink :to="'/' + joinedCanonicalPath" exact-active-class="active"
                  :class="{'dropdown-toggle': hasChildren, 'dropdown-item d-flex justify-content-between py-10 px-0 min-w-180': resolvedLevel > 0}">
        {{ category.title }}
      </RouterLink>
      <ul v-if="hasChildren" class="dropdown-menu position-absolute py-18 px-27 border-primary lh-110"
          :class="{ show: activeMenu[resolvedLevel] === category.slug, 'top-0 left-100 mt-m16 ms-35': isDropend, 'top-100 left-0 mt-8 ms-m8': !isDropend }">
        <LayoutMenuCategoryItem v-for="child in category.children" :key="child.id"
                                :category="child" :level="resolvedLevel + 1" class="" />
      </ul>
    </li>
  </template>
</template>

<style scoped lang="scss">
@use "sass:map";

.dropdown-toggle::after {
  content: content('arrow-down');
  font-family: map.get($custom-font-family, 'blooms');
  font-size: font-size(16);
  border: border('none');
  margin-left: spacer(10);
}
.nav-link:hover {
  background-color: color('light-grey-10');
}

.dropdown-menu::before {
  pointer-events: pointer-events('auto');
  content: content('empty');
  position: position('absolute');
}

.dropdown .dropdown-menu::before {
  top: spacer('m9');
  left: spacer(0);
  right: spacer(0);
  height: height(10);
  width: width(100);
}

.dropdown.dropend > .dropdown-menu::before {
  top: spacer(0);
  left: spacer(m9);
  bottom: spacer(0);
  height: height(100);
  width: width(10);
}

.dropdown.dropend .dropdown-toggle::after {
  content: content('arrow-right');
  font-family: map.get($custom-font-family, 'blooms');
  font-size: font-size(16);
  border: border('none');
  margin-left: spacer(10);
  position: position('relative');
  right: spacer(0);
}
</style>
