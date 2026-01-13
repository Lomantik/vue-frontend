<script setup>
import PromoBar from "@/components/PromoBar.vue"
import MainHeader from "@/components/MainHeader.vue"
import MainBreadcrumbs from "@/components/MainBreadcrumbs.vue"
import MainFooter from "@/components/MainFooter.vue"
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <PromoBar />
        <MainHeader />
        <MainBreadcrumbs />
        <main class="flex-grow-1">
            <RouterView />
        </main>
        <MainFooter />
    </div>
</template>

<style scoped>
</style>
