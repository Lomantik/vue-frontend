<script setup>
import { useNavigationStore } from '@/stores/navigation.store.js'
import { resolvePublicUrl } from '@/domain/urls.js'
import { computed, ref, watchEffect } from 'vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import { useProductCard } from '@/composables/useProductCard.js'
import ProductRating from '@/components/product/ProductRating.vue'

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

const navStore = useNavigationStore()
const titleTag = computed(() => { return props.titleTag ?? 'span' })
const productCardData = ref(null)
watchEffect(async () => {
  productCardData.value = await useProductCard(props.product)
})
</script>

<template>
  <div class="card me-sm-3 mb-sm-3 h-100">
    <div class="product-image">
      <RouterLink :to="'/' + product.slug"
                  @click="category && navStore.setCategoryTrail(category)">
      <img class="card-img-top" :src="resolvePublicUrl(product.imageUrl)" alt=""
           :srcset="
            resolvePublicUrl(product.imageUrlL)
            + ' 600w, ' + resolvePublicUrl(product.imageUrlM)
            + ' 250w, ' + resolvePublicUrl(product.imageUrlS)
            +  ' 200w'" sizes="(min-width: 600px) 100vw, 600px" loading="lazy" decoding="async">
    </RouterLink>
    </div>
    <div class="card-body d-flex flex-column p-0">
      <span class="product-category" v-if="productCardData">
        <RouterLink :to="'/' + productCardData.primaryCategory.slug">
          {{ productCardData.primaryCategory.title }}
        </RouterLink>
      </span>
      <component :is="titleTag" class="card-title product-title">
        <RouterLink :to="'/' + product.slug"
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

<style scoped lang="scss">
@use "sass:map";

.card {
  width: 100%;
  border: none;
}
.card a {
  text-decoration: none;
}
.product-image {
  border-radius: 6px;
  overflow: hidden;
  margin: 0 0 25px 0;
}
.product-category {
  font-size: 12px;
  margin: 0 0 9px 0;
}
.product-title {
  font-family: map.get($custom-font-family, 'bitter');
  font-size: 16px;
  margin: 0 0 3px 0;
}
</style>
