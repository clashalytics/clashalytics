<script lang="ts">
import {defineComponent} from 'vue'
const localePath = useLocalePath();

export default defineComponent({
  methods: {localePath},
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="container-xxl">
    <h1 class="h1">Testpage Heading</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_scss-dependencies.scss";

</style>