<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";


</script>

<template>
  <div class="d-unset">
    <Navbar/>
  </div>
  <div>
    <div class="god-rays"></div>
    <div class="container-sm">
      <slot/>
    </div>
  </div>
  <div>
    <Footer/>
  </div>
  <div class="small-screen">
    <p class="p">Your current screen is too small to display the website properly.</p>
    <p class="p">Please resize your browser window or try using another device.</p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.d-unset {
  display: unset;
}

.small-screen {
  display: none;
}

@media screen and (max-width: 319px) {
  .small-screen{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: visible;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $background;
    z-index: 999999;
    p{
      padding-inline: 1rem;
      color: $font;
      font-weight: $medium;
    }
  }
}

</style>
