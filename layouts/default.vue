<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";


</script>

<template>
  <div class="d-unset">
    <Navbar/>
  </div>
  <div>
    <div class="god-rays"></div>
    <slot/>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

.d-unset {
  display: unset;
}

</style>
