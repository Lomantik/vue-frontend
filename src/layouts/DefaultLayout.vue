<script setup>
import PromoBar from "@/components/PromoBar.vue"
import Header from "@/components/Header.vue"
import Breadcrumbs from "@/components/Breadcrumbs.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <PromoBar />
        <Header />
        <Breadcrumbs />
        <main class="flex-grow-1">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<style scoped>
</style>
