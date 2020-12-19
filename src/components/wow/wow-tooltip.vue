<template>
  <div class="wow-tooltip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wow-tooltip",
};
</script>

<style scoped lang="scss">
.wow-tooltip {
  background-color: #1939bf;
  padding: 15px;
  border-radius: 5px;
  border: 2px solid $white;
  max-width: 250px;
}

.tooltip-info {
  h4 {
    color: $white;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    color: #62bf06;
    font-weight: 600;
    white-space: pre-line;
    font-size: $font-size * 0.9;
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
</style>
