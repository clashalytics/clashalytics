<script setup lang="ts">

</script>

<template>
  <button class="button-cta soft-border-accent">
      <slot />
  </button>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";
.button-cta{
  color: $primary;
  background-color: $accent;
  padding: $h5-font-size calc($h5-font-size * 2);
  font-family: Urbanist, sans-serif;
  font-size: $h5-font-size;
  font-weight: $bold;
  border-radius: 64rem;
}

.inactive-button-cta{
  color: $font !important;
  background: rgba(89, 81, 145, 0.40) !important;
  box-shadow: unset !important;
  font-weight: $medium;
}
</style>