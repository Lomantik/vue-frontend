<script setup>
import ProductPrice from '@/components/product/ProductPrice.vue'
import { useProductCard } from '@/composables/useProductCard.js'
import ProductRating from '@/components/product/ProductRating.vue'
import { toRef } from 'vue'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'

/** @typedef {import('@/types/category.js').Category} Category */
/** @typedef {import('@/types/product.js').Product} Product */

const props = defineProps({
  /** @type {Product} */
  product: {
    type: Object,
    required: true,
  },
  /** @type {Category} */
  category: {
    type: Object,
    required: false,
  },
  titleTag: {
    type: String,
    required: false,
  },
})

const productRef = toRef(props, 'product')
const titleTagRef = toRef(props, 'titleTag')
const { resolvedTitleTag, navStore, primaryCategory } = useProductCard(productRef, titleTagRef)
</script>

<template>
  <div class="product-card card">
    <div class="product-card__image-wrapper product-image">
      <RouterLink :to="'/' + product.slug" @click="category && navStore.setCategoryTrail(category)">
        <ResponsiveImage
          :image-key="product.mainImageId"
          class="product-card__image-wrapper-image card-img-top"
          loading="lazy"
        />
      </RouterLink>
    </div>
    <div class="product-card__info card-body">
      <span class="product-card__info-category-wrapper product-category" v-if="primaryCategory">
        <RouterLink :to="'/' + primaryCategory.slug">
          {{ primaryCategory.title }}
        </RouterLink>
      </span>
      <component :is="resolvedTitleTag" class="product-card__info-title card-title product-title">
        <RouterLink
          :to="'/' + product.slug"
          @click="category && navStore.setCategoryTrail(category)"
        >
          {{ product.title }}
        </RouterLink>
      </component>
      <div>
        <ProductPrice :product="product" class="product-card__info-price card-text" />
        <ProductRating :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:map';

.product-card {
  height: 100%;
  width: 100%;
  border: none;
  @include media-breakpoint-up(sm) {
    margin-right: 0.1875rem; // 3px
    margin-bottom: 0.1875rem; // 3px
  }
  &__image-wrapper {
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 1.5625rem; // 25px
    &-image {
      height: auto;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    padding: 0;
    &-category-wrapper {
      font-size: 0.75rem; // 12px
      margin-bottom: 0.5625rem; // 9px
    }
    &-title {
      font-family: map.get($custom-font-family, bitter);
      font-size: 1rem; // 16px
      margin-bottom: 0.1875rem; // 3px
    }
    &-price {
      font-size: 0.875rem; // 14px
    }
  }
}
</style>
