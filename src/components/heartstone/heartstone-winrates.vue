<template>
  <div class="heartstone-winrates">
    <div
      class="winrate-item"
      v-for="(winrate, winrateIndex) in winRates"
      :key="winrateIndex"
      v-bind:style="{ 'background-image': 'url(' + winrate.image + ')' }"
    >
      <h3>{{ winrate.place }}</h3>
      <h4>{{ winrate.title }}</h4>
      <div class="percentage">
        <p
          :class="{
            red: winrate.percent < 42,
            orange: winrate.percent > 42 && winrate.percent < 46,
            yellow: winrate.percent > 44 && winrate.percent < 50,
            green: winrate.percent > 50,
          }"
        >
          {{ winrate.percent }}
        </p>
        <span
          :class="{
            red: winrate.percent < 42,
            orange: winrate.percent > 42 && winrate.percent < 46,
            yellow: winrate.percent > 44 && winrate.percent < 50,
            green: winrate.percent > 50,
          }"
          >%</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heartstone-winrates",
  data: () => ({
    winRates: [
      {
        title: "Demon Hunter",
        place: "#1",
        percent: 54.3,
        image: require("../../assets/images/heartstone/winrates/demon-hunter.webp"),
      },
      {
        title: "Hunter",
        place: "#2",
        percent: 53.5,
        image: require("../../assets/images/heartstone/winrates/hunter.webp"),
      },
      {
        title: "Paladin",
        place: "#3",
        percent: 52.1,
        image: require("../../assets/images/heartstone/winrates/paladin.webp"),
      },
      {
        title: "Shaman",
        place: "#4",
        percent: 51.0,
        image: require("../../assets/images/heartstone/winrates/shaman.webp"),
      },
      {
        title: "Rogue",
        place: "#5",
        percent: 50.4,
        image: require("../../assets/images/heartstone/winrates/rogue.webp"),
      },
      {
        title: "Warrior",
        place: "#6",
        percent: 48.9,
        image: require("../../assets/images/heartstone/winrates/warrior.webp"),
      },
      {
        title: "Mage",
        place: "#7",
        percent: 45.1,
        image: require("../../assets/images/heartstone/winrates/mage.webp"),
      },
      {
        title: "Warlock",
        place: "#8",
        percent: 44.9,
        image: require("../../assets/images/heartstone/winrates/warlock.webp"),
      },
      {
        title: "Priest",
        place: "#9",
        percent: 41.0,
        image: require("../../assets/images/heartstone/winrates/priest.webp"),
      },
      {
        title: "Druid",
        place: "#10",
        percent: 43.3,
        image: require("../../assets/images/heartstone/winrates/druid.webp"),
      },
    ],
  }),
  created() {
    this.$socket.client.on("heartstoneWinRates", (winrates) => {
      this.winRates[0].percent = winrates[0];
      this.winRates[1].percent = winrates[1];
      this.winRates[2].percent = winrates[2];
      this.winRates[3].percent = winrates[3];
      this.winRates[4].percent = winrates[4];
      this.winRates[5].percent = winrates[5];
      this.winRates[6].percent = winrates[6];
      this.winRates[7].percent = winrates[7];
      this.winRates[8].percent = winrates[8];
      this.winRates[9].percent = winrates[9];
    });
  },
  beforeDestroy() {
    this.$socket.client.off("heartstoneWinRates");
  },
};
</script>

<style scoped lang="scss">
.winrate-item {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  align-items: center;
  max-width: 500px;

  h3 {
    font-weight: 800;
    font-size: $font-size * 2;
    margin: 0;
    padding: 0.2em 0 0 0;
    background-color: rgba(18, 18, 18, 0.6);
    text-align: center;
    height: 100%;
    text-shadow: 3px 2px black;
  }

  h4 {
    font-weight: 800;
    font-size: $font-size * 1.7;
    color: $white;
    margin: 0.3em 3%;
    text-shadow: 2px 2px black;
  }
}

.percentage {
  background-color: rgba(18, 18, 18, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  p,
  span {
    margin: 0;
    color: $white;
    font-weight: 700;
    font-size: $font-size * 1.4;
  }
}

.red {
  color: red !important;
}

.green {
  color: green !important;
}

.orange {
  color: #ff8c10 !important;
}

.yellow {
  color: #ffc600 !important;
}
</style>
