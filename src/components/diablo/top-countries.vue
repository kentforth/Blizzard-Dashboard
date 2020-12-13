<template>
  <apexchart
    type="polarArea"
    :options="chartOptions"
    :series="series"
    width="400"
  ></apexchart>
</template>

<script>
export default {
  name: "top-countries",
  data: () => ({
    series: [20.71, 10.1, 8.67, 6.92, 5.91],
    chartOptions: {
      chart: {
        type: "polarArea",
        foreColor: "#f4e2e2",
      },
      dataLabels: {
        style: {
          fontSize: "22px",
        },
      },
      labels: ["United States", "Germany", "Russia", "France", "Brazil"],
      colors: ["#F85C67", "#181818", "#419AFF", "#B675F8", "#12A01B"],
      stroke: {
        colors: ["#f4e2e2"],
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      fill: {
        opacity: 0.8,
      },
      legend: {
        fontSize: "16px",
      },
      tooltip: {
        style: {
          fontSize: "16px",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  }),
  created() {
    this.$socket.client.on("topCountriesDiablo", (data) => {
      this.series = data;
    });
  },
  beforeDestroy() {
    this.$socket.client.off("topCountriesDiablo");
  },
};
</script>

<style scoped></style>
