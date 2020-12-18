<template>
  <apexchart
    type="bar"
    height="430"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "wow-players-rating",
  data: () => ({
    series: [
      {
        name: "Rating",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31],
      },
    ],
    chartOptions: {
      chart: {
        height: 400,
        type: "bar",
        foreColor: "#f4e2e2",
      },
      colors: ["#024A4A"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      tooltip: {
        theme: "dark",
      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Smxn",
          "Drizzy",
          "Gekz",
          "Cluti",
          "Bluegator",
          "Cream",
          "Mooncucumber",
          "Pals",
          "Olimpics",
          "Stabw",
        ],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Servings",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [90],
        },
      },
    },
  }),
  created() {
    this.$socket.client.on("wowTopPlayersRating", (data) => {
      this.series[0].data = data;
      this.series = [
        {
          data: this.series[0].data,
        },
      ];
    });
  },
  beforeDestroy() {
    this.$socket.client.off("wowTopPlayersRating");
  },
};
</script>

<style scoped></style>
