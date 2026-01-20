<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer py-40 pt-md-95 pb-md-125 lh-1 text-white text-opacity-90 background-footer
    border-bottom border-1 border-solid border-opacity-10 border-white fs-14 ls-02">
    <div class="container">
      <div class="p-0">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-4">
            <div class="footer-title mb-24 text-tertiary fs-24 ls-normal font-family-bitter">Visit Us in Store</div>
            <p class="lh-24 mb-32">We would love to chat to you in person about making a lasting
              difference for children in need. Find your closest store location below.</p>
            <p class="mb-32 mb-md-0">
              <RouterLink to="/contact" class="contact-link lh-24 d-inline-flex
                text-decoration-none text-white text-opacity-90 fs-13 fw-medium">
                FIND STORE
              </RouterLink>
            </p>
          </div>
          <div class="d-none d-lg-block col-lg-2"></div>
          <div class="col-6 col-md-3 col-lg-2 py-0 px-15">
            <div class="footer-subtitle mb-25 fs-12 ls-1 font-family-bitter">COMPANY</div>
            <ul class="nav flex-column lh-1_7">
              <li class="nav-item mb-8">
                <RouterLink to="/about" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  About
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/environmental-initiatives" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Environmental Initiatives
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/factories" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Factories
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/careers" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Careers
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/accessibility" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Accessibility
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-3 col-lg-2 py-0 px-15">
            <div class="footer-subtitle mb-25 fs-12 ls-1 font-family-bitter">ACCOUNT</div>
            <ul class="nav flex-column lh-1_7">
              <li class="nav-item mb-8">
                <RouterLink to="/my-account" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  My account
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/manage-account" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Manage Account
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/saved-items" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Saved Items
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/orders-and-returns" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Orders & Returns
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/redeem-a-gift-card" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Redeem a Gift Card
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-3 col-lg-2 py-0 px-15">
            <div class="footer-subtitle mt-25 mt-md-0 mb-25 fs-12 ls-1 font-family-bitter">GET IN TOUCH</div>
            <ul class="nav flex-column lh-1_7">
              <li class="nav-item mb-8">
                <RouterLink to="/facebook" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Facebook
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/instagram" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Instagram
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/twitter" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Twitter
                </RouterLink>
              </li>
              <li class="nav-item mb-8">
                <RouterLink to="/linkedin" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Linkedin
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/youtube" class="nav-link text-white text-opacity-90 p-0 d-inline">
                  Youtube
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="subfooter text-white text-opacity-60 bg-primary py-30 fs-12">
    <div class="container justify-content-center justify-content-md-start d-flex">
      <div>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2026</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:map";

.contact-link::after {
  content: content('big-arrow-right');
  margin-left: spacer(12);
  font-size: font-size(7);
  font-family: map.get($custom-font-family, 'blooms');
}
</style>
