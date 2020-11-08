<template>
  <div class="navigation">
    <div id="nav">
      <router-link to="/overwatch" class="link">
        <img src="../assets/images/logo/overwatch.png" alt="overwatch" />
      </router-link>
      <router-link to="/starcraft" class="link">
        <img src="../assets/images/logo/starcraft.png" alt="starcraft" />
      </router-link>
      <router-link to="/diablo" class="link">
        <img
          src="../assets/images/logo/diablo.png"
          alt="diablo"
          class="img-diablo"
        />
      </router-link>
      <router-link to="/heartstone" class="link">
        <img src="../assets/images/logo/heartstone.png" alt="heartstone" />
      </router-link>
      <router-link to="/wow" class="link">
        <img src="../assets/images/logo/wow.png" alt="wow" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style scoped lang="scss">
#nav {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  justify-items: center;
  width: $nav-width;
  min-height: 100vh;
  padding: 4em 0;
  background-color: $overwatch-dark;
  position: fixed;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.link {
  width: 100%;
  height: 170px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.link:hover {
  background-color: rgba(94, 87, 87, 0.15);
}

.link img {
  width: 60%;
  height: 100%;
  object-fit: contain;
}

.img-diablo {
  height: 170px !important;
}

.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
