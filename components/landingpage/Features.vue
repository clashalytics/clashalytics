<script setup lang="ts">
  import MenuIcon from "vue-material-design-icons/Menu.vue"
  import Rocket from "vue-material-design-icons/Rocket.vue"
</script>

<template>

  <LandingpageCardLeft>
    <template #heading>
      <h1 class="h1">
        ZapQuake Calculator
      </h1>
    </template>
    <template #text>
      <p class="p">Never waste a spell slot again.<br>
        Always know in advance with the ZapQuake calculator</p>
    </template>
    <template #button>
      <ButtonsCtaButton>
        <template >
          Try now
        </template>
      </ButtonsCtaButton>
    </template>
    <template #icon>
      <menu-icon />
      <rocket />
    </template>
  </LandingpageCardLeft>

  <LandingpageCardRight>
    <template #heading>
      <h1 class="h1">
        Base Tracker
      </h1>
    </template>
    <template #text>
      <p class="p">Our Upgrade Calculator to work out exactly how many resources you need to max out your TH</p>
    </template>
    <template #button>
      <ButtonsCtaButton>
        <template >
          Try now
        </template>
      </ButtonsCtaButton>
    </template>
    <template #icon>
      <menu-icon />
    </template>
  </LandingpageCardRight>

  <LandingpageCardLeft>
    <template #heading>
      <h1 class="h1">
        Player Search
      </h1>
    </template>
    <template #text>
      <p class="p">Player search made easy</p>
    </template>
    <template #button>
      <ButtonsCtaButton>
        <template >
          In development
        </template>
      </ButtonsCtaButton>
    </template>
    <template #icon>
      <menu-icon />
      <rocket />
    </template>
  </LandingpageCardLeft>

  <LandingpageCardRight>
    <template #heading>
      <h1 class="h1">
        Clan Search
      </h1>
    </template>
    <template #text>
      <p class="p">Get detailed clan insights in an appealing user interface</p>
    </template>
    <template #button>
      <ButtonsCtaButton>
        <template >
          In development
        </template>
      </ButtonsCtaButton>
    </template>
    <template #icon>
      <menu-icon />
      <rocket />
    </template>
  </LandingpageCardRight>

  <LandingpageCardLeft>
    <template #heading>
      <h1 class="h1">
        Gold Pass Rewards Recap
      </h1>
    </template>
    <template #text>
      <p class="p">Get a quick recap of this season´s gold pass rewards</p>
    </template>
    <template #button>
      <button>Button</button>
    </template>
    <template #icon>
      <menu-icon />
      <rocket />
    </template>
  </LandingpageCardLeft>

  <LandingpageCardRight>
    <template #heading>
      <h1 class="h1">
        Event Countdown
      </h1>
    </template>
    <template #text>
      <p class="p">Oi bruv, when is the next event, where I can grind another broken ass equipment for my heroes?</p>
    </template>
    <template #button>
      <button>Button</button>
    </template>
    <template #icon>
      <menu-icon />
      <rocket />
    </template>
  </LandingpageCardRight>

</template>

<style scoped lang="scss">
@import "~/assets/scss/_scss-dependencies.scss";



</style>