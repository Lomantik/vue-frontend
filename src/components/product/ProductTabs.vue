<script setup>
import { onMounted, ref } from 'vue'
import TabDescription from '@/components/product/tabs/TabDescription.vue'
import TabSpecifications from '@/components/product/tabs/TabSpecifications.vue'
import TabReviews from '@/components/product/tabs/TabReviews.vue'

/** @typedef {import('@/types/product.js').Product} Product */

/** @type {{ product: Product }} */
defineProps({
  /** @type { import('vue').PropType<Product> } */
  product: {
    type: Object,
    required: true,
  },
})

const activeTab = ref('description')
onMounted(() => {
  const hash = window.location.hash.replace('#', '')
  if (hash) activeTab.value = hash
})
function setTab(tab) {
  activeTab.value = tab
  if (tab === 'description') history.replaceState(null, '', window.location.pathname)
  else history.replaceState(null, '', `#${tab}`)
}
</script>

<template>
  <div class="product-tabs">
    <ul class="product-tabs__buttons nav nav-pills" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="product-tabs__buttons-button nav-link"
          role="tab"
          @click="setTab('description')"
          :class="{ 'product-tabs__buttons-button--active': activeTab === 'description' }"
        >
          Description
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="product-tabs__buttons-button nav-link"
          role="tab"
          @click="setTab('specs')"
          :class="{ 'product-tabs__buttons-button--active': activeTab === 'specs' }"
        >
          Additional information
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="product-tabs__buttons-button nav-link"
          role="tab"
          @click="setTab('reviews')"
          :class="{ 'product-tabs__buttons-button--active': activeTab === 'reviews' }"
        >
          Reviews
        </button>
      </li>
    </ul>
    <div class="product-tabs__tab-content tab-content">
      <div class="tab-pane" role="tabpanel" :class="{ 'active show': activeTab === 'description' }">
        <TabDescription :product="product" />
      </div>
      <div class="tab-pane" role="tabpanel" :class="{ 'active show': activeTab === 'specs' }">
        <TabSpecifications :product="product" />
      </div>
      <div class="tab-pane" role="tabpanel" :class="{ 'active show': activeTab === 'reviews' }">
        <TabReviews :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.product-tabs {
  padding-top: 2.5rem; // 40px
  border-top: 1px solid color-token(border-tabs);
  &__buttons {
    &-button {
      border-radius: 120px !important;
      padding: 0.75rem 1.25rem !important; // 12px 20px
      font-size: 0.875rem; // 14px
      line-height: 1;
      font-weight: 500;
      color: color-token(primary);
      &--active {
        background: color.adjust(color-token(primary), $alpha: -0.9);
        color: color-token(primary) !important;
      }
      &:hover {
        color: color-token(primary);
      }
    }
  }
  &__tab-content {
    padding-top: 5rem; // 80px
    padding-bottom: 2.8125rem; // 45px
  }
}
</style>
