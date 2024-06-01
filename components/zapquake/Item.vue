<!--suppress CssUnknownTarget -->
<script setup lang="ts">

interface Building {
  nameKey: string
  maxLevel: number
  levelImages: string[]
  levelHps: number[]
}

const buildings: Building[] = [
  {
    nameKey: 'buildings.airDefense',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
      '/img/buildings/defense/air_defense/2.png',
      '/img/buildings/defense/air_defense/3.png',
      '/img/buildings/defense/air_defense/4.png',
      '/img/buildings/defense/air_defense/5.png',
      '/img/buildings/defense/air_defense/6.png',
      '/img/buildings/defense/air_defense/7.png',
      '/img/buildings/defense/air_defense/8.png',
      '/img/buildings/defense/air_defense/9.png',
      '/img/buildings/defense/air_defense/10.png',
      '/img/buildings/defense/air_defense/11.png',
      '/img/buildings/defense/air_defense/12.png',
      '/img/buildings/defense/air_defense/13.png',
      '/img/buildings/defense/air_defense/14.png'
    ],
    levelHps: [800, 850, 900, 950, 1000, 1050, 1100, 1210, 1300, 1400, 1500, 1650, 1750, 1850]
  },

  {
    nameKey: 'buildings.airSweeper',
    maxLevel: 7,
    levelImages: [
      '/img/buildings/defense/air_sweeper/1.png',
      '/img/buildings/defense/air_sweeper/2.png',
      '/img/buildings/defense/air_sweeper/3.png',
      '/img/buildings/defense/air_sweeper/4.png',
      '/img/buildings/defense/air_sweeper/5.png',
      '/img/buildings/defense/air_sweeper/6.png',
      '/img/buildings/defense/air_sweeper/7.png'
    ],
    levelHps: [750, 800, 850, 900, 950, 1000, 1050]
  },

  {
    nameKey: 'buildings.archerQueen',
    maxLevel: 95,
    levelImages: [
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png',
      '/img/heroes/archer_queen.png'
    ],
    levelHps: [
      580, 592, 604, 617, 630, 643, 657, 670, 685, 699,
      714, 729, 744, 759, 775, 792, 808, 826, 842, 861,
      878, 897, 916, 935, 954, 974, 995, 1016, 1038, 1059,
      1082, 1104, 1128, 1151, 1175, 1200, 1226, 1251, 1278, 1304,
      1331, 1359, 1388, 1417, 1447, 1478, 1508, 1540, 1572, 1606,
      1646, 1688, 1730, 1774, 1819, 1865, 1912, 1960, 2010, 2060,
      2111, 2164, 2218, 2274, 2330, 2384, 2432, 2476, 2516, 2552,
      2584, 2616, 2648, 2680, 2712, 2740, 2768, 2796, 2824, 2852,
      2880, 2904, 2928, 2952, 2976, 3000, 3024, 3048, 3072, 3096,
      3120, 3144, 3168, 3192, 3216]
  },

  {
    nameKey: 'buildings.archerTower',
    maxLevel: 21,
    levelImages: [
      '/img/buildings/defense/archer_tower/1.png',
      '/img/buildings/defense/archer_tower/2.png',
      '/img/buildings/defense/archer_tower/3.png',
      '/img/buildings/defense/archer_tower/4.png',
      '/img/buildings/defense/archer_tower/5.png',
      '/img/buildings/defense/archer_tower/6.png',
      '/img/buildings/defense/archer_tower/7.png',
      '/img/buildings/defense/archer_tower/8.png',
      '/img/buildings/defense/archer_tower/9.png',
      '/img/buildings/defense/archer_tower/10.png',
      '/img/buildings/defense/archer_tower/11.png',
      '/img/buildings/defense/archer_tower/12.png',
      '/img/buildings/defense/archer_tower/13.png',
      '/img/buildings/defense/archer_tower/14.png',
      '/img/buildings/defense/archer_tower/15.png',
      '/img/buildings/defense/archer_tower/16.png',
      '/img/buildings/defense/archer_tower/17.png',
      '/img/buildings/defense/archer_tower/18.png',
      '/img/buildings/defense/archer_tower/19.png',
      '/img/buildings/defense/archer_tower/20.png',
      '/img/buildings/defense/archer_tower/21.png'
    ],
    levelHps: [
      380, 420, 460, 500, 540, 580, 630, 690, 750, 810,
      890, 970, 1050, 1130, 1230, 1310, 1390, 1510, 1600, 1700,
      1800]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

  {
    nameKey: 'Cannon',
    maxLevel: 14,
    levelImages: [
      '/img/buildings/defense/air_defense/1.png',
    ],
    levelHps: [800, 850]
  },

]

const buildingLevels = ref(buildings.map(() => 1))

const getBuildingImage = (buildingIndex: number, level: number) => {
  const building = buildings[buildingIndex]
  const imageIndex = level - 1
  return building.levelImages[imageIndex] || ''
}

const getBuildingHp = (buildingIndex: number, level: number) => {
  const building = buildings[buildingIndex]
  const hpIndex = level - 1
  return building.levelHps[hpIndex] || 0
}
</script>

<template>
  <div v-for="(building, index) in buildings" :key="index" class="zapquake-item">

    <div class="zapquake-item-title">
      <img :src="getBuildingImage(index, buildingLevels[index])" alt="">
      <div class="zapquake-item-title-text">
        <h5 class="h5">{{ $t(building.nameKey) }}</h5>
        <div class="zapquake-item-title-details">
          <h6 class="h6">Level {{ buildingLevels[index] }}</h6>
          <div class="zapquake-item-title-hp">
            <nuxt-icon filled name="utility/heart" class="zapquake-item-title-heart"></nuxt-icon>
            <h6 class="h6">{{ getBuildingHp(index, buildingLevels[index]) }}</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="zapquake-item-input">
      <input type="range" :min="1" :max="building.maxLevel" v-model="buildingLevels[index]">

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