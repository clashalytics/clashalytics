<script setup lang="ts">
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
/*import syntax für icons*/
  import MenuIcon from "vue-material-design-icons/Menu.vue"
  import Rocket from "vue-material-design-icons/Rocket.vue"
</script>

<template>
  <hr>
  <button @click="setLocale('en')">EN</button>
  <button @click="setLocale('de')">DE</button>
  <p id="langSwitch">{{ $t('welcome') }}</p>
  <hr>

  <div>
    <LandingpageCardLeft>
      <template #heading>
        <h1 class="h1">
          ZapQuake Calculator
        </h1>
      </template>
      <template #text>
        <h2 class="h2">Never waste a spell slot again.<br>
          Always know in advance with the ZapQuake calculator</h2>
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
        <h2 class="h2">Our Upgrade Calculator to work out exactly how many resources you need to max out your TH</h2>
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
        <ButtonsCtaButton>
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
        <ButtonsCtaButton>
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
        <ButtonsCtaButton>
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
        <h2 class="h2">Oi bruv, when is the next event, where I can grind another broken ass equipment for my heroes?</h2>
      </template>
      <template #button>
        <ButtonsCtaButton>
          In development
        </ButtonsCtaButton>
      </template>
    </LandingpageCardRight>
  </div>

</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";

</style>