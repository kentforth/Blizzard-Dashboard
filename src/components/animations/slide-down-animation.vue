<template>
  <transition name="slideDown" appear>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "slide-down-animation",
};
</script>

<style>
.slideDown-enter-active,
.slideDown-leave-active {
  transition: all 0.7s ease;
}
.slideDown-enter,
.slideDown-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
