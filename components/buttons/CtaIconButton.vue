<script setup lang="ts">

</script>

<template>
  <button>
    <div>
      <slot name="icon"/>
      <slot name="text"/>
    </div>
  </button>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";
button{
    background-color: $primary;
  }
</style>