<script lang="ts" setup>
const {locale, setLocale} = useI18n();
const localePath = useLocalePath();
import MenuIcon from "vue-material-design-icons/Menu.vue"

</script>

<template>
  <div class="fluid-container nav-container background-blurred">
    <nav class="navbar-bar">
      <div class="navbar-brand-container">
        <NuxtLink :to="localePath('index')" class="no-textdecoration">
          <div class="brand-container-logo">
            <NuxtImg height="64" src='/img/brandLogo.png'/>
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
        <NuxtLink :to="localePath('zapquake')" class="no-textdecoration">
          <h5 class="h5">
            {{ $t('tools') }}
          </h5>
        </NuxtLink>
        <NuxtLink :to="localePath('guides')" class="no-textdecoration">
          <h5 class="h5">
            {{ $t('guides') }}
          </h5>
        </NuxtLink>
        <NuxtLink :to="localePath('test')" class="no-textdecoration">
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


  <div id="fullscreen-menu">
    <div class="menu-grid container">

      <div class="menu-brand-wrapper">
        <div class="menu-brand supercell-font">
          <NuxtLink :to="localePath('index')" class="no-textdecoration">
            <div class="menu-brand-logo">
              <NuxtImg id="fullscreen-brand-logo" src='/img/brandLogo.png'/>
            </div>
            <div class="menu-brand-title ">
              <h1 class="h1">
                Clash <br>
                Alytics
              </h1>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="menu-tools">
        <h2 class="h2 supercell-font soft-heading-shadow">Tools</h2>
        <div class="menu-link-divider"></div>
        <div class="menu-link-wrapper">
          <NuxtLink :to="localePath('')" class="no-textdecoration">
            <h5 class="h5">
              {{ $t('zapquake') }}
            </h5>
          </NuxtLink>
          <NuxtLink :to="localePath('')" class="no-textdecoration">
            <h5 class="h5">
              {{ $t('baseupgradetracker') }}
            </h5>
          </NuxtLink>
        </div>
      </div>

      <div class="menu-guides">
        <h2 class="h2 supercell-font soft-heading-shadow">Guides</h2>
        <div class="menu-link-divider"></div>
        <div class="menu-link-wrapper">
          <NuxtLink :to="localePath('')" class="no-textdecoration">
            <h5 class="h5">
              {{ $t('toolmanual') }}
            </h5>
          </NuxtLink>
          <NuxtLink :to="localePath('')" class="no-textdecoration">
            <h5 class="h5">
              {{ $t('upgradepriorityguide') }}
            </h5>
          </NuxtLink>
        </div>
      </div>

      <div class="menu-about">

        <div class="menu-about-links">
          <h2 class="h2 supercell-font soft-heading-shadow">About</h2>
          <div class="menu-link-divider"></div>
          <div class="menu-link-wrapper">
            <NuxtLink :to="localePath('')" class="no-textdecoration">
              <h5 class="h5">
                {{ $t('faq') }}
              </h5>
            </NuxtLink>
            <NuxtLink :to="localePath('')" class="no-textdecoration">
              <h5 class="h5">
                {{ $t('imprint') }}
              </h5>
            </NuxtLink>
            <NuxtLink :to="localePath('')" class="no-textdecoration">
              <h5 class="h5">
                {{ $t('dataprivacy') }}
              </h5>
            </NuxtLink>
          </div>
        </div>

        <div class="menu-about-socials">

          <div class="menu-about-socials-item">
            <NuxtLink :to="localePath('')">
              <nuxt-icon filled name="socials/discord"></nuxt-icon>
            </NuxtLink>
          </div>
          <div class="menu-about-socials-item">
            <NuxtLink :to="localePath('')">
              <nuxt-icon filled name="socials/reddit"></nuxt-icon>
            </NuxtLink>
          </div>
          <div class="menu-about-socials-item">
            <NuxtLink :to="localePath('')">
              <nuxt-icon filled name="socials/twitter"></nuxt-icon>
            </NuxtLink>
          </div>

        </div>

      </div>
    </div>
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
  width: 7ch;
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

#fullscreen-menu {
  height: 80vh;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  height: 100%;
}

.menu-tools, .menu-guides, .menu-about {
  background: $primary-gradient;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;

  .menu-about-links {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }

  h1 {
    font-weight: $medium;
    color: $accent;
  }
}

.menu-link-divider {
  border-top: 3px solid $secondary;
  width: 100%;
}

.menu-link-wrapper{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-brand-wrapper {
  grid-area: 1 / 1 / 3 / 2;
}

.menu-brand {
  background: $primary-gradient;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.menu-brand-logo {
  display: flex;
  align-items: center;
}

.menu-brand-title {
  width: fit-content;
  word-wrap: break-word;

}

#fullscreen-brand-logo {
  aspect-ratio: 1/1;
  width: 256px;
}

.menu-tools {
  grid-area: 1 / 2 / 2 / 3;
  border-radius: 16px;
}

.menu-guides {
  grid-area: 2 / 2 / 3 / 3;
}

.menu-about {
  grid-area: 1 / 3 / 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-about-socials {
  display: flex;
  gap: 32px;

}

.menu-about-socials-item{
  filter: drop-shadow(8px 12px 8px rgba(0, 0, 0, 0.50));
}


</style>