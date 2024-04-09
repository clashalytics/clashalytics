<script setup lang="ts">

</script>

<template>
  <div class="hero-content">
    <div class="hero-title">
      <h1 class="h1 supercell-font">ClashAlytics</h1>
      <h2 class="h2">
        Your reliable tool for<br>
        keeping track of your<br>
        upgrade progress
      </h2>
    </div>
    <ButtonsCtaButton class="button-cta soft-border-accent">
        Discover our tools
    </ButtonsCtaButton>
  </div>

</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.hero-content{
  margin: 15rem 0;
}

.hero-title{
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  .h2{
    font-weight: $regular;
  }
}

.button-cta{
  color: $background;
  background-color: $accent;
  padding: $h5-font-size calc($h5-font-size * 2);
  font-family: Urbanist, sans-serif;
  font-size: $h5-font-size;
  font-weight: $semi-bold;
  border-radius: 64rem;

}

</style>