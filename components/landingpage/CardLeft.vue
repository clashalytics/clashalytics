<script setup lang="ts">

</script>

<template>
  <div class="feature-item-container col-xl-8">
    <div class="feature-item-text-container">
      <div class="feature-item-heading supercell-font">
        <slot name="heading"/>
      </div>
      <div class="feature-item-text">
        <slot name="text"/>
      </div>
    </div>
    <div class="feature-item-button">
      <slot name="button"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.feature-item-container {
  border-radius: 64px;
  border: 2px solid $secondary;
  background: $primary-gradient;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px 64px;
  gap: 64px;
  .feature-item-text-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}

.feature-item-container:after{

}
</style>