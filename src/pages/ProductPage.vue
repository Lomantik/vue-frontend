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
  <div class="container pb-4" v-if="product">
    <div class="row">
      <div class="col-sm-4">
        <img class="mb-3 w-100" :src="resolvePublicUrl(product.imageUrl)" alt="" :srcset="
            resolvePublicUrl(product.imageUrlL)
            + ' 600w, ' + resolvePublicUrl(product.imageUrlM)
            + ' 250w, ' + resolvePublicUrl(product.imageUrlS)
            +  ' 200w'" sizes="(min-width: 600px) 100vw, 600px" loading="lazy">
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
