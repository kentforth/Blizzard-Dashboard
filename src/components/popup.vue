<template>
  <div class="popup">
    <div class="header">
      <slot name="title"></slot>
      <hr class="line" />
      <button @click="closePopup" class="btnClose"></button>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style scoped lang="scss">
.popup {
  width: 30%;
  padding: 1em;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("../assets/images/wow/modal-background.webp") no-repeat center;
  background-size: cover;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 17px 7px rgba(0, 0, 0, 0.58);
  box-shadow: 1px 1px 17px 7px rgba(0, 0, 0, 0.58);

  @include responsive(tab-port) {
    width: 60%;
  }

  @include responsive(phone) {
    width: 80%;
  }
}

.header h1 {
  margin-bottom: 0.3em;
}

.btnClose {
  position: absolute;
  top: 3%;
  right: 3%;
  outline: none;
  cursor: pointer;
  border: none;
  background: url("../assets/images/icons/cross.svg") no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 50px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  @include responsive(phone) {
    width: 25px;
    height: 25px;
    top: 2%;
    right: 2%;
  }
}

.line {
  width: 100%;
  border: 1px solid #949c86;
}

.description {
  p {
    @include responsive(tab-port) {
      font-size: $font-size * 1.6;
    }
  }
}
</style>
