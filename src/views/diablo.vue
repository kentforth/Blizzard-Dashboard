<template>
  <div class="diablo">
    <div class="top-content">
      <!--TOp COUNTRIES-->
      <div class="top-chart-items">
        <div class="top-chart-items__header">
          <h2>Top Countries Playing Diablo 3</h2>
          <img src="../assets/images/icons/flag.svg" alt="" class="svg-icon" />
        </div>
        <div class="countries-chart">
          <top-countries />
        </div>
      </div>

      <!--TOP DAMAGE CHARACTERS-->
      <div class="top-chart-items">
        <div class="top-chart-items__header">
          <h2>Top Damage Players</h2>
          <img
            src="../assets/images/overwatch/damage.svg"
            alt=""
            class="svg-icon"
          />
        </div>
        <div class="countries-chart">
          <top-damage />
        </div>
      </div>
    </div>

    <!--CHARACTER STATS-->
    <div class="character-stats">
      <div class="top-chart-items__header">
        <h2>Character Stats</h2>
        <img src="../assets/images/icons/stats.svg" alt="" class="svg-icon" />
      </div>
      <div class="character">
        <!--BARBARIAN-->
        <character
          @click="generateCharacterChart('barbarian')"
          :strength="barbarianStats[0]"
          :dexterity="barbarianStats[1]"
          :intelligence="barbarianStats[2]"
          :vitality="barbarianStats[3]"
          ref="barbarian"
        >
          <template v-slot:characterName>
            <h3>Barbarian</h3>
          </template>
          <template v-slot:image>
            <img src="../assets/images/diablo/barbarian.png" alt="barbarian" />
          </template>

          <template v-slot:diablo-attributes-chart>
            <diablo-attributes-chart
              :series="barbarianSeries"
              :options="barbarianOptions"
            />
          </template>
        </character>

        <hr class="line" />

        <!--DEMON HUNTER-->
        <character
          @click="generateCharacterChart('demonHunter')"
          :strength="demonHunterStats[0]"
          :dexterity="demonHunterStats[1]"
          :intelligence="demonHunterStats[2]"
          :vitality="demonHunterStats[3]"
          ref="demonHunter"
        >
          <template v-slot:characterName>
            <h3>Demon Hunter</h3>
          </template>
          <template v-slot:image>
            <img
              src="../assets/images/diablo/demon-hunter.png"
              alt="demon-hunter"
            />
          </template>

          <template v-slot:diablo-attributes-chart>
            <diablo-attributes-chart
              :series="demonHunterSeries"
              :options="demonHunterOptions"
            />
          </template>
        </character>

        <hr class="line" />

        <!--WITCH DOCTOR-->
        <character
          @click="generateCharacterChart('witchDoctor')"
          :strength="witchDoctorStats[0]"
          :dexterity="witchDoctorStats[1]"
          :intelligence="witchDoctorStats[2]"
          :vitality="witchDoctorStats[3]"
          ref="witchDoctor"
        >
          <template v-slot:characterName>
            <h3>Witch Doctor</h3>
          </template>
          <template v-slot:image>
            <img
              src="../assets/images/diablo/witch-doctor.png"
              alt="witch-doctor"
            />
          </template>

          <template v-slot:diablo-attributes-chart>
            <diablo-attributes-chart
              :series="witchDoctorSeries"
              :options="witchDoctorOptions"
            />
          </template>
        </character>

        <hr class="line" />

        <!--MONK-->
        <character
          @click="generateCharacterChart('monk')"
          :strength="monkStats[0]"
          :dexterity="monkStats[1]"
          :intelligence="monkStats[2]"
          :vitality="monkStats[3]"
          ref="monk"
        >
          <template v-slot:characterName>
            <h3>Monk</h3>
          </template>
          <template v-slot:image>
            <img src="../assets/images/diablo/monk.png" alt="monk" />
          </template>

          <template v-slot:diablo-attributes-chart>
            <diablo-attributes-chart
              :series="monkSeries"
              :options="monkOptions"
            />
          </template>
        </character>

        <hr class="line" />

        <!--WIZARD-->
        <character
          @click="generateCharacterChart('wizard')"
          :strength="wizardStats[0]"
          :dexterity="wizardStats[1]"
          :intelligence="wizardStats[2]"
          :vitality="wizardStats[3]"
          ref="wizard"
        >
          <template v-slot:characterName>
            <h3>Wizard</h3>
          </template>
          <template v-slot:image>
            <img src="../assets/images/diablo/wizard.png" alt="wizard" />
          </template>

          <template v-slot:diablo-attributes-chart>
            <diablo-attributes-chart
              :series="wizardSeries"
              :options="wizardOptions"
            />
          </template>
        </character>
      </div>
    </div>
  </div>
</template>

<script>
import TopCountries from "../components/diablo/top-countries";
import TopDamage from "../components/diablo/top-damage";
import Character from "../components/diablo/character";
import DiabloAttributesChart from "../components/diablo/diablo-attributes-chart";

let stats = [];
let character = {};

export default {
  name: "diablo",
  components: { DiabloAttributesChart, Character, TopDamage, TopCountries },
  data: () => ({
    barbarianStats: [87, 43, 21, 68],
    demonHunterStats: [68, 103, 36, 72],
    witchDoctorStats: [43, 52, 95, 72],
    monkStats: [62, 74, 93, 61],
    wizardStats: [72, 63, 104, 57],
    barbarianSeries: [],
    barbarianOptions: {
      chart: {
        type: "radialBar",
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "36%",
            background: "transparent",
            image: undefined,
          },
        },
      },
      colors: ["#D90208", "#66D923", "#2395D9", "#D98718"],
      labels: ["Strength", "Dexterity", "Intelligence", "Vitality"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: -40,
        offsetY: -30,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
              maxHeight: "600px",
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    demonHunterSeries: [],
    demonHunterOptions: {
      chart: {
        type: "radialBar",
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "36%",
            background: "transparent",
            image: undefined,
          },
        },
      },
      colors: ["#D90208", "#66D923", "#2395D9", "#D98718"],
      labels: ["Strength", "Dexterity", "Intelligence", "Vitality"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: -40,
        offsetY: -30,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    witchDoctorSeries: [],
    witchDoctorOptions: {
      chart: {
        type: "radialBar",
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "36%",
            background: "transparent",
            image: undefined,
          },
        },
      },
      colors: ["#D90208", "#66D923", "#2395D9", "#D98718"],
      labels: ["Strength", "Dexterity", "Intelligence", "Vitality"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: -40,
        offsetY: -30,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    monkSeries: [],
    monkOptions: {
      chart: {
        type: "radialBar",
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "36%",
            background: "transparent",
            image: undefined,
          },
        },
      },
      colors: ["#D90208", "#66D923", "#2395D9", "#D98718"],
      labels: ["Strength", "Dexterity", "Intelligence", "Vitality"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: -40,
        offsetY: -30,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    wizardSeries: [],
    wizardOptions: {
      chart: {
        type: "radialBar",
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "36%",
            background: "transparent",
            image: undefined,
          },
        },
      },
      colors: ["#D90208", "#66D923", "#2395D9", "#D98718"],
      labels: ["Strength", "Dexterity", "Intelligence", "Vitality"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: -40,
        offsetY: -30,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  }),
  created() {
    this.barbarianSeries = this.calculatePercentage(this.barbarianStats);
    this.demonHunterSeries = this.calculatePercentage(this.demonHunterStats);
    this.witchDoctorSeries = this.calculatePercentage(this.witchDoctorStats);
    this.monkSeries = this.calculatePercentage(this.monkStats);
    this.wizardSeries = this.calculatePercentage(this.wizardStats);
    this.$socket.client.on("diabloCharacterStats", (data) => {
      switch (data.characterClass) {
        case "barbarian":
          this.barbarianSeries = this.calculatePercentage(data.stats);
          break;
        case "demonHunter":
          this.demonHunterSeries = this.calculatePercentage(data.stats);
          break;
        case "witchDoctor":
          this.witchDoctorSeries = this.calculatePercentage(data.stats);
          break;
        case "monk":
          this.monkSeries = this.calculatePercentage(data.stats);
          break;
        case "wizard":
          this.wizardSeries = this.calculatePercentage(data.stats);
          break;
        default:
          this.barbarianSeries = this.calculatePercentage(data.stats);
          break;
      }
    });
  },
  beforeDestroy() {
    this.$socket.client.off("diabloCharacterStats");
  },
  computed: {},
  methods: {
    calculatePercentage(array) {
      let newArray = [];
      let sum = array.reduce((a, b) => a + b, 0);
      let percent = null;
      array.forEach((element) => {
        percent = (element * 100) / sum;
        newArray.push(percent.toFixed(1));
      });

      return newArray.map(Number);
    },
    generateCharacterChart(characterClass) {
      stats = this.$refs[characterClass].setCharacterStats();
      character = {
        characterClass: `${characterClass}`,
        stats: stats,
      };
      this.$socket.client.emit("changeCharacterChart", character);
    },
  },
};
</script>

<style scoped lang="scss">
.diablo {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("../assets/images/diablo-background.jpg") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 3% 2% 2% $nav-width + 2.2%;

  @include responsive(phone) {
    padding: 3%;
    margin-top: 20%;
  }
}

.top-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;

  @include responsive(tab-port) {
    grid-template-columns: 1fr;
  }

  @include responsive(phone) {
    grid-gap: 1em;
  }
}

.top-chart-items,
.character-stats {
  background: rgba(201, 98, 16, 0.3);
  border-radius: 5px;
  padding: 1%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  @include responsive(phone) {
    padding: 10px;
  }
}

.svg-icon {
  width: 3%;
}

.countries-chart {
  width: 100%;
  display: flex;
  justify-content: center;
}

.character-stats {
  margin-top: 1.5em;
}

.character-stats .svg-icon {
  width: 1.7%;
}

.line {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(216, 69, 13, 0),
    rgba(216, 69, 13, 0.75),
    rgba(216, 69, 13, 0)
  );
}
</style>
