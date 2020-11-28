<template>
  <div class="units-pie">
    <apexchart
      ref="armyUnitsChart"
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "units-pie",
  data: () => ({
    series: [111, 222, 444],
    chart: {
      width: 380,
    },
    chartOptions: {
      labels: ["Terran", "Zerg", "Protoss"],
      colors: ["#379BFF", "#FF2323", "#60C121"],
      chart: {
        type: "donut",
        width: 380,
        foreColor: "#f4e2e2",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Army Units Quantity",
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
          breakpoint: 320,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  }),
  created() {
    this.$socket.client.on("armyUnits", (data) => {
      this.series = data.map(Number);
    });
  },
  beforeDestroy() {
    this.$socket.client.off("armyUnits");
  },
};
</script>

<style scoped lang="scss"></style>
