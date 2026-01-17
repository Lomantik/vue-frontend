<script setup>
import LayoutMenu from '@/components/layout/LayoutMenu.vue'
import MainLogo from '@/components/MainLogo.vue'
import UserActions from '@/components/UserActions.vue'
</script>

<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-auto p-0">
          <MainLogo />
        </div>
        <div class="col p-0">
          <LayoutMenu />
        </div>
        <div class="col-auto p-0">
          <UserActions />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 0 50px;
  border-bottom: 1px solid #ebebeb;
}
</style>
