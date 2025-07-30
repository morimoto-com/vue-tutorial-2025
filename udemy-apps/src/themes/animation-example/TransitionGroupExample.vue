<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <!-- appear:初期表示時にもアニメーションを動作させる -->
  <Transition name="fade" enter-active-class="hello" appear>
    <div v-if="isShow">Hello Fade</div>
  </Transition>
  <Transition name="slide" appear>
    <div v-if="isShow">Hello Slide</div>
  </Transition>
  <h1>animate.cssをつかったアニメーション適用</h1>
  <p class="animate__animated animate__bounce">An animated element</p>
  <transition
    name="ani"
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__swing"
    appear
  >
    <div v-if="isShow">An animated element</div>
  </transition>
</template>
<script setup>
import { ref } from 'vue'
const isShow = ref(true)
</script>
<style scoped>
/* .v-enter-from { name指定をすることで任意の名前に変更している*/
/* Animationライブラリサイト：https://animate.style/ (importはmain.jsに追加)*/
.fade-enter-from {
  opacity: 0;
}
.fade-hello {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide 1s;
}
.slide-leave-active {
  animation: slide 1s reverse;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
