<template>
    <div class="overwatch">
        <section class="top-content">
            <div class="users">
                <button @click="addUser">Add One More</button>
                <h2>Users</h2>
                <div class="users__chart">
                    <apexchart
                            type="area"
                            height="350"
                            width="800"
                            :options="usersChartOptions"
                            :series="usersSeries"
                            ref="usersChart"
                    ></apexchart>
                </div>
            </div>
            <div class="clans">

            </div>
        </section>
    </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: "overwatch",
    components: {
      apexchart: VueApexCharts
    },
    data: () => ({
      usersSeries: [
        {
          name: 'Users',
          data: [
            {x: 34, y: 54},
            {x: 54, y: 108},
            {x: 65, y: 14},
            {x: 61, y: 83},
          ]
        },

      ],
      usersChartOptions: {
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
        colors: ['#DAA011'],
        dataLabels: {
          enabled: false,
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
        tooltip: {
          theme: 'dark',
        }
      }
    }),
    methods: {
      addUser() {
        const newItem = this.generateRandomNumber()
        this.usersSeries[0].data.push(newItem)
        this.usersSeries = [{
          data: this.usersSeries[0].data
        }]
      },
      generateRandomNumber() {
        let number = Math.floor(Math.random() * 100)
        let item = {
          x: 'new',
          y: number
        }
        return item;
      },
    }
  }
</script>

<style scoped lang="scss">
    .overwatch {
        background: url('../assets/images/overwatch-background.jpg') center center;
        background-size: cover;
        min-height: 100vh;
        width: 100%;
        padding: 0 0 0 $nav-width;
    }


</style>
