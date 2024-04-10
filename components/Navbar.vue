<script lang="ts" setup>
const {locale, setLocale} = useI18n();
const localePath = useLocalePath();
import MenuIcon from "vue-material-design-icons/Menu.vue"

</script>

<template>
  <div class="fluid-container nav-container background-blurred">
    <nav class="navbar-bar">
      <div class="navbar-brand-container">
        <NuxtLink class="no-textdecoration" :to="localePath('index')">
          <div class="brand-container-logo">
            <NuxtImg src='/img/brandLogo.png' height="64"/>
          </div>
          <div class="brand-container-title">
            <h6 class="h6 supercell-font">
              Clash
              Alytics
            </h6>
          </div>
        </NuxtLink>
      </div>
      <div class="navbar-link-container">
        <NuxtLink class="no-textdecoration" :to="localePath('zapquake')">
          <h5 class="h5">
            {{ $t('tools') }}
          </h5>
        </NuxtLink>
        <NuxtLink class="no-textdecoration" :to="localePath('guides')">
          <h5 class="h5">
            {{ $t('guides') }}
          </h5>
        </NuxtLink>
        <NuxtLink class="no-textdecoration" :to="localePath('test')">
          <h5 class="h5">
            {{ $t('test') }}
          </h5>
        </NuxtLink>
      </div>
      <div class="navbar-button-container">
        <button id="button-menu">
          <MenuIcon size="32"/>
        </button>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";


.navbar-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;
  padding: 16px 0;
}

.nav-container {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(180deg, #0F0F1F 0%, rgba(21, 21, 45, 0.00) 100%);
}

.background-blurred {
  backdrop-filter: blur(8px);
}

.navbar-brand-container a {
  display: flex;
  align-items: center;
  gap: 16px;
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

  .h5 {
    font-weight: $medium;

  }
}

.navbar-button-container {
  height: 56px;
  width: 56px;

}

#button-menu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: $primary-gradient;
  color: $font;
}

MenuIcon {
  width: 32px;
  height: 32px;
}

</style>