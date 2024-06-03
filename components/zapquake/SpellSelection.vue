<script setup lang="ts">

</script>

<template>
  <div class="spell-selection-wrapper">
    <div class="spell-selection-container">
      <div class="spell-selection">
        <div class="spell-selection-item">
          <ZapquakeZap/>
        </div>
        <div class="spell-selection-item">
          <ZapquakeEarthquake/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

.spell-selection-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
}

.spell-selection-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 32px;

  border-radius: 16px;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0.20) 0.73%, rgba(246, 246, 246, 0.02) 100%);
  box-shadow: -12px -8px 16px 0px rgba(60, 60, 60, 0.25) inset, 12px 8px 16px 0px rgba(218, 218, 218, 0.25) inset;
  backdrop-filter: blur(8px);
  .spell-selection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;
    .spell-selection-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 28px;
    }
  }
}

</style>