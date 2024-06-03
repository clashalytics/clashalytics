<script setup lang="ts">

const zapLevel = ref(1)
const zapLevelText = computed(() => `${zapLevel.value}`)

</script>

<template>
  <div class="spell-image-container">
    <div class="spell-image">
      <NuxtImg src="/img/spells/zap.png"/>
    </div>
    <div class="spell-level">
      <div class="range-value">
        <h6 class="h6">
          {{ zapLevelText }}
        </h6>
      </div>
    </div>
  </div>
  <div class="spell-range-container">
    <input class="slider-thick" id="selectZapLevel" type="range" min="1" max="9" v-model="zapLevel">
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

.spell-image-container {
  width: 100px;
  height: 100px;
  filter: drop-shadow(24px 24px 48px #322E53);

  .spell-image {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 16px;
    box-shadow: -12px -8px 16px 0px #3E9EB0 inset, 12px 8px 16px 0px #90E4F3 inset;
    filter: drop-shadow(24px 24px 48px #322E53);
    border: 3px solid #3E9EB0;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .spell-level {
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    position: absolute;
    left: 0;
    bottom: -7px;

    border-radius: 0 8px;
    border: 3px solid #15152D;
    background: $primary;

    .range-value {
      color: $font;
    }
  }
}

.spell-range-container {
  z-index: 10;
  .slider-thick {
    -webkit-appearance: none;
    width: 300px;
    height: 20px;
    border-radius: 16px;
    background: rgba(89, 81, 145, 0.50);
    box-shadow: -12px -8px 16px 0px #272152 inset, 12px 8px 16px 0px #7f50d3 inset;
    outline: none;
  }

  .slider-thick::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    background: $accent;
    box-shadow: -12px -8px 16px 0px #72640A inset, 12px 8px 16px 0px #C6AE0D inset;
    cursor: pointer;
  }

  .slider-thick::-moz-range-thumb {
    width: 15px;
    height: 40px;
    border-radius: 16px;
    background: $accent;
    cursor: pointer;
  }
}

</style>