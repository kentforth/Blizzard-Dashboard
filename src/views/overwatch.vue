<template>
  <div class="overwatch">
    <div class="container">
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
        <div class="clans"></div>
      </section>
    </div>
  </div>
</template>

<script>
import UsersArea from "../components/overwatch/users-area";

export default {
  name: "overwatch",
  components: { UsersArea },
};
</script>

<style scoped lang="scss">
.overwatch {
  background: url("../assets/images/overwatch-background.jpg") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 0 0 0 $nav-width;
}

.all-users-chart {
  width: 100%;
}

.users__chart {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
}

.users-text {
  display: flex;
  justify-content: space-between;
}
</style>
