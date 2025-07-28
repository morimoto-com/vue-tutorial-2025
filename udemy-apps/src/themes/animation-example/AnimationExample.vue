<template>
  <h1>Animation</h1>
  <div :class="{ 'opacity-80': isShow, 'opacity-20': !isShow, slide: isShow }">Hello</div>
  <button @click="isShow = !isShow">Show</button>
</template>
<script setup>
import { ref } from 'vue'
const isShow = ref(false)
</script>
<style scoped>
/* CSSトランジション */
div {
  transition: opacity 1s;
}
.slide {
  animation: slide 1s;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-20 {
  opacity: 0.2;
}
/* CSSアニメーション */
@keyframes slide {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
}
</style>
