<template>
  <div class="heartstone-games-today">
    <h2>Games Today : {{ totalGames }}</h2>
    <img
      src="../../assets/images/heartstone/heartstone-total-games.png"
      alt="total-games"
    />
  </div>
</template>

<script>
// let formatNumber = 1;
export default {
  name: "heartstone-games-today",
  data: () => ({
    totalGames: 548.234,
  }),
  created() {
    this.$socket.client.on("heartStoneTotalGames", (totalGames) => {
      this.totalGames = this.totalGames * 1000;
      this.totalGames += totalGames;
      this.totalGames = this.totalGames / 1000;
    });
  },
  beforeDestroy() {
    this.$socket.client.off("heartStoneTotalGames");
  },
};
</script>

<style scoped lang="scss">
.heartstone-games-today {
  text-align: center;
  position: relative;
}
h2 {
  margin: 0;
  position: absolute;
  top: 145px;
  right: 15%;
  color: #6b430c;
  font-weight: 700;
  z-index: 999;
  text-align: left;
  font-size: $font-size * 1.2;
}

img {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
  width: 600px;
  height: 200px;
  object-fit: contain;
  object-position: right;
}
</style>
