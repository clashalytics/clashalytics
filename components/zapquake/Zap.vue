<script setup lang="ts">

const zapLevel = ref(1)
const zapLevelText = computed(() => `${zapLevel.value}`)

</script>

<template>
  <div class="spell-image-container">
    <div class="spell-image">
      <NuxtImg src="/img/spells/zap.png"/>
    </div>
    <div class="spell-level">
      <span class="range-value"> {{ zapLevelText }} </span>
    </div>
  </div>
  <div class="spell-range-container">
    <input type="range" min="1" max="9" v-model="zapLevel">
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

</style>