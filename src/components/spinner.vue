<template>
  <div class="spinner">
    <atom-spinner :animation-duration="1000" :size="60" :color="color" />
  </div>
</template>

<script>
import { AtomSpinner } from "epic-spinners";
export default {
  name: "spinner",
  components: {
    AtomSpinner,
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
