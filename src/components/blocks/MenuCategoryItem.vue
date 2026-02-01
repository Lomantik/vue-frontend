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
  isMobile: {
    type: Boolean,
    required: true
  }
})

const categoryRef = toRef(props, 'category')
const linkRef = toRef(props, 'link')
const levelRef = toRef(props, 'level')
const {
  resolvedLevel,
  activeMenu,
  openLevel,
  toggleLevel,
  hasChildren,
  isDropend,
  joinedCanonicalPath
} = useMenuCategoryItem(categoryRef, linkRef, levelRef)
</script>

<template>
  <template v-if="link">
    <li :class="{'dropdown position-relative': hasChildren, 'nav-item py-lg-20 px-0': resolvedLevel === 0, dropend: isDropend}"
        @mouseenter="!isMobile && openLevel(resolvedLevel, link.slug)" class="border-bottom border-lg-none d-flex flex-column">
      <div class="row">
        <div class="col">
          <RouterLink :to="'/' + link.slug" class="nav-link py-17 py-lg-10 px-lg-20 min-h-38 d-flex align-items-center border-radius-120 fs-17 fs-lg-14" exact-active-class="active"
                                     :class="{'dropdown-toggle': hasChildren, 'dropdown-item d-flex justify-content-between py-10 px-0 min-w-180': level > 0, 'text-primary': isMobile}">
            {{ link.title }}
          </RouterLink>
        </div>
        <div class="col d-lg-none">
          <button v-if="hasChildren && isMobile" class="expander d-flex bg-white align-items-center
            ms-auto border-none h-100" @click="isMobile && toggleLevel(resolvedLevel, link.slug)"
                  :class="{ expanded: activeMenu[resolvedLevel] === link.slug}">
            <span class="text-primary"></span>
          </button>
        </div>
      </div>
      <ul v-if="hasChildren" class="dropdown-menu position-lg-absolute px-15 pb-15 pt-0 py-lg-18 px-lg-27 border-0 border-lg border-lg-primary lh-110"
          :class="{ show: activeMenu[resolvedLevel] === link.slug, 'top-0 left-100 mt-m16 ms-35': isDropend, 'top-100 left-0 mt-lg-8 ms-lg-m8': !isDropend }">
        <MenuCategoryItem v-for="child in category.children" :key="child.id"
                                :category="child" :level="resolvedLevel + 1" class="" :is-mobile="isMobile" />
      </ul>
    </li>
  </template>
  <template v-else>
    <li :class="{'dropdown position-relative': hasChildren, 'nav-item': level === 0, dropend: isDropend}"
        @mouseenter="!isMobile && openLevel(resolvedLevel, category.slug)" class="d-flex d-flex flex-column">
      <div class="row">
        <div class="col">
          <RouterLink :to="'/' + joinedCanonicalPath" exact-active-class="active" class="lh-100"
                      :class="{'dropdown-toggle': hasChildren, 'dropdown-item d-flex justify-content-between py-10 px-0 min-w-180': resolvedLevel > 0, 'text-primary': isMobile}">
            {{ category.title }}
          </RouterLink>
        </div>
        <div class="col d-lg-none">
          <button v-if="hasChildren && isMobile" class="expander d-flex bg-white align-items-center
            ms-auto border-none h-100"
                  @click="isMobile && toggleLevel(resolvedLevel, category.slug)"
                  :class="{ expanded: activeMenu[resolvedLevel] === category.slug}">
            <span class="text-primary"></span>
          </button>
        </div>
      </div>
      <ul v-if="hasChildren" class="dropdown-menu position-lg-absolute px-15 pb-0 pt-15 py-lg-18 px-lg-27 border-0 border-lg border-lg-primary lh-110"
          :class="{ show: activeMenu[resolvedLevel] === category.slug, 'top-0 left-100 mt-lg-m16 ms-lg-35': isDropend, 'top-100 left-0 mt-lg-8 ms-lg-m8': !isDropend }">
        <MenuCategoryItem v-for="child in category.children" :key="child.id"
                                :category="child" :level="resolvedLevel + 1" class="" :is-mobile="isMobile" />
      </ul>
    </li>
  </template>
</template>

<style scoped lang="scss">
@use "sass:map";

a.dropdown-item:hover {
  color: color('blue') !important;
}

.dropdown-toggle::after {
  content: content('arrow-down');
  font-family: map.get($custom-font-family, 'blooms');
  font-size: font-size(16);
  border: border('none');
  margin-left: spacer(10);
}

.is-mobile .dropdown-toggle::after {
  display: none;
}

.expander > span::after {
  content: content('mobile-arrow-down');
  font-family: map.get($custom-font-family, 'blooms');
  font-size: font-size(13);
  border: border('none');
  margin-left: spacer(auto);
  display: block;
}

.expander.expanded > span::after {
  transform: rotateX(-180deg);
}

.nav-link:hover {
  background-color: color('light-grey-10');
}

.is-mobile .nav-link:hover {
  background-color: transparent;
  color: color('blue') !important;
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

.dropdown.dropend .expander > span::after {
  content: content('mobile-arrow-down');
  font-family: map.get($custom-font-family, 'blooms');
  font-size: font-size(13);
  border: border('none');
  position: position('relative');
  right: spacer(0);
  display: block;
}

.dropdown.dropend .expander.expanded > span::after {
  transform: rotateX(-180deg);
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

.is-mobile .dropdown.dropend .dropdown-toggle::after {
  display: none;
}
</style>
