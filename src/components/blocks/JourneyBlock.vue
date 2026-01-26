<script setup>

import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
</script>

<template>
  <section class="path container lh-145 w-100">
    <h3 class="fs-24 fs-md-28 fs-lg-34 mb-16">The Journey to <em>Your New Plant</em></h3>
    <p class="fs-17 mw-md-62p lh-170 mb-90">
      We only work with the very best! Our team of expert plant care specialists take great care to
      make sure your plants are healthy and thriving when they arrive at your doorstep.
    </p>
    <div class="row gx-140 w-100 w-sm-auto">
      <div class="col-12 col-md-4">
        <ResponsiveImage class="mw-68 h-auto mb-14" image-key="icon1" loading="lazy" />
        <h5 class="fw-bold fs-16 fs-md-18 fs-lg-22 mb-16">Find your plant</h5>
        <p class="fs-14 lh-170 mb-90">
          It’s the only way I know how to live. What feels good. What feels right. What is needed.
          Give me a problem and I will approach it creatively, from my gut.
        </p>
      </div>
      <div class="col-12 col-md-4">
        <ResponsiveImage class="mw-76 h-auto mb-14" image-key="icon2" loading="lazy" />
        <h5 class="fw-bold fs-16 fs-md-18 fs-lg-22 mb-16">Choose your pot</h5>
        <p class="fs-14 lh-170 mb-90">
          I wanted to have one that wasn’t like anyone else’s. My aim is to make the poor look rich
          and the rich look poor. Those designers are just crazy; but aren’t we all?
        </p>
      </div>
      <div class="col-12 col-md-4">
        <ResponsiveImage class="mw-81 h-auto h-80 mb-14" image-key="icon3" loading="lazy" />
        <h5 class="fw-bold fs-16 fs-md-18 fs-lg-22 mb-16">Deliver to your home</h5>
        <p class="fs-14 lh-170">
          I have a fantastic relationship with money. I use it to buy my freedom. I’m a designer and
          people think, what do I know? I have an obsession with details and pattern.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
