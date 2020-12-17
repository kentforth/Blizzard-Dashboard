<template>
  <apexchart
    type="polarArea"
    width="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "heartstone-top-decks",
  data: () => ({
    series: [630, 1243, 658, 1421, 870, 1562],
    chartOptions: {
      chart: {
        width: 380,
        type: "polarArea",
        foreColor: "#f4e2e2",
      },
      labels: [
        "Soul Demon Hunter",
        "Guardian Druid",
        "Highlander Hunter",
        "Broom Paladin",
        "Big Priest",
        "Secret Rogue",
      ],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#7D4F78",
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 370,
          options: {
            chart: {
              width: 270,
            },
          },
        },
      ],
    },
  }),
  created() {
    this.$socket.client.on("heartstoneTopDeckGames", (topDeckGames) => {
      this.series = topDeckGames;
    });
  },
  beforeDestroy() {
    this.$socket.client.off("heartstoneTopDeckGames");
  },
};
</script>

<style scoped></style>
