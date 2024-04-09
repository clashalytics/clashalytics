<script setup lang="ts">
const {locale, setLocale} = useI18n();
const localePath = useLocalePath();

</script>

<template>
  <div>
    <LandingpageContent/>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

/* global temporary*/

body {
  margin: 0;
  box-sizing: border-box;
  border: 0;
  font-family: Urbanist, sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.h1, .h2, .h3, .h4, .h5, .h6 {
  color: $font;
  font-weight: 500;
  margin: 0;
}

.p .lead {
  color: $font;
  font-weight: 300;
}

.h1 {
  font-size: $h1-font-size;
}

.h2 {
  font-size: $h2-font-size;
}

.h3 {
  font-size: $h3-font-size;
}

.h4 {
  font-size: $h4-font-size;
}

.h5 {
  font-size: $h5-font-size;
}

.h6 {
  font-size: $h6-font-size;
}

.p {
  font-size: $p-font-size;
}

.lead {
  font-size: $lead-font-size;
}

.supercell-font {
  font-family: Supercell-Magic, sans-serif;
}

.no-textdecoration {
  text-decoration: none;
}

button{
  border: 0;
  cursor: pointer;
}
/* soft borders */

.soft-border-primary{

}

.soft-border-secondary{

}

.soft-border-background{

}

.soft-border-accent{
  border:0;
  box-shadow: -12px -8px 16px 0px #72640A inset, 24px 24px 48px 0px rgba(243, 232, 158, 0.20), 12px 8px 16px 0px #C6AE0D inset;
}

</style>