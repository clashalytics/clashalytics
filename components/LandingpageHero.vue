<script setup lang="ts">
import CtaButton from './buttons/CtaIconButton.vue';
</script>

<template>
  <div>
    <div class="header-title">
      <h1 class="h1">ClashAlytics</h1>
      <h2 class="h2">
        Your reliable tool for<br>
        keeping track of your<br>
        upgrade progress
      </h2>

    </div>
    <ButtonsCtaButton>

      <template >
        <p>Dies soll der Text sein</p>
      </template>
    </ButtonsCtaButton>
    <ButtonsCtaIconButton>
      <template #icon>
        // Icon
      </template>
      <template #text>
        <p>Dies soll der Text sein</p>
      </template>
    </ButtonsCtaIconButton>
  </div>

</template>

<style scoped>

</style>