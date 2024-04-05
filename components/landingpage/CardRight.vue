<script setup lang="ts">

</script>

<template>
  <div class="feature-container">
    <slot name="heading"/>
    <slot name="text"/>
    <slot name="button"/>
  </div>
</template>

<style scoped>
  .feature-container{
    text-align: right;
  }
</style>