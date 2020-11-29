<template>
  <div class="diablo">
    <div class="top-content">
      <div class="top-countries">
        <div class="top-countries__header">
          <h2>Top Countries Playing Diablo 3</h2>
          <img src="../assets/images/icons/flag.svg" alt="" class="svg-icon" />
        </div>
        <div class="countries-chart">
          <top-countries />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopCountries from "../components/diablo/top-countries";
export default {
  name: "diablo",
  components: { TopCountries },
};
</script>

<style scoped lang="scss">
.diablo {
  background: url("../assets/images/diablo-background.jpg") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 3% 2% 0 $nav-width + 2.2%;

  @include responsive(phone) {
    padding: 3% 0 0 0;
    margin-top: 20%;
  }
}

.top-countries {
  background: rgba(201, 98, 16, 0.3);
  border-radius: 5px;
  padding: 1%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  &__header {
    display: flex;
    justify-content: space-between;
  }
}

.svg-icon {
  width: 2%;
}

.countries-chart {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
