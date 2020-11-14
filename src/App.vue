<template>
  <div id="app">
    <div class="main">
      <navigation />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss"></style>
<script>
import Navigation from "./components/navigation";
export default {
  components: { Navigation },
};
</script>
<style lang="scss">
@import "assets/scss/components/navigation";
.main {
  display: flex;
}
</style>
