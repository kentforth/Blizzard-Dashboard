<template>
  <apexchart
    type="pie"
    width="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "heartstone-cards-type",
  data: () => ({
    series: [44, 25, 54, 12],
    chartOptions: {
      chart: {
        width: 380,
        type: "pie",
        foreColor: "#f4e2e2",
      },
      labels: ["FREE", "COMMON", "RARE", "LEGENDARY"],
      colors: ["#6D9D47", "#818181", "#F9D304", "#FD7800"],
      fill: {
        type: "image",
        opacity: 0.85,
        image: {
          src: [
            require("../../assets/images/heartstone/green-bg.jpg"),
            require("../../assets/images/heartstone/gray-bg.jpg"),
            require("../../assets/images/heartstone/yellow-bg.jpg"),
            require("../../assets/images/heartstone/orange-bg.jpg"),
          ],
          width: 25,
          imagedHeight: 25,
        },
      },
      stroke: {
        width: 4,
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#111"],
        },
        background: {
          enabled: true,
          foreColor: "#fff",
          borderWidth: 0,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  }),
};
</script>

<style scoped></style>
