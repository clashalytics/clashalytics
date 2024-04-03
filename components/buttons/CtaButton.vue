<script setup lang="ts">

</script>

<template>
  <button>
      <slot />
  </button>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";
button{
  background-color: $primary;
}
</style>