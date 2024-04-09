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

body {
  margin: 0;
  box-sizing: border-box;
  border: 0;
  font-family: Urbanist, sans-serif;
  font-weight: 300;
  font-size: 16px;
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




</style>