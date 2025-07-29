<template>
  <h1>Animation</h1>
  <p>modeプロップス（mode="out-in"）をつかうことでアニメーションの切り替わりをスムーズにさせる</p>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="fade" mode="out-in">
    <div v-if="isShow">ON</div>
    <div v-else>OFF</div>
  </Transition>
  <!-- Transitionコンポーネントの中に子コンポーネントを指定するとアニメーションが動かなくなることがあるので注意 -->
  <Transition name="fade" mode="in-out">
    <div v-if="isShow">ON</div>
    <div v-else>OFF</div>
  </Transition>
</template>
<script setup>
import { ref } from 'vue'
const isShow = ref(true)
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
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
</style>
