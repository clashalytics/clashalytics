<script lang="ts" setup>
const localePath = useLocalePath();
import MenuIcon from "vue-material-design-icons/Menu.vue"
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-container">

          <div class="brand">
            <div class="brand-logo">
              <NuxtImg src="img/brandLogo.png" height="96"/>
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
          </div>

          <div class="divider"></div>

          <div class="links">
            <NuxtLink :to="localePath('tools')">{{ $t('tools') }}</NuxtLink>
            <NuxtLink :to="localePath('guides')">{{ $t('guides') }}</NuxtLink>
            <NuxtLink :to="localePath('faq')">{{ $t('faq') }}</NuxtLink>
            <NuxtLink :to="localePath('imprint')">{{ $t('imprint') }}</NuxtLink>
            <NuxtLink :to="localePath('dataprivacy')">{{ $t('dataprivacy') }}</NuxtLink>
          </div>

          <div class="socials">
            <NuxtLink :to="localePath('')">
              <nuxt-icon name="socials/discord" filled></nuxt-icon>
            </NuxtLink>
            <NuxtLink :to="localePath('')">
              <nuxt-icon name="socials/reddit" filled></nuxt-icon>
            </NuxtLink>
            <NuxtLink :to="localePath('')">
              <nuxt-icon name="socials/twitter" filled></nuxt-icon>
            </NuxtLink>
          </div>
        </div>
        <div class="disclaimer">
          <p class="p"> <strong>Disclaimer:</strong> This web site is not affiliated with, endorsed, sponsored, or specifically approved by
            Supercell. Supercell is not responsible for the operation or content of this site/application. Use of the
            trademarks and other intellectual property of Supercell is subject to Supercell's Fan Kit Agreement. <br>
            For more information about Supercell, please visit their website at
            <a href="https://supercell.com/">www.supercell.net</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

footer{
  background: linear-gradient(180deg, rgba(21, 21, 45, 0) 0%, #0a071a 100%);
}

.container {
  max-width: 1320px;
  color: $font;
}

a{
  text-decoration: none;
  color: $font;
}

.footer-content{
  padding-top: 128px;
  padding-bottom: 64px;
}

.footer-container{
  display: inline-grid;
  grid-template-columns: fit-content() 64px auto;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 32px;
  margin-bottom: 64px;
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
  border-left: 3px solid $secondary;
  margin-right: 64px;
}

.links{
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  align-items: center;
  gap: 50px;
  a{
    font-weight: $semi-bold;
    font-size: $h5-font-size;
  }
}

.socials{
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  align-items: center;
  gap: 32px;
  .nuxt-icon svg{
    height: 56px;
    border-radius: .75rem;
  }
}

.disclaimer{
  text-align: center;
  a{
    font-weight: $bold;
  }
}



</style>