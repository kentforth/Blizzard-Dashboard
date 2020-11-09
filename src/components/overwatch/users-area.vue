<template>
  <div class="users-area">
    <apexchart
      type="area"
      height="200"
      :options="usersChartOptions"
      :series="usersSeries"
      ref="usersChart"
      class="all-users-chart"
    ></apexchart>
    <h3>Change users number</h3>
    <span>Max: {{ slider }}</span>
    <vue-slider
      class="my-slider"
      v-model="slider"
      :min="5000"
      :max="50000"
      :interval="1000"
      @drag-end="setValue"
    />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import VueSocketIOExt from "vue-socket.io-extended";
import Vue from "vue";
import io from "socket.io-client";

const socket = io("http://localhost:11050/overwatch");
Vue.use(VueSocketIOExt, socket);

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "users-area",
  components: {
    VueSlider,
    apexchart: VueApexCharts,
  },
  data: () => ({
    slider: "5000",
    socket: null,
    connection: null,
    sockets: {
      connect() {
        console.log("socket connected");
      },
    },
    usersSeries: [
      {
        name: "Users",
        data: [],
      },
    ],
    usersChartOptions: {
      chart: {
        type: "area",
        foreColor: "#FFEDFF",
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      colors: ["#DAA011"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        tickAmount: 9,
        labels: {
          format: "HH:mm:ss",
          datetimeUTC: false,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          format: "HH:mm:ss",
        },
      },
    },
  }),
  created() {
    this.$socket.$subscribe("newNumber", (user) => {
      this.addUser(user);
    });
  },

  methods: {
    addUser(user) {
      if (this.usersSeries[0].data.length >= 20) {
        this.usersSeries[0].data.shift();
      } else {
        this.usersSeries[0].data.push(user);
      }

      this.usersSeries = [
        {
          data: this.usersSeries[0].data,
        },
      ];
    },
    setValue() {
      this.$socket.client.emit("changeUsersNumber", this.slider);
    },
  },
};
</script>

<style lang="scss">
h3 {
  margin: 0 0 10px 0;
}

.vue-slider-process,
.vue-slider-dot-handle {
  background-color: $overwatch-accent !important;
}

.vue-slider-dot-handle {
  border: 2px solid $overwatch-accent !important;
}
</style>
