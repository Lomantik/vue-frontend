<script setup>
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import ProductActionsSimple from '@/components/product/purchase/ProductActionsSimple.vue'
import ProductActionsGrouped from '@/components/product/purchase/ProductActionsGrouped.vue'
import ProductActionsConfigurable from '@/components/product/purchase/ProductActionsConfigurable.vue'
import ProductMeta from '@/components/product/ProductMeta.vue'

/** @typedef {import('@/types/product.js').Product} Product */

defineProps({
  /** @type {{product: Product}} */
  product: {
    type: Object,
    required: true,
  },
})

const actionComponents = {
  simple: ProductActionsSimple,
  grouped: ProductActionsGrouped,
  configurable: ProductActionsConfigurable,
}
</script>

<template>
  <div class="product-page container" v-if="product">
    <div class="product-page__main-area row">
      <div class="col-12 col-md-6 col-xl-auto">
        <div class="product-page__main-area-image-wrapper">
          <ResponsiveImage
            :image-key="product.mainImageId"
            class="product-page__main-area-image"
            loading="lazy"
          />
        </div>
      </div>
      <div class="product-page__main-area-info-col col-12 col-md-6 col-xl">
        <div class="product-page__main-area-info-wrapper">
          <h1 class="product-page__main-area-title">{{ product.title }}</h1>
          <div class="product-page__main-area-price">
            <ProductPrice :product="product" />
          </div>
          <p class="product-page__main-area-info">
            {{ product.description }}
          </p>
          <component
            :is="actionComponents[product.type]"
            :product="product"
            class="product-page__main-area-actions"
          />
          <ProductMeta :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-page {
  padding-bottom: 2.5rem; // 40px
  @include media-breakpoint-up(md) {
    padding-bottom: 3.75rem; // 60px
  }
  &__main-area {
    --bs-gutter-x: 30px;
    @include media-breakpoint-up(xl) {
      --bs-gutter-x: 80px;
    }
    &-info-col {
      margin-top: 1.875rem; // 30px
      @include media-breakpoint-up(md) {
        margin-top: 0;
      }
    }
    &-image-wrapper {
      border-radius: 6px;
      overflow: hidden;
      width: 100%;
      @include media-breakpoint-up(xl) {
        width: 540px;
      }
    }
    &-image {
      width: 100%;
      height: auto;
    }
    &-info-wrapper {
      @include media-breakpoint-up(md) {
        max-width: 530px;
      }
    }
    &-title {
      font-size: 2.125rem; // 34px
      line-height: 1.2;
    }
    &-price {
      font-size: 1.375rem; // 22px
      line-height: 1.7;
      padding: 0 0 1.25rem 0; // 11px 0 20px 0
    }
    &-info {
      font-size: 0.875rem; // 14px
      margin-bottom: 1.5625rem; // 25px
    }
    &-actions {
      margin-bottom: 1.875rem; // 30px
    }
  }
}
</style>
