<script setup lang="ts">
const {locale, setLocale} = useI18n();
const localePath = useLocalePath();
/*import syntax für icons*/
import MenuIcon from "vue-material-design-icons/Menu.vue"
import Rocket from "vue-material-design-icons/Rocket.vue"
</script>

<template>
  <div class="features-container">
    <LandingpageCardLeft>
      <template #heading>
        <h1 class="h1">
          ZapQuake Calculator
        </h1>
      </template>
      <template #text>
        <h2 class="h2">{{ $t('landingPage.feature1h2') }}</h2>
      </template>
      <template #button>
        <ButtonsCtaButton>
          Try now
        </ButtonsCtaButton>
      </template>
    </LandingpageCardLeft>

    <LandingpageCardRight>
      <template #heading>
        <h1 class="h1">
          Base Tracker
        </h1>
      </template>
      <template #text>
        <h2 class="h2">Our Upgrade Calculator to work out exactly how many resources you need to max out your Town Hall</h2>
      </template>
      <template #button>
        <ButtonsCtaButton>
          Try now
        </ButtonsCtaButton>
      </template>
    </LandingpageCardRight>

    <LandingpageCardLeft>
      <template #heading>
        <h1 class="h1">
          Player Search
        </h1>
      </template>
      <template #text>
        <h2 class="h2">Player search made easy</h2>
      </template>
      <template #button>
        <ButtonsCtaButton class="inactive-button-cta">
          In development
        </ButtonsCtaButton>
      </template>
    </LandingpageCardLeft>

    <LandingpageCardRight>
      <template #heading>
        <h1 class="h1">
          Clan Search
        </h1>
      </template>
      <template #text>
        <h2 class="h2">Get detailed clan insights in an appealing user interface</h2>
      </template>
      <template #button>
        <ButtonsCtaButton class="inactive-button-cta">
          In development
        </ButtonsCtaButton>
      </template>
    </LandingpageCardRight>

    <LandingpageCardLeft>
      <template #heading>
        <h1 class="h1">
          Gold Pass Rewards Recap
        </h1>
      </template>
      <template #text>
        <h2 class="h2">Get a quick recap of this season´s gold pass rewards</h2>
      </template>
      <template #button>
        <ButtonsCtaButton class="inactive-button-cta">
          In development
        </ButtonsCtaButton>
      </template>
    </LandingpageCardLeft>

    <LandingpageCardRight>
      <template #heading>
        <h1 class="h1">
          Event Countdown
        </h1>
      </template>
      <template #text>
        <h2 class="h2">When is the next event, where I can grind another broken ass equipment for my heroes, whose own
          level is now irrelevant</h2>
      </template>
      <template #button>
        <ButtonsCtaButton class="inactive-button-cta">
          In development
        </ButtonsCtaButton>
      </template>
    </LandingpageCardRight>
  </div>

</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

.features-container {
  margin-top: 320px;
  display: flex;
  flex-direction: column;
  gap: 300px;
}

.features-container:nth-child(2n){
  align-self: flex-end;
}

</style>