<script setup>
import { resolvePublicUrl } from '@/domain/urls.js'

/** @typedef {import('@/types/product.js').Product} Product */

defineProps(({
  /** @type {{product: Product}} */
  product: {
    type: Object,
    required: true
  },
}))
</script>

<template>
  <div class="container" v-if="product">
    <div class="row">
      <div class="col-sm-4">
        <img :src="resolvePublicUrl(product.imageUrl)" alt="" class="mb-3 w-100">
      </div>
      <div class="col-sm-8">
        <div class="row mb-5">
          <div class="col-sm-12">
            <h1>Product {{ product.title }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <button class="btn btn-primary">Add To Cart: ${{ product.price }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        Product Description:
        <div class="card bg-light">
          <div class="card-body">
            {{ product.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
