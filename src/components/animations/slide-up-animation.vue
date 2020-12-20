<template>
  <transition name="slideUp" appear>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "slide-up-animation",
};
</script>

<style>
.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.7s ease;
}
.slideUp-enter,
.slideUp-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
</style>
