<script lang="ts" setup>
const {locale, setLocale} = useI18n();
const localePath = useLocalePath();
import MenuIcon from "vue-material-design-icons/Menu.vue"

</script>

<template>
  <nav class="container navbar-bar">
    <div class="navbar-brand-container">
      <NuxtLink class="no-textdecoration" :to="localePath('index')">
        <div class="brand-container-logo">
          <NuxtImg src='~/assets/images/brandLogo.png'/>
        </div>
        <div class="brand-container-title">
          <h6 class="h6">
            Clash
            Alytics
          </h6>
        </div>
      </NuxtLink>
    </div>
    <div class="navbar-link-container">
      <NuxtLink :to="localePath('zapquake')">{{ $t('tools') }}</NuxtLink>
      <NuxtLink :to="localePath('test')">{{ $t('guides') }}</NuxtLink>
    </div>
    <div class="navbar-button-container">
      <button class="button-menu">
        [ICON]
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.navbar-bar {
  display: flex;
  justify-content: space-between;
  max-width: 1320px;
}

.navbar-brand-container a {
  display: flex;
  align-items: center;
}

.brand-container-logo {

}

.brand-container-title .h6 {
  text-decoration: none;
  box-sizing: content-box;
  word-wrap: break-word;
  width: 81px;
}

.navbar-link-container {
  display: flex;
  gap: 64px;

  a {
    color: $accent;
    text-decoration: none;
    font-size: $h5-font-size;
  }
}

.navbar-button-container {

}

</style>