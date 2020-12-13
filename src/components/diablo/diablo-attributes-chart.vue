<template>
  <apexchart
    type="radialBar"
    height="300"
    class="attributes-chart"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "diablo-attributes-chart",
  data: () => ({}),
  props: {
    series: {
      type: Array,
      default: function () {
        return [];
      },
    },
    options: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="scss">
.attributes-chart {
  width: 100%;

  @include responsive(phone) {
  }
}
</style>
