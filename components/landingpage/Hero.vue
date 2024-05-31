<script setup lang="ts">

</script>

<template>
  <div class="container-fluid">
    <div class="hero-content container-md">
      <div class="hero-title">
        <h1 class="h1 supercell-font">ClashAlytics</h1>
        <h2 class="h2">
          {{ $t('landingPage.hero1') }}<br>
          {{ $t('landingPage.hero2') }}<br>
          {{ $t('landingPage.hero3') }}
        </h2>
      </div>

      <ButtonsCtaButtonShimmer class="button-cta soft-border-accent">
        {{ $t('landingPage.discoverTools') }}
      </ButtonsCtaButtonShimmer>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.hero-content {
  padding: 15rem 0;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  .h2 {
    font-weight: $regular;
  }
}

</style>