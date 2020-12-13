<template>
  <div class="diablo-add-button">
    <button class="btn">
      <slot>Add</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "diablo-add-button",
};
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  margin-left: 1em;
  color: $diablo-secondary;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.29),
    inset 0 1px 1px rgba(255, 255, 255, 0.44);
  outline: none;
  font-size: 1.5rem;
  border-radius: 5px;
  font-family: "Diablo Heavy", serif;
  background-image: linear-gradient(
    to bottom,
    #601b0b,
    #56170a,
    #4c1308,
    #420f05,
    #380c02
  );
  border: none;
}
.btn:active {
  box-shadow: none;
}
</style>
