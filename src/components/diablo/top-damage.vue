<template>
  <apexchart
    type="bar"
    height="250"
    class="chart"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "top-damage",
  data: () => ({
    series: [
      {
        name: "Damage",
        data: [
          5.768,
          4.238,
          7.324,
          2.372,
          4.538,
          4.56,
          5.328,
          6.214,
          4.516,
          7.201,
          4.885,
          3.459,
        ],
      },
    ],
    chartOptions: {
      chart: {
        width: 700,
        type: "bar",
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        borderColor: "#63FCC4",
      },
      grid: {
        row: {
          colors: ["#949494", "#717171"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Holyspawn",
          "Devo",
          "Keiler",
          "ArchMennon",
          "MelianZord",
          "BryanAngel",
          "Jinx",
          "RXT",
          "Kylabra",
          "FarAway",
          "DeliCooper",
          "Mole",
        ],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Damage",
        },
      },
      fill: {
        colors: ["#FCFA1E"],
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#BD3619"],
          inverseColors: false,
          opacityFrom: 0.85,
          opacityTo: 0.8,
          stops: [50, 100],
        },
      },
      tooltip: {
        theme: "dark",
      },
    },
  }),
  created() {
    this.$socket.client.on("topDamagePlayersDiablo", (data) => {
      this.series[0].data = data;
      this.series = [
        {
          data: this.series[0].data,
        },
      ];
    });
  },
  beforeDestroy() {
    this.$socket.client.off("topDamagePlayersDiablo");
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>
