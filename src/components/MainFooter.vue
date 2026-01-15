<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="extra-padding">
        <div class="row">
          <div class="col-4">
            <div class="footer-title">Visit Us in Store</div>
            <p class="text-block">We would love to chat to you in person about making a lasting
              difference for children in need. Find your closest store location below.</p>
            <p class="mb-0">
              <RouterLink to="/contact" class="contact-link">FIND STORE</RouterLink>
            </p>
          </div>
          <div class="col-2"></div>
          <div class="col-2 links-column">
            <div class="footer-subtitle">COMPANY</div>
            <ul class="nav flex-column">
              <li class="nav-item">
                <RouterLink to="/about" class="nav-link">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/environmental-initiatives" class="nav-link">
                  Environmental Initiatives
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/factories" class="nav-link">Factories</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/careers" class="nav-link">Careers</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/accessibility" class="nav-link m-0">Accessibility</RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-2 links-column">
            <div class="footer-subtitle">ACCOUNT</div>
            <ul class="nav flex-column">
              <li class="nav-item">
                <RouterLink to="/my-account" class="nav-link">My account</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/manage-account" class="nav-link">Manage Account</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/saved-items" class="nav-link">Saved Items</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/orders-and-returns" class="nav-link">Orders & Returns</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/redeem-a-gift-card" class="nav-link m-0">Redeem a Gift Card</RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-2 links-column">
            <div class="footer-subtitle">GET IN TOUCH</div>
            <ul class="nav flex-column">
              <li class="nav-item">
                <RouterLink to="/facebook" class="nav-link">Facebook</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/instagram" class="nav-link">Instagram</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/twitter" class="nav-link">Twitter</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/linkedin" class="nav-link">Linkedin</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/youtube" class="nav-link m-0">Youtube</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="subfooter">
    <div class="container">
      Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2026
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: $bg-footer;
  padding: $padding-footer;
  border-bottom: $border-footer;
  font-size: $font-size-footer;
  color: $footer-text-color;
  letter-spacing: $spacing-footer;
  line-height: 1;
}
.footer-title {
  color: $color-text-tertiary;
  font-family: $font-family-bitter;
  letter-spacing: $spacing-footer-title;
  font-size: $font-size-footer-title;
  margin: $margin-footer-title;
}
.text-block {
  margin: $margin-footer-text-block;
  line-height: $line-height-footer-text-block;
}
.footer-subtitle {
  font-family: $font-family-bitter;
  font-size: $font-size-footer-subtitle;
  letter-spacing: $spacing-footer-subtitle;
  margin: $margin-footer-subtitle;
}
.nav-link {
  color: $footer-text-color;
  line-height: $line-height-footer-nav-link;
  margin: $margin-footer-nav-link;
  padding: $padding-footer-nav-link;
}
.subfooter {
  background: $bg-subfooter;
  padding: $padding-subfooter;
  font-size: $font-size-subfooter;
  color: $subfooter-text-color;
}
.contact-link {
  text-decoration: none;
  color: $footer-text-color;
  line-height: 24px;
  display: inline-flex;
  font-size: $font-size-footer-contact-link;
  font-weight: $font-weight-contact-link;
}
.contact-link::after {
  content: "\e80c";
  margin-left: 12px;
  font-size: 7px;
  font-family: $font-family-blooms;
}
.links-column {
  padding: $padding-footer-links-column;
}
.extra-padding {
  padding: 0;
}
</style>
