<script setup>

import MediaBanner from '@/components/blocks/MediaBanner.vue'
</script>

<template>
  <section class="subscription container">
    <MediaBanner class="rounded overflow-hidden text-center justify-content-center py-6p px-6p px-md-10p" image-key="boxbg" :lazy="true">
      <h4 class="text-tertiary fs-18 fs-sm-20 fs-lg-28 lh-145 mb-46 fw-medium">Subscribe to get notified about exclusive offers!</h4>
      <div class="d-flex flex-column align-items-center w-100">
        <div class="mw-440 w-100">
          <input type="email" name="email" autocomplete="off" class="form-control mb-25 w-100 fs-17 lh-100" />
          <div>
            <button class="btn btn-secondary">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </MediaBanner>
  </section>
</template>

<style scoped>

</style>
