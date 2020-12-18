<template>
  <apexchart
    type="bar"
    height="500"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "wow-character-distribution",
  data: () => ({
    series: [
      {
        name: "EU Realms",
        data: [10, 9.5, 9.9, 9.9, 8.9, 8.2, 8.4, 7.9, 7.6, 6.7, 5.3, 5.5],
      },
      {
        name: "U.S. Realms",
        data: [11, 9.7, 9.7, 9.5, 8.8, 8.4, 8.6, 8, 7.5, 6.4, 5, 5],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        height: 500,
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      colors: ["#4BE38C", "#1E7CE3"],
      dataLabels: {
        enabled: true,
        offsetX: -10,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      tooltip: {
        theme: "dark",
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          "Hunter",
          "Paladin",
          "Druid",
          "Warrior",
          "Mage",
          "Dead Knight",
          "Priest",
          "Rogue",
          "Warlock",
          "Shaman",
          "Monk",
          "Demon Hunter",
        ],
      },
    },
  }),
  created() {
    this.$socket.client.on("wowCharacterDistribution", (charactersArray) => {
      this.series[0].data = charactersArray[0];
      this.series[1].data = charactersArray[1];
      this.series = [
        { data: this.series[0].data },
        { data: this.series[1].data },
      ];
    });
  },
  beforeDestroy() {
    this.$socket.client.off("wowCharacterDistribution");
  },
};
</script>

<style scoped></style>
