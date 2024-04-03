<script setup lang="ts">
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();

</script>

<template>




  <div>
    <LandingpageHero />
    <LandingpageFeatures />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";
  body{
    margin: 0;
    box-sizing: border-box;
    border: 0;
    font-family: Urbanist, sans-serif;
    font-weight: 300;
  }
  .h1, .h2{
    color: $font;
    font-weight: 500;
  }
  .p{
    color: $font;
    font-weight: 300;
  }

</style>