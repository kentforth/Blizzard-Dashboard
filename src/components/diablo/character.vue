<template>
  <div class="character">
    <slot name="characterName"> </slot>
    <div class="stats-items">
      <div class="image">
        <slot name="image"></slot>
      </div>
      <div class="stats">
        <div class="stats__content">
          <p>Strength:</p>
          <span>{{ stats.characterStrength }}</span>
          <div class="attribute-buttons">
            <diablo-add-button @click.native="removeAttribute('strength')"
              >-</diablo-add-button
            >
            <diablo-add-button @click.native="addAttribute('strength')"
              >+</diablo-add-button
            >
          </div>
          <p>Dexterity:</p>
          <span>{{ stats.characterDexterity }}</span>
          <div class="attribute-buttons">
            <diablo-add-button @click.native="removeAttribute('dexterity')"
              >-</diablo-add-button
            >
            <diablo-add-button @click.native="addAttribute('dexterity')"
              >+</diablo-add-button
            >
          </div>
          <p>Intelligence:</p>
          <span>{{ stats.characterIntelligence }}</span>
          <div class="attribute-buttons">
            <diablo-add-button @click.native="removeAttribute('intelligence')"
              >-</diablo-add-button
            >
            <diablo-add-button @click.native="addAttribute('intelligence')"
              >+</diablo-add-button
            >
          </div>
          <p>Vitality:</p>
          <span>{{ stats.characterVitality }}</span>
          <div class="attribute-buttons">
            <diablo-add-button @click.native="removeAttribute('vitality')"
              >-</diablo-add-button
            >
            <diablo-add-button @click.native="addAttribute('vitality')"
              >+</diablo-add-button
            >
          </div>
        </div>
      </div>

      <!--STATS-BUTTON-->
      <div class="stats-button">
        <diablo-calculate-chart-button @click="$emit('click')">
          Calculate <br />
          Attributes
        </diablo-calculate-chart-button>
      </div>

      <!--STATS-CHART-->
      <div class="chart">
        <slot name="diablo-attributes-chart"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import DiabloAddButton from "./diablo-add-button";
import DiabloCalculateChartButton from "./diablo-calculate-chart-button";

let stats = [];

export default {
  name: "character",
  components: {
    DiabloCalculateChartButton,
    DiabloAddButton,
  },
  data() {
    return {
      stats: {
        characterStrength: this.strength,
        characterDexterity: this.dexterity,
        characterIntelligence: this.intelligence,
        characterVitality: this.vitality,
      },
    };
  },
  props: {
    strength: {
      type: Number,
      default: 100,
    },
    dexterity: {
      type: Number,
      default: 100,
    },
    intelligence: {
      type: Number,
      default: 100,
    },
    vitality: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    setCharacterStats() {
      stats = [
        this.stats.characterStrength,
        this.stats.characterDexterity,
        this.stats.characterIntelligence,
        this.stats.characterVitality,
      ];
      return stats;
    },
    addAttribute(attribute) {
      switch (attribute) {
        case "strength":
          this.stats.characterStrength = this.stats.characterStrength + 5;
          break;
        case "dexterity":
          this.stats.characterDexterity = this.stats.characterDexterity + 5;
          break;
        case "intelligence":
          this.stats.characterIntelligence =
            this.stats.characterIntelligence + 5;
          break;
        case "vitality":
          this.stats.characterVitality = this.stats.characterVitality + 5;
          break;
      }
    },
    removeAttribute(attribute) {
      switch (attribute) {
        case "strength":
          if (this.stats.characterStrength <= 1) {
            this.stats.characterStrength = 1;
          } else {
            this.stats.characterStrength = this.stats.characterStrength - 5;
          }
          break;
        case "dexterity":
          if (this.stats.characterDexterity <= 1) {
            this.stats.characterDexterity = 1;
          } else {
            this.stats.characterDexterity = this.stats.characterDexterity - 5;
          }
          break;
        case "intelligence":
          if (this.stats.characterIntelligence <= 1) {
            this.stats.characterIntelligence = 1;
          } else {
            this.stats.characterIntelligence =
              this.stats.characterIntelligence - 5;
          }
          break;
        case "vitality":
          if (this.stats.characterVitality <= 1) {
            this.stats.characterVitality = 1;
          } else {
            this.stats.characterVitality = this.stats.characterVitality - 5;
          }
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  font-family: "Diablo Heavy", serif;
  text-align: center;
  color: #16618c;
  margin: 0.5em 0;
  text-shadow: 2px 1px 4px #0f0500;
  font-size: 2rem;

  @include responsive(phone) {
    font-size: 3rem;
  }
}

.stats-items {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
  justify-items: center;
  grid-gap: 5%;
  font-size: 1.3rem;
  color: $white;
  align-items: center;

  @include responsive(tab-port) {
    grid-template-columns: 1fr 1fr;
  }

  @include responsive(phone) {
    grid-template-columns: 1fr;
    grid-gap: 3%;
    margin-bottom: 6em;
  }
}

.stats {
  margin-left: 1.3em;

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
  }

  &__content span {
    margin-left: auto;
  }
}

p {
  font-family: "Arial", sans-serif;
  font-weight: 400;
  color: $diablo-secondary;

  @include responsive(phone) {
    font-size: 1.7rem;
  }
}

span {
  color: $white;
  text-shadow: 2px 2px 1px #140905;
}

.attribute-buttons {
  display: flex;
  margin-left: 1em;
}
</style>
