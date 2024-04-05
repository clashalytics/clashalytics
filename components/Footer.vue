<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <hr>
  <footer>
    <div class="footerContainer">
      <div class="brand">
        <div class="brandLogo">

          // ClashAlytics Logo

        </div>
        <div class="brandText">
          <h5 class="h5">
            2024 ⦁ ClashAlytics
          </h5>
          <h6 class="h6">
            by Kevin Schevalje
          </h6>
        </div>
      </div>
      <div class="divider">

        // Divider

      </div>
      <div class="links">
        <NuxtLink :to="localePath('tools')">{{ $t('tools') }}</NuxtLink>
        <NuxtLink :to="localePath('guides')">{{ $t('guides') }}</NuxtLink>
        <NuxtLink :to="localePath('faq')">{{ $t('faq') }}</NuxtLink>
        <NuxtLink :to="localePath('imprint')">{{ $t('imprint') }}</NuxtLink>
        <NuxtLink :to="localePath('dataprivacy')">{{ $t('dataprivacy') }}</NuxtLink>
      </div>
      <div class="socials"></div>
    </div>
    <div class="disclaimer">
      <p class="p">Disclaimer: This web site is not affiliated with, endorsed, sponsored, or specifically approved by
        Supercell. Supercell is not responsible for the operation or content of this site/application. Use of the
        trademarks and other intellectual property of Supercell is subject to Supercell's Fan Kit Agreement. For more
        information about Supercell, please visit their website at <a href="https://supercell.com/">www.supercell.net</a> </p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";
  footer{
    margin: 0 300px;
    color: $font;
  }
</style>