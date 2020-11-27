<template>
  <div class="starcraft-users-area">
    <apexchart
      type="area"
      height="200"
      :options="usersChartOptions"
      :series="usersSeries"
      ref="usersChart"
      class="all-users-chart"
    ></apexchart>

    <!--SPINNER-->
    <spinner class="spinner" :color="spinnerColor" v-if="hasSpinner" />
  </div>
</template>

<script>
import Spinner from "../spinner";

export default {
  name: "starcraft-users-area",
  components: { Spinner },
  data: () => ({
    spinnerColor: "#f4e2e2",
    hasSpinner: true,
    spinnerInterval: null,
    socket: null,
    connection: null,
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
      colors: ["#9C8611"],
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
    this.$socket.client.on("generateUsers", (user) => {
      this.addUser(user);
    });

    this.spinnerInterval = setInterval(() => {
      this.hasSpinner = false;
    }, 4500);
  },
  beforeDestroy() {
    clearInterval(this.spinnerInterval);
    this.$socket.client.off("generateUsers");
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
  },
};
</script>

<style scoped lang="scss">
.spinner {
  position: absolute;
  top: 10%;
  left: 45%;
}

h3 {
  margin: 0 0 10px 0;
}
</style>
