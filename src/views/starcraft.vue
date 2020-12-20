<template>
  <div class="starcraft">
    <div class="container">
      <!--TOP CHART-->
      <slide-down-animation>
        <users />
      </slide-down-animation>

      <!--Calculate-->
      <slide-up-animation>
        <div class="calculate">
          <div class="calculate__text">
            <text-centered :text="armyUnitsText" :image="cardFrontImage" />
          </div>

          <!--CARDS-->
          <div class="calculate__images">
            <card
              :unit-icon1="unitIcons[0]"
              :unit-icon2="unitIcons[1]"
              :unit-icon3="unitIcons[2]"
              :unit-title1="unitTitles[0]"
              :unit-title2="unitTitles[1]"
              :unit-title3="unitTitles[2]"
            >
              <img src="../assets/images/starcraft/terran.webp" alt="terran" />
            </card>
            <card
              :unit-icon1="unitIcons[3]"
              :unit-icon2="unitIcons[4]"
              :unit-icon3="unitIcons[5]"
              :unit-title1="unitTitles[3]"
              :unit-title2="unitTitles[4]"
              :unit-title3="unitTitles[5]"
            >
              <img src="../assets/images/starcraft/zerg.webp" alt="zerg" />
            </card>
            <card
              :unit-icon1="unitIcons[6]"
              :unit-icon2="unitIcons[7]"
              :unit-icon3="unitIcons[8]"
              :unit-title1="unitTitles[6]"
              :unit-title2="unitTitles[7]"
              :unit-title3="unitTitles[8]"
            >
              <img src="../assets/images/starcraft/protos.webp" alt="protos" />
            </card>
          </div>

          <div class="race">
            <h2>Terran</h2>
            <h2>Zerg</h2>
            <h2>Protoss</h2>
          </div>

          <div class="race-inputs">
            <input type="number" class="input" v-model="terranNumber" />
            <input type="number" class="input" v-model="zergNumber" />
            <input type="number" class="input" v-model="protossNumber" />
          </div>

          <div class="buttons">
            <button class="btn-calc" @click="createChart">CREATE CHART</button>
          </div>

          <div class="units-pie">
            <units-pie ref="armyUnitsChart" />
          </div>

          <div class="clan-members">
            <clan-members />
          </div>
        </div>
      </slide-up-animation>
    </div>
  </div>
</template>

<script>
import Users from "../components/users";
import TextCentered from "../components/text-centered";
import Card from "../components/card";

import Vue from "vue";
import Toast, { POSITION } from "vue-toastification";

import "vue-toastification/dist/index.css";
import UnitsPie from "../components/starcraft/units-pie";

Vue.use(Toast);

import ClanMembers from "../components/starcraft/clan-members";
import SlideDownAnimation from "../components/animations/slide-down-animation";
import SlideUpAnimation from "../components/animations/slide-up-animation";

export default {
  name: "starcraft",
  components: {
    SlideUpAnimation,
    SlideDownAnimation,
    ClanMembers,
    UnitsPie,
    Card,
    TextCentered,
    Users,
  },
  data: () => ({
    terranNumber: "",
    zergNumber: "",
    protossNumber: "",
    armyUnitsText: "Enter Army Units Number:",
    cardFrontImage: require("../assets/images/icons/starcraft-units.svg"),
    unitIcons: [
      require("../assets/images/starcraft/terran/hellion.webp"),
      require("../assets/images/starcraft/terran/battlecruiser.webp"),
      require("../assets/images/starcraft/terran/raven.webp"),
      require("../assets/images/starcraft/zerg/zergling.webp"),
      require("../assets/images/starcraft/zerg/mutalisk.webp"),
      require("../assets/images/starcraft/zerg/ultralisk.webp"),
      require("../assets/images/starcraft/protoss/zealot.webp"),
      require("../assets/images/starcraft/protoss/high templar.webp"),
      require("../assets/images/starcraft/protoss/carrier.webp"),
    ],
    unitTitles: [
      "Hellion",
      "Battlecruiser",
      "Raven",
      "Zergling",
      "Mutalisk",
      "Ultralisk",
      "Zealot",
      "High Templar",
      "Carrier",
    ],
  }),
  methods: {
    createChart() {
      if (
        this.terranNumber === "" ||
        this.zergNumber === "" ||
        this.protossNumber === ""
      ) {
        this.$toast.error("Number in all fields should be more than 0", {
          timeout: 4000,
          position: POSITION.BOTTOM_CENTER,
        });
      } else {
        let armyUnits = [
          this.terranNumber,
          this.zergNumber,
          this.protossNumber,
        ];
        this.$socket.client.emit("changeArmyUnits", armyUnits);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 93%;
}

.starcraft {
  background: url("../assets/images/starcraft-background.jpg") center center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  padding: 3% 0 0 $nav-width;
  overflow: hidden;

  @include responsive(phone) {
    padding: 3% 0 0 0;
    margin-top: 20%;
  }
}

.calculate {
  padding: 2%;
  background-color: $starcraft-background-blocks;
  margin-top: 2%;
  width: 100%;
}

.calculate {
  &__images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    justify-items: center;
    margin-top: 2em;

    @include responsive(tab-port) {
      grid-template-columns: 1fr;
    }
  }
}

.race,
.race-inputs {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  @include responsive(tab-port) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: $font-size * 1.5;
    color: $starcraft-gold;
    font-family: "Modern Warfare Regular", sans-serif;
    text-transform: uppercase;
  }
}

.race-inputs {
  @include responsive(tab-port) {
    margin-top: 1em;
  }
}

.input {
  @include responsive(tab-port) {
    margin-bottom: 2em;
  }
}

.input {
  outline: none;
  font-size: $font-size * 1.5;
  padding: 5px;
  border: 2px solid $starcraft-pink;
  border-radius: 5px;
  background-color: transparent;
  color: $white;
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.buttons {
  width: 100%;
  margin: 3em auto 0 auto;
  text-align: center;

  @include responsive(tab-port) {
    margin-top: 1em;
  }
}

.btn-calc {
  font-size: $font-size * 1.5;
  color: #9cf;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 10px;
  width: 50%;
  border: 2px solid rgba(0, 77, 153, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 8px 32px rgba(0, 0, 0, 0.4);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9),
    rgba(0, 51, 102, 0.9)
  );
  transition: color 0.2s, filter 0.2s, opacity 0.2s, transform 0.2s;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
  font-family: "Modern Warfare Regular", "Open Sans", sans-serif;
}

.btn-calc:hover {
  filter: brightness(1.3);
  color: $white;
}

.btn-calc:active {
  text-shadow: none;
  border: 2px solid hsla(0, 0%, 100%, 0.4);
  transform: scale(0.98);
}

.units-pie {
  width: 50%;
  margin: 2em auto 0 auto;

  @include responsive(tab-port) {
    width: 70%;
  }

  @include responsive(phone) {
    width: 100%;
  }
}

.clan-members {
  margin-top: 2em;
}
</style>
