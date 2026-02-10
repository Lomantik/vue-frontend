<script setup>
import { RouterLink } from 'vue-router'
import SubfooterBlock from '@/components/blocks/SubfooterBlock.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="p-0">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-4">
            <div class="footer__title">Visit Us in Store</div>
            <p class="footer__info">
              We would love to chat to you in person about making a lasting difference for children
              in need. Find your closest store location below.
            </p>
            <p class="footer__action">
              <RouterLink to="/contact" class="footer__action-link"> FIND STORE </RouterLink>
            </p>
          </div>
          <div class="d-none d-lg-block col-lg-2"></div>
          <div class="footer__group col-6 col-md-3 col-lg-2">
            <div class="footer__group-title">COMPANY</div>
            <ul class="nav flex-column">
              <li class="footer__group-nav-item">
                <RouterLink to="/about" class="footer__group-nav-item-link"> About </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/environmental-initiatives" class="footer__group-nav-item-link">
                  Environmental Initiatives
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/factories" class="footer__group-nav-item-link">
                  Factories
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/careers" class="footer__group-nav-item-link"> Careers </RouterLink>
              </li>
              <li class="footer__group-nav-item footer__group-nav-item--last">
                <RouterLink to="/accessibility" class="footer__group-nav-item-link">
                  Accessibility
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="footer__group col-6 col-md-3 col-lg-2">
            <div class="footer__group-title">ACCOUNT</div>
            <ul class="nav flex-column">
              <li class="footer__group-nav-item">
                <RouterLink to="/my-account" class="footer__group-nav-item-link">
                  My account
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/manage-account" class="footer__group-nav-item-link">
                  Manage Account
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/saved-items" class="footer__group-nav-item-link">
                  Saved Items
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/orders-and-returns" class="footer__group-nav-item-link">
                  Orders & Returns
                </RouterLink>
              </li>
              <li class="footer__group-nav-item footer__group-nav-item--last">
                <RouterLink to="/redeem-a-gift-card" class="footer__group-nav-item-link">
                  Redeem a Gift Card
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="footer__group col-6 col-md-3 col-lg-2">
            <div class="footer__group-title footer__group-title--last">GET IN TOUCH</div>
            <ul class="nav flex-column">
              <li class="footer__group-nav-item">
                <RouterLink to="/facebook" class="footer__group-nav-item-link">
                  Facebook
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/instagram" class="footer__group-nav-item-link">
                  Instagram
                </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/twitter" class="footer__group-nav-item-link"> Twitter </RouterLink>
              </li>
              <li class="footer__group-nav-item">
                <RouterLink to="/linkedin" class="footer__group-nav-item-link">
                  Linkedin
                </RouterLink>
              </li>
              <li class="footer__group-nav-item footer__group-nav-item--last">
                <RouterLink to="/youtube" class="footer__group-nav-item-link"> Youtube </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <SubfooterBlock />
</template>

<style scoped lang="scss">
@use 'sass:map';
@use 'sass:color';

.footer {
  background-color: color-token(primary);
  background-image: url('@/assets/images/footer-bg.png');
  background-position: top left;
  background-repeat: no-repeat;
  font-size: 0.875rem; // 14px
  color: color-token(footer-text);
  letter-spacing: 0.02em;
  line-height: 1;
  border-bottom: 1px solid color.adjust(color-token(footer-text), $alpha: -0.9);
  padding-top: 2.5rem; // 40px
  padding-bottom: 2.5rem; // 40px;
  @include media-breakpoint-up(md) {
    padding-top: 5.9375rem; // 95px
    padding-bottom: 7.8125rem; // 125px
  }
  &__title {
    font-size: 1.75rem; // 28px
    letter-spacing: normal;
    margin-bottom: 1.5rem; // 24px
    font-family: map.get($custom-font-family, bitter);
    color: color-token(tertiary);
  }
  &__info {
    font-size: 0.875rem; // 14px
    margin-bottom: 2rem; // 32px
    line-height: 1.714285714285714;
    color: color.adjust(color-token(footer-text), $alpha: -0.1);
  }
  &__action {
    font-size: 0.8125rem; // 13px
    margin-bottom: 2rem; // 32px
    line-height: 1.846153846153846;
    @include media-breakpoint-up(md) {
      margin-bottom: 0;
    }
    &-link {
      color: color.adjust(color-token(footer-text), $alpha: -0.1);
      display: inline-flex;
      font-weight: 500;
      &::after {
        content: content-token('big-arrow-right');
        margin-left: 0.75rem; // 12px
        font-size: 0.4375rem; // 7px
        font-family: map.get($custom-font-family, blooms);
        line-height: 3.428571428571429;
      }
    }
  }
  &__group {
    padding: 0 0.9375rem; // 0 15px
    &-title {
      font-size: 0.75rem; // 12px
      font-family: map.get($custom-font-family, bitter);
      letter-spacing: 0.1em;
      margin-bottom: 1.5625rem; // 25px
      &--last {
        margin-top: 1.5625rem; // 25px
        @include media-breakpoint-up(md) {
          margin-top: 0;
        }
      }
    }
    &-nav-item {
      line-height: 1.7;
      margin-bottom: 0.5rem; // 8px
      &--last {
        margin-bottom: 0;
      }
      &-link {
        color: color.adjust(color-token(footer-text), $alpha: -0.1);
        display: inline;
        padding: 0;
      }
    }
  }
}
</style>
