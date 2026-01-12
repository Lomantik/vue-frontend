<script setup>
import MainMenu from '@/components/MainMenu.vue'
import Logo from '@/components/Logo.vue'
import UserActions from '@/components/UserActions.vue'
</script>

<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-auto p-0">
          <Logo />
        </div>
        <div class="col p-0">
          <MainMenu />
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
