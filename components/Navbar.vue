<script lang="ts" setup>
const { locale, setLocale } = useI18n();
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
      <li>
        <NuxtLink :to="localePath('test')">{{ $t('test') }}</NuxtLink>
      </li>
      <li>
        <div>
          <button @click="setLocale('en')">EN</button>
          <button @click="setLocale('de')">DE</button>
          <p id="langSwitch">{{ $t('welcome') }}</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.navbar > ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;

  li a {
    font-size: 25px;
    color: $font;
    font-weight: 300;
    text-decoration: none;
  }
}

#langSwitch{
  color: $font;
}

</style>