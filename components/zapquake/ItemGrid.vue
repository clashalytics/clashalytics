<script setup lang="ts">

import Structure from "~/components/zapquake/Item.vue";
</script>

<template>
  <div class="zapquake-item-grid">
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
    <ZapquakeItem />
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

  .zapquake-item-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }
</style>