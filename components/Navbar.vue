<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <nav class="navbar">
    <ul>
      <li>
        <NuxtLink :to="localePath('index')">{{ $t('home') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('zapquake')">{{ $t('zapquake') }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";
  .navbar{

    ul{
      list-style-type: none;
      display: flex;
      gap: 2rem;
      li a{
        font-size: 25px;
        color: $font;
        font-weight: 300;
        text-decoration: none;
      }
    }
  }
</style>