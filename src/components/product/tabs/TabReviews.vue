<script setup>
/** @typedef {import('@/types/product.js').Product} Product */

/** @type {{ product: Product }} */
defineProps({
  /** @type { import('vue').PropType<Product> } */
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <h2>Reviews</h2>
    <p>There are no reviews yet.</p>
  </div>
  <div>
    <span>Be the first to review {{ product.title }}</span>
    <form>
      <span>Your email address will not be published. Required fields are marked *</span>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
