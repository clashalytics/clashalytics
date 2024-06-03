<script setup lang="ts">

</script>

<template>
  <div class="container zapquake">
    <ZapquakeSpellSelection />
    <ZapquakeItemGrid />
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

.zapquake {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 32px;
  margin-bottom: 64px;
}

</style>