<template>
  <div class="heartstone">
    <div class="top-content">
      <div class="cards-type">
        <h2>Cards Type</h2>
        <heartstone-cards-type />
      </div>
      <heartstone-games-today />
    </div>
  </div>
</template>

<script>
import HeartstoneGamesToday from "../components/heartstone/heartstone-games-today";
import HeartstoneCardsType from "../components/heartstone/heartstone-cards-type";
export default {
  name: "heartstone",
  components: { HeartstoneCardsType, HeartstoneGamesToday },
};
</script>

<style scoped lang="scss">
.heartstone {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("../assets/images/heartstone-background.png") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 3% 2% 0 $nav-width + 2.2%;

  @include responsive(phone) {
    padding: 3% 3% 0 3%;
    margin-top: 20%;
  }
}
</style>
