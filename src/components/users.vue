<template>
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
      <starcraft-users-area />
    </div>
  </div>
</template>

<script>
import StarcraftUsersArea from "./starcraft/starcraft-users-area";
export default {
  name: "users",
  components: { StarcraftUsersArea },
};
</script>

<style scoped lang="scss">
.users__chart {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background-color: $starcraft-background-blocks;
  border-radius: 5px;
  padding: 2% 2% 0 2%;

  @include responsive(phone) {
    padding: 5% 5% 0 5%;
  }
}

.users-text,
.clans__text {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.svg-icon {
  width: 2%;
}
</style>
