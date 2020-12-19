<template>
  <div class="battlegrounds">
    <h2>Rated Battlegrounds Won</h2>
    <hr class="line" />
    <div class="chart">
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "wow-battlegrounds",
  data: () => ({
    series: [
      {
        name: "Rating Scores",
        data: [
          2365,
          2683,
          3765,
          4283,
          3682,
          2854,
          2859,
          2836,
          3845,
          3812,
          2843,
          2893,
          2894,
          4173,
          3284,
          2834,
          2378,
          3841,
          2484,
          2692,
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        foreColor: "#f4e2e2",
      },
      stroke: {
        width: 7,
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Sixsixsix",
          "Areyt",
          "Wallirik",
          "Datakuz",
          "Dargz",
          "Pinka",
          "Ridzy",
          "Frendz",
          "Serbenen",
          "Avistat",
          "Butterz",
          "Glockedup",
          "Widz",
          "Clamyjones",
          "Lucidex",
          "Priderp",
          "Torgz",
          "Mista",
          "BlueBoil",
          "Morgan",
        ],
      },
      tooltip: {
        theme: "dark",
      },
      title: {
        text: "Top Players",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#BF725A",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#00BF8D"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 4,
        colors: ["#BF3910"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
    },
  }),
  created() {
    this.$socket.client.on(
      "wowBattlegroundsRating",
      (battlegroundsWonRating) => {
        for (let i = 0; i < this.series[0].data.length; i++) {
          this.series[0].data[i] =
            this.series[0].data[i] + battlegroundsWonRating[i];
        }
        this.series = [
          {
            data: this.series[0].data,
          },
        ];
      }
    );
  },
  beforeDestroy() {
    this.$socket.client.off("wowBattlegroundsRating");
  },
};
</script>

<style scoped lang="scss">
.battlegrounds {
  background: rgba(173, 63, 31, 0.6);
  border-radius: 5px;
  padding: 2%;
  margin-top: 2em;

  h2 {
    margin-bottom: 1.8em;
  }
}

.line {
  width: 100%;
  border: 1px solid #e39f78;
}

.chart {
  width: 100%;
}
</style>
