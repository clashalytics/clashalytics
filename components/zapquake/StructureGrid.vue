<script setup lang="ts">

import Structure from "~/components/zapquake/Structure.vue";
</script>

<template>
  <div class="structureGrid">
    <h3 class="h3">Structure grid</h3>
    <ZapquakeStructure />
    <ZapquakeStructure />
    <ZapquakeStructure />
    <ZapquakeStructure />
    <ZapquakeStructure />
    <ZapquakeStructure />
  </div>
</template>

<style scoped lang="scss">
  .structureGrid{
    border: red 1px solid;
  }
</style>