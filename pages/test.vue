<template>
  <p>{{ $t('selam') }}</p>

  <div>
    <NuxtLink :to="localePath('index')">{{ $t('home.title') }}</NuxtLink>
  </div>
</template>