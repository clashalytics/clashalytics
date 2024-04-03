<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div>
    <slot />
  </div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
  h1{
    color: blue;
  }
</style>
