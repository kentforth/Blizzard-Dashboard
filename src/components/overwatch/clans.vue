<template>
  <div class="clans">
    <apexchart
      type="bar"
      height="300"
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
  name: "clans",
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
        name: "Population",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        foreColor: "#FFEDFF",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#FFEDFF",
              colorTo: "#FFEDFF",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          theme: "dark",
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
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#FFEDFF",
        },
      },
      tooltip: {
        theme: "dark",
      },
    },
  }),
};
</script>

<style scoped></style>
