<script setup>
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import ProductActionsSimple from '@/components/product/purchase/ProductActionsSimple.vue'
import ProductActionsGrouped from '@/components/product/purchase/ProductActionsGrouped.vue'
import ProductActionsConfigurable from '@/components/product/purchase/ProductActionsConfigurable.vue'
import ProductMeta from '@/components/product/ProductMeta.vue'
import { computed, ref, watch } from 'vue'
import ProductTabs from '@/components/product/ProductTabs.vue'
import RelatedProductsBlock from '@/components/blocks/RelatedProductsBlock.vue'
import ProductRating from '@/components/product/ProductRating.vue'
import { getReviewsByProductId } from '@/api/reviews.api.js'
import ProductImageGallery from '@/components/product/ProductImageGallery.vue'

/** @typedef {import('@/types/product.js').Product} Product */

/** @type {{ product: Product }} */
const props = defineProps({
  /** @type { import('vue').PropType<Product> } */
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

const reviews = ref([])
const additionalMessage = computed(() => {
  if (reviews.value.length === 0) return ''

  return (
    '(' +
    reviews.value.length +
    ' customer ' +
    (reviews.value.length > 1 ? 'reviews' : 'review') +
    ')'
  )
})

watch(
  () => props.product,
  async (product) => {
    reviews.value = await getReviewsByProductId(product.id)
  },
  { immediate: true },
)

/** @type { import('vue').Ref<Product> } */
const currentVariant = ref(props.product)
function onVariantChange(variant) {
  variant ? (currentVariant.value = variant) : (currentVariant.value = props.product)
}
</script>

<template>
  <div class="product-page" v-if="product">
    <div class="container">
      <div class="product-page__main-area row">
        <div class="col-12 col-md-6 col-xl-auto">
          <div class="product-page__main-area-image-wrapper">
            <ProductImageGallery :product="currentVariant" />
          </div>
        </div>
        <div class="product-page__main-area-info-col col-12 col-md-6 col-xl">
          <div class="product-page__main-area-info-wrapper">
            <h1 class="product-page__main-area-title">{{ product.title }}</h1>
            <div v-if="reviews.length > 0" class="product-page__main-area-reviews-wrapper">
              <ProductRating class="product-page__main-area-rating" :product="product" />
              <span class="product-page__main-area-reviews-info">{{ additionalMessage }}</span>
            </div>
            <div class="product-page__main-area-price">
              <ProductPrice :product="currentVariant" />
            </div>
            <p class="product-page__main-area-info">
              {{ currentVariant.shortDescription }}
            </p>
            <component
              :is="actionComponents[product.type]"
              :product="product"
              class="product-page__main-area-actions"
              @variant-change="onVariantChange"
            />
            <ProductMeta :product="product" />
          </div>
        </div>
      </div>
    </div>
    <ProductTabs class="container" :product="product" />
    <RelatedProductsBlock :product="product" />
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
    margin-bottom: 5rem; // 80px
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
    &-info-wrapper {
      @include media-breakpoint-up(md) {
        max-width: 530px;
      }
    }
    &-title {
      font-size: 2.125rem; // 34px
      line-height: 1.2;
      margin-bottom: 0.75rem; // 12px
    }
    &-price {
      margin-top: 1.125rem; // 18px
      font-size: 1.375rem; // 22px
      line-height: 1.7;
      padding: 0 0 1.1875rem 0; // 11px 0 19px 0
    }
    &-info {
      font-size: 0.875rem; // 14px
      margin-bottom: 1.5625rem; // 25px
    }
    &-actions {
      margin-bottom: 1.875rem; // 30px
    }
    &-reviews-wrapper {
      margin-bottom: -0.125rem; // -2px
    }
    &-rating {
      font-size: 0.875rem; // 14px
      line-height: 1;
      display: inline-block;
      height: 14px;
    }
    &-reviews-info {
      font-size: 0.875rem; // 14px
      margin-left: 0.5rem; // 8px
      line-height: 1;
      display: inline-block;
      height: 14px;
    }
  }
}
</style>
