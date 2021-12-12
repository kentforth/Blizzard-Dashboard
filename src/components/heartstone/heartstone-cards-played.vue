<template>
  <div class="heartstone-cards-played">
    <h2>Cards played by game mode over the last 5 minutes</h2>
    <apexchart
      type="bar"
      height="535"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "heartstone-cards-played",
  data: () => ({
    series: [
      {
        data: [182, 283, 192, 241, 195, 136, 185, 253, 215, 243, 173, 216],
        name: "Games Played",
      },
    ],
    chartOptions: {
      chart: {
        foreColor: "#f4e2e2",
        height: 350,
        type: "bar",
      },
      colors: [
        "#FF5A68",
        "#55FF9F",
        "#4A41FF",
        "#83FF73",
        "#A13CFF",
        "#A5FFE2",
        "#FF9F5F",
        "#55BBFF",
        "#EF41FF",
        "#FFD678",
        "#4BD8FF",
        "#FF374B",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        theme: "dark",
      },
      responsive: [
        {
          breakpoint: 770,
          options: {
            chart: {
              height: 450,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      xaxis: {
        max: 10,
        categories: [
          "Wand Thief",
          "Pen Flinger",
          "Boggspine Knukles",
          "Backstab",
          "Spirit Jailer",
          "Lightining Bloom",
          "Foxy Fraud",
          "Pharaoh Cat",
          "Swindle",
          "Shadow Step",
          "Tour Guide",
          "Kazakus",
        ],
        labels: {
          style: {
            colors: [
              "#FF5A68",
              "#55FF9F",
              "#4A41FF",
              "#83FF73",
              "#A13CFF",
              "#A5FFE2",
              "#FF9F5F",
              "#55BBFF",
              "#EF41FF",
              "#FFD678",
              "#4BD8FF",
              "#FF374B",
            ],
            fontSize: "12px",
          },
        },
      },
    },
  }),
  created() {
    this.$socket.client.on("heartStoneCardsPlayed", (cardsPlayed) => {
      this.series[0].data = cardsPlayed;
      this.series = [
        {
          data: this.series[0].data,
        },
      ];
    });
  },
  beforeDestroy() {
    this.$socket.client.off("heartStoneCardsPlayed");
  },
};
</script>

<style scoped lang="scss">
.heartstone-cards-played {
  width: 100%;
  background-color: $heartstone-card-bg;
  border-radius: 5px;
  padding: 3%;
}
</style>
