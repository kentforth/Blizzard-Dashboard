<template>
  <button class="btn" @click="$emit('click')">
    <slot> Calculate </slot>
  </button>
</template>

<script>
export default {
  name: "diablo-calculate-chart-button",
};
</script>

<style scoped>
.btn {
  font-family: "Diablo Heavy", serif;
  font-size: 1.1rem;
  cursor: pointer;
  color: #e1deb2;
  padding: 1.2em 5em 1.5em 5em;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  background-image: url("../../assets/images/diablo/diablo button background.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn:active {
  transform: translateY(3px);
}
</style>
