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
  <div>
    <p>{{ $t('selam') }}</p>

    <div>
      <NuxtLink :to="localePath('index')">{{ $t('home.title') }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>