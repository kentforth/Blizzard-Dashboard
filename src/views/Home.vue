<template>
    <div class="home">
        <div class="container">
            <div class="chart">
                <apexchart
                        type="area"
                        height="350"
                        width="800"
                        :options="chartOptions"
                        :series="series"
                        ref="chart"
                ></apexchart>
            </div>

        </div>

    </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
  import io from "socket.io-client";
  const socket = io.connect("http://localhost:11000");

  export default {
    name: "Home",
    components: {
      apexchart: VueApexCharts
    },
    data: () => ({
      polling: null,
      series: [
        {
          name: 'BTC',
          data: []
        },

      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
          foreColor: '#FFEDFF',
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          show: false
        },
        xaxis: {
          tickAmount: 10
        },
        tooltip: {}
      }
    }),
    created() {
socket.on("newData", fetchedData =>  {
  console.log(fetchedData)
})
    },

    beforeDestroy() {
      clearInterval(this.polling)
    },
    methods: {
      updateSeriesLine() {
        this.$refs.chart.updateSeries([{
          data: this.series[0].data
        }], false, true)
      },
      updateChart() {

        this.polling = setInterval( () => {

        }, 2000)
      }
    }
  };
</script>
<style scoped lang="scss">
    .chart {
        margin: 4em auto 0 auto;
        width: 100%;
        display: grid;
        justify-content: center;
        justify-items: center;
        grid-template-columns: 1fr;
    }
</style>
