<script setup>
import MediaBanner from '@/components/blocks/MediaBanner.vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section class="banner-grid container">
    <h3 v-if="title" class="fs-24 fs-md-28 fs-lg-34 mb-30" v-html="title"></h3>
    <div class="row g-30 g-sm-60">
      <div class="col-12 col-md-4 mb-30 mb-md-0">
        <MediaBanner class="rounded overflow-hidden" image-key="m2" :lazy="true">
          <h1 class="text-white fs-28 lh-145 mb-176 fw-bold">Home / Indoor<br/>Plants</h1>
          <div>
            <RouterLink class="btn btn-white" to="/shop">
              FOR MY HOME
            </RouterLink>
          </div>
        </MediaBanner>
      </div>
      <div class="col-12 col-md-4 mb-30 mb-md-0">
        <MediaBanner class="rounded overflow-hidden" image-key="m3" :lazy="true">
          <h1 class="text-white fs-28 lh-145 mb-176 fw-bold">Holiday Gifts <br/>Collection</h1>
          <div>
            <RouterLink class="btn btn-white" to="/shop">
              SHOP GIFTS
            </RouterLink>
          </div>
        </MediaBanner>
      </div>
      <div class="col-12 col-md-4">
        <MediaBanner class="rounded overflow-hidden" image-key="m04" :lazy="true">
          <h1 class="text-white fs-28 lh-145 mb-176 fw-bold">Eco-Friendly <br/>Supplies</h1>
          <div>
            <RouterLink class="btn btn-white" to="/shop">
              PLANTS CARE
            </RouterLink>
          </div>
        </MediaBanner>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
