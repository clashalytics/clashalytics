<script setup lang="ts">

</script>

<template>
  <div class="zapquake-item">
    <div class="zapquake-item-title">
      img
      <div class="zapquake-item-title-text">
        <h5 class="h5">Structure name</h5>
        <div class="zapquake-item-title-details">
          <h6 class="h6">Level: [value]</h6>
          <div class="zapquake-item-title-hp">
            <nuxt-icon filled name="utility/heart" class="zapquake-item-title-heart"></nuxt-icon>
            <h6 class="h6">[HP value]</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="zapquake-item-input">
      <input type="range" min="1" max="10">
    </div>

    <div class="zapquake-item-combos-container">
      <div class="zapquake-item-combo">
        <div class="zapquake-item-combo-spells">

          <div class="zapquake-item-spells-zap">
            <h5 class="h5 supercell-font-ns">x3</h5>
            <div class="zapquake-item-spells-zap-image-container">
              <NuxtImg src="/img/spells/zap.png"/>
              <div class="zapquake-item-spells-zap-level">
                <h6 class="h6">9</h6>
              </div>
            </div>
          </div>

          <div class="zapquake-item-spells-earthquake">
            <h5 class="h5 supercell-font-ns">x3</h5>
            <div class="zapquake-item-spells-earthquake-image-container">
              <NuxtImg src="/img/spells/earthquake.png"/>
              <div class="zapquake-item-spells-zap-level">
                <h6 class="h6">9</h6>
              </div>
            </div>
          </div>

        </div>

        <div class="zapquake-item-combo-space">
          <nuxt-icon filled name="utility/flask" class="zapquake-item-spell-icon"></nuxt-icon>
        </div>
      </div>
    </div>

    <div class="zapquake-item-more">
      show more
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

.zapquake-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 32px;
  flex: 1 0 0;

  .zapquake-item-title {
    display: flex;
    align-items: center;
    gap: 16px;

    .zapquake-item-title-image {
      width: 64px;
      height: 64px;
    }

    .zapquake-item-title-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;

      .h5 {
        font-weight: $bold;
      }
    }

    .zapquake-item-title-details {
      display: flex;
      align-items: center;
      gap: 16px;

      .h6 {
        font-weight: $regular;
      }
    }

    .zapquake-item-title-hp {
      display: flex;
      align-items: center;
      gap: 4px;

      .zapquake-item-title-heart {
        fill: $accent;
        width: 24px;
      }

      .h6 {
        font-weight: $regular;
      }
    }
  }

  .zapquake-item-input {

  }
}


</style>