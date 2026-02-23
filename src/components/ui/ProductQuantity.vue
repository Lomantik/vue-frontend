<script setup>
const qty = defineModel()
defineProps({
  /** @type {{product: Product}} */
  minQty: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="product-quantity input-group">
    <button
      class="product-quantity__button product-quantity__button--minus btn btn-white"
      @click="qty > minQty && qty--"
    ></button>
    <input
      v-model="qty"
      class="product-quantity__input form-control"
      type="text"
      step="1"
      min="1"
      name="qty"
      size="4"
      inputmode="numeric"
      autocomplete="off"
    />
    <button
      class="product-quantity__button product-quantity__button--plus btn btn-white"
      @click="qty++"
    ></button>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:map';
@use 'sass:color';

.product-quantity {
  height: 50px;
  font-size: 0.875rem; // 14px
  line-height: 1.15;
  border: 1px solid color.adjust(color-token(qty-border), $alpha: -0.8);
  border-radius: 9999px;
  min-width: 97px;
  &__button {
    border: none;
    width: 30px;
    height: 100%;
    padding: 0;
    font-family: map.get($custom-font-family, blooms);
    &--minus {
      padding-left: 0.625rem; // 10px
      &::before {
        content: content-token(minus);
      }
    }
    &--plus {
      padding-right: 0.625rem; // 10px;
      &::before {
        content: content-token(plus);
      }
    }
  }
  &__input {
    font-size: 0.875rem; // 14px;
    border: none;
    padding: 0;
    text-align: center;
    width: 37px !important;
    flex: none !important;
  }
}
</style>
