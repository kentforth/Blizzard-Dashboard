<template>
  <div class="text-centered">
    <div class="content__text">
      <h2>{{ text }}</h2>
    </div>
    <div class="content__img">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "text-centered",
  props: {
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.text-centered {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
}
.content__text {
  justify-self: center;
  grid-column: 2/4;
}

.content__img {
  justify-self: end;
  grid-column: 4/4;
}
</style>
