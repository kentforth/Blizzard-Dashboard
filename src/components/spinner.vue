<template>
  <div class="spinner">
    <orbit-spinner :animation-duration="1000" :size="60" :color="color" />
  </div>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";
export default {
  name: "spinner",
  components: {
    OrbitSpinner,
  },
  props: {
    color: {
      type: String,
      default: "#ff1d5e",
    },
  },
};
</script>

<style scoped></style>
