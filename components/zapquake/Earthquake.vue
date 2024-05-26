<script setup lang="ts">

</script>

<template>
  <div class="spell-image-container">
    <div class="spell-image">
      <NuxtImg src="/img/spells/earthquake.png"/>
    </div>
    <div class="spell-level">
      <span class="rangeValue"></span>
    </div>
  </div>
  <div class="spell-range-container">
    <input type="range" id="spellEarthquake" min="1" max="9">
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

</style>