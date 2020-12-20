<template>
  <transition name="slideRight" appear>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "slide-right-animation",
};
</script>

<style>
.slideRight-enter-active,
.slideRight-leave-active {
  transition: all 0.7s ease;
}
.slideRight-enter,
.slideRight-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
