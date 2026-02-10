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
  },
)
</script>

<template>
  <header class="header">
    <nav class="main-menu navbar navbar-expand-lg">
      <div class="main-menu__wrapper container-fluid">
        <MainLogo class="navbar-brand" />
        <button
          class="main-menu__toggler navbar-toggler"
          type="button"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span class="main-menu__toggler-icon navbar-toggler-icon-1">
            <NavbarTogglerIcon />
          </span>
        </button>
        <LayoutMenu :show-mobile-menu="showMobileMenu" />
        <UserActions />
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding-left: 0.9375rem; // 15px
  padding-right: 0.9375rem; // 15px
  border-bottom: 1px solid color-token(header-border);
  background: color-token(header-bg);
  position: sticky;
  top: 0;
  z-index: 3;
  @include media-breakpoint-up(md) {
    padding-left: 3.125rem; // 50px
    padding-right: 3.125rem; // 50px
  }
}
.main-menu {
  margin-top: auto;
  padding: 0;
  font-size: 0.875rem; //14px
  letter-spacing: 0.02em;
  &__wrapper {
    padding: 0;
  }
  &__toggler {
    order: -1;
    border: none;
    padding: 0;
    display: flex;
    box-shadow: none !important;
    @include media-breakpoint-up(lg) {
      display: none;
    }
    &-icon {
      align-items: center;
      display: flex;
    }
  }
}
</style>
