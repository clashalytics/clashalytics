<script setup lang="ts">
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();



</script>

<template>
  <div>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('de')">de</button>
    <p>{{ $t('welcome') }}</p>
    <NuxtLink :to="localePath('test')">{{ $t('test') }}</NuxtLink>
  </div>
  <div>
    <LandingpageHero />
    <LandingpageFeatures />
  </div>
</template>

<style scoped>
  body{
    margin: 0;
    box-sizing: border-box;
    border: 0;
  }
</style>