<script setup>
import { computed, ref, watch } from 'vue'
import { getProductCategories } from '@/utils/product.js'

/** @typedef {import('@/types/product.js').Product} Product */

const props = defineProps({
  /** @type {{product: Product}} */
  product: {
    type: Object,
    required: true,
  },
})

const tags = computed(() => {
  return [...props.product.tags].sort((a, b) => a.id - b.id)
})
const categories = ref([])
watch(
  () => props.product,
  async (product) => {
    categories.value = await getProductCategories(product)
  },
  { immediate: true },
)
</script>

<template>
  <div class="product-meta">
    <div class="product-meta__item">SKU: {{ product.sku }}</div>
    <div class="product-meta__item">
      Categories:
      <template v-for="(category, index) in categories" :key="category.id">
        <template v-if="index > 0">, </template>
        <RouterLink :to="category.link">{{ category.title }}</RouterLink>
      </template>
    </div>
    <div class="product-meta__item product-meta__item--tags">
      Tags:
      <template v-for="(tag, index) in tags" :key="tag">
        <template v-if="index > 0">, </template>
        <RouterLink to="/">{{ tag }}</RouterLink>
      </template>
    </div>
    <div class="product-meta__item">
      <ul class="product-meta__item-social-wrapper">
        <li class="product-meta__item-social product-meta__item-social--bird"><span></span></li>
        <li class="product-meta__item-social product-meta__item-social--f"><span></span></li>
        <li class="product-meta__item-social product-meta__item-social--handset"><span></span></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:map';

.product-meta {
  font-size: 0.75rem; // 12px
  line-height: 1.5;
  &__item {
    margin-bottom: 0.1875rem; // 3px
    &-social-wrapper {
      list-style: none;
      padding-left: 0;
    }
    &--tags {
      margin-bottom: 1.5625rem; // 25px
    }
    &-social {
      font-family: map.get($custom-font-family, social-logos);
      color: #090909;
      font-size: 1.125rem; // 18px
      display: inline-block;
      cursor: pointer;
      line-height: 1;
      font-weight: 400;
      font-style: normal;
      margin-left: 0.9375rem; // 15px
      &:hover {
        color: color-token(link-hovered);
      }
      &--bird {
        margin-left: 0;
        & > span::before {
          content: content-token(bird);
        }
      }
      &--f {
        & > span::before {
          content: content-token(f);
        }
      }
      &--handset {
        & > span::before {
          content: content-token(handset);
        }
      }
    }
  }
}
</style>
