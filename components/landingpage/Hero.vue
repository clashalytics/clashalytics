<script setup lang="ts">

</script>

<template>
  <div class="container-fluid">
    <div class="hero-content container-md">
      <div class="hero-title">
        <h1 class="h1 supercell-font">ClashAlytics</h1>
        <h2 class="h2">
          Your reliable tool for<br>
          keeping track of your<br>
          upgrade progress
        </h2>
      </div>

      <ButtonsCtaButtonShimmer class="button-cta soft-border-accent">
        Discover our tools
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