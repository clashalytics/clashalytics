<script lang="ts" setup>
const localePath = useLocalePath();
import MenuIcon from "vue-material-design-icons/Menu.vue"
</script>

<template>
  <hr>
  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="brand">
          <div class="brand-logo">
              <NuxtImg src='/img/brandLogo.png' height="96"/>
          </div>
          <h3 class="h3 supercell-font">
            Clash
            Alytics
          </h3>
        </div>
        <div class="brand-title">
          <h5 class="h5">
            2024 ⦁ ClashAlytics
          </h5>
          <h6 class="h6">
            by Kevin Schevalje
          </h6>
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
        <div class="socials">
          <NuxtImg :to="localePath('tools')" src='/img/brandLogo.png' height="96"/>
          <svg-icon type="mdi" :path="path"></svg-icon>
          <p>link</p>
          <p>link</p>
        </div>
      </div>
      <div class="disclaimer">
        <p class="p">Disclaimer: This web site is not affiliated with, endorsed, sponsored, or specifically approved by
          Supercell. Supercell is not responsible for the operation or content of this site/application. Use of the
          trademarks and other intellectual property of Supercell is subject to Supercell's Fan Kit Agreement. For more
          information about Supercell, please visit their website at <a
              href="https://supercell.com/">www.supercell.net</a></p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

.container {
  max-width: 1320px;
  color: $font;
}

.footer-container{
  margin-top: 128px;
  margin-bottom: 64px;

  display: grid;
  grid-template-columns: auto 3px auto;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 32px;
}

.brand{
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  .h3{
    width: 7ch;
    box-sizing: content-box;
    word-wrap: break-word;
  }
}

.brand-logo{
  margin-right: 16px;
}

.brand-title{
  grid-area: 2 / 1 / 3 / 2;
}

.divider{
  grid-area: 1 / 2 / 3 / 3;
}

.links{
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  align-items: center;
  gap: 50px;
}

.socials{
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  align-items: center;

}

</style>