<template>
  <transition name="slideLeft" appear>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "slide-left-animation",
};
</script>

<style>
.slideLeft-enter-active,
.slideLeft-leave-active {
  transition: all 0.7s ease;
}
.slideLeft-enter,
.slideLeft-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
