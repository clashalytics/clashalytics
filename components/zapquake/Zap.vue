<script setup lang="ts">

</script>

<template>
  <div class="spell-image-container">
    <div class="spell-image">
      <NuxtImg src="/img/spells/zap.png"/>
    </div>
    <div class="spell-level">
      <span class="range-value"> {{ value }} </span>
    </div>
  </div>
  <div class="spell-range-container">
    <input v-model="value" type="range" id="spellZap" min="1" max="9">
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

</style>