<script setup>
import { resolvePublicUrl } from '@/domain/urls.js'
import ProductPrice from '@/components/product/ProductPrice.vue'
import { useProductCard } from '@/composables/useProductCard.js'
import ProductRating from '@/components/product/ProductRating.vue'
import { toRef } from 'vue'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true
  },
  /** @type {Category} */
  category: {
    type: Object,
    required: false
  },
  titleTag: {
    type: String,
    required: false
  }
})

const productRef = toRef(props, 'product')
const titleTagRef = toRef(props, 'titleTag')
const {
  resolvedTitleTag,
  navStore,
  primaryCategory
} = useProductCard(productRef, titleTagRef)
</script>

<template>
  <div class="card me-sm-3 mb-sm-3 h-100 w-100 border-none">
    <div class="product-image border-radius-6 overflow-hidden mb-25">
      <RouterLink :to="'/' + product.slug" @click="category && navStore.setCategoryTrail(category)"
                  class="text-decoration-none">
        <img class="card-img-top" :src="resolvePublicUrl(product.imageUrl)" alt=""
             :srcset="
            resolvePublicUrl(product.imageUrlL)
            + ' 600w, ' + resolvePublicUrl(product.imageUrlM)
            + ' 250w, ' + resolvePublicUrl(product.imageUrlS)
            +  ' 200w'" sizes="(max-width: 600px) 100vw, 600px" loading="lazy" decoding="async">
      </RouterLink>
    </div>
    <div class="card-body d-flex flex-column p-0">
      <span class="product-category fs-12 mb-9" v-if="primaryCategory">
        <RouterLink :to="'/' + primaryCategory.slug" class="text-decoration-none">
          {{ primaryCategory.title }}
        </RouterLink>
      </span>
      <component :is="resolvedTitleTag" class="card-title product-title font-family-bitter fs-16 mb-3">
        <RouterLink :to="'/' + product.slug" class="text-decoration-none"
                    @click="category && navStore.setCategoryTrail(category)">
          {{ product.title }}
        </RouterLink>
      </component>
      <div>
        <ProductPrice :product="product" class="card-text" />
        <ProductRating :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
