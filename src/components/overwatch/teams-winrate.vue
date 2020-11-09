<template>
  <div class="clans">
    <apexchart
      type="bar"
      height="270"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import VueSocketIOExt from "vue-socket.io-extended";
import Vue from "vue";
import io from "socket.io-client";

const socket = io("http://localhost:11050/overwatch");
Vue.use(VueSocketIOExt, socket);

export default {
  name: "teams-winrate",
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    socket: null,
    connection: null,
    sockets: {
      connect() {
        console.log("socket connected");
      },
    },
    series: [
      {
        name: "Teamfight Win Rates",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "bar",
        foreColor: "#FFEDFF",
      },
      plotOptions: {
        bar: {
          distributed: true,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      fill: {
        colors: [
          "#F44A03",
          "#006EC8",
          "#22477B",
          "#968630",
          "#92D000",
          "#F09829",
          "#3C0F50",
          "#00B7D3",
          "#F7CA00",
          "#EB222E",
        ],
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "14px",
        },
      },
      xaxis: {
        categories: [
          "Shock",
          "Fuel",
          "Uprising",
          "Dynasty",
          "Outlaws",
          "Fusion",
          "Gladiators",
          "Spitfire",
          "Valiant",
          "Dragons",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },

      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "dark",
      },
    },
  }),
  created() {
    this.$socket.$subscribe("teamWinRate", (data) => {
      this.series[0].data = data;
      this.series = [
        {
          data: this.series[0].data,
        },
      ];
    });
  },
};
</script>

<style scoped></style>
