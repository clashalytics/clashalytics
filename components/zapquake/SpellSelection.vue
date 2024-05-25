<script setup lang="ts">

</script>

<template>
  <div class="spell-selection-container">
    <div class="spell-selection">
      <div class="spell-selection-item">

        <div class="spell-image-container">
          <div class="spell-image">
            <NuxtImg id="zap-image" src="/img/spells/zap.png"/>
          </div>
          <div class="spell-level">
            1
          </div>
        </div>
        <div class="spell-range-container">

        </div>

        <div class="spell-image-container">
          <div class="spell-image">
            <NuxtImg id="earthquake-image" src="/img/spells/earthquake.png"/>
          </div>
          <div class="spell-level">
            1
          </div>
        </div>
        <div class="spell-range-container">
          <input type="range" v-model="" id="input-zap-level" name="zap level" min="1" max="9" />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>