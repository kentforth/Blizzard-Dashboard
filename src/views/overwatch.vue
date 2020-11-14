<template>
  <div class="overwatch">
    <div class="container">
      <!--TOP CHARTS-->
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

      <!--MIDDLE CHARTS-->
      <section class="middle-content">
        <users-choice />
      </section>
    </div>
  </div>
</template>

<script>
import UsersArea from "../components/overwatch/users-area";
import TeamsWinrate from "../components/overwatch/teams-winrate";
import UsersChoice from "../components/overwatch/users-choice";

export default {
  name: "overwatch",
  components: { UsersChoice, TeamsWinrate, UsersArea },
  data: () => ({}),
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/overwatch";
.container {
  width: 93%;
}

.overwatch {
  background: url("../assets/images/overwatch-background.jpg") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 3% 0 0 $nav-width;
}

.all-users-chart {
  width: 100%;
}

.top-content {
  display: grid;
  grid-column-gap: 3%;
  grid-template-columns: 1fr 1fr;
}

.users__chart,
.clans__chart {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background-color: rgba(60, 55, 66, 0.5);
  border-radius: 5px;
  padding: 2%;
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
}
</style>
