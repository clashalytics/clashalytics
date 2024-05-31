<script setup lang="ts">

const earthquakeLevel = ref(1)
const earthquakeLevelText = computed(() => `${earthquakeLevel.value}`)

</script>

<template>
  <div class="spell-image-container">
    <div class="spell-image">
      <NuxtImg src="/img/spells/earthquake.png"/>
    </div>
    <div class="spell-level">
      <span class="range-value"> {{ earthquakeLevelText }} </span>
    </div>
  </div>
  <div class="spell-range-container">
    <input type="range" min="1" max="5" v-model="earthquakeLevel">
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

</style>