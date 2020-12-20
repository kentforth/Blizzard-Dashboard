<template>
  <div class="overwatch">
    <div class="container">
      <!--TOP CHARTS-->
      <slide-down-animation>
        <section class="top-content">
          <div class="users">
            <div class="users__chart">
              <div class="users-text">
                <h2>Users</h2>
                <img
                  src="../assets/images/icons/users.svg"
                  alt="users"
                  class="svg-icon"
                />
              </div>
              <users-area />
            </div>
          </div>
          <div class="clans__chart">
            <div class="clans__text">
              <h2>Teams Winrate</h2>
              <img
                src="../assets/images/icons/clans.svg"
                alt="users"
                class="svg-icon"
              />
            </div>
            <teams-winrate />
          </div>
        </section>
      </slide-down-animation>

      <!--MIDDLE CHARTS-->
      <slide-up-animation>
        <section class="middle-content">
          <users-choice />
        </section>
      </slide-up-animation>
    </div>
  </div>
</template>

<script>
import UsersArea from "../components/overwatch/users-area";
import TeamsWinrate from "../components/overwatch/teams-winrate";
import UsersChoice from "../components/overwatch/users-choice";
import SlideDownAnimation from "../components/animations/slide-down-animation";
import SlideUpAnimation from "../components/animations/slide-up-animation";

export default {
  name: "overwatch",
  components: {
    SlideUpAnimation,
    SlideDownAnimation,
    UsersChoice,
    TeamsWinrate,
    UsersArea,
  },
  data: () => ({
    isOverwatchShow: false,
  }),
  mounted() {
    this.isOverwatchShow = true;
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 93%;
}

.overwatch {
  background: url("../assets/images/overwatch-background.jpg") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 3% 0 0 $nav-width;

  @include responsive(phone) {
    padding: 3% 0 0 0;
    margin-top: 20%;
  }
}

.all-users-chart {
  width: 100%;
}

.top-content {
  display: grid;
  grid-column-gap: 3%;
  grid-template-columns: 1fr 1fr;

  @include responsive(tab-port) {
    grid-template-columns: 1fr;
    grid-gap: 3%;
  }
}

.users__chart,
.clans__chart {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background-color: rgba(60, 55, 66, 0.5);
  border-radius: 5px;
  padding: 2%;

  @include responsive(phone) {
    padding: 5%;
  }
}

.users-text,
.clans__text {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.middle-content {
  margin-top: 2%;
  margin-bottom: 3%;

  @include responsive(tab-port) {
    margin-top: 7%;
  }
}
</style>
