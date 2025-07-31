<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <!-- TransitionGroup:複数の要素にアニメーションを定義できる -->
  <!-- TransitionGroupはkey属性が必須 -->
  <!-- TransitionGroupはmodeプロップスは使えない -->
  <h2>TransitionGroupの基礎</h2>
  <TransitionGroup name="fade">
    <div v-if="isShow">Hello Fade</div>
    <div key="hello2">Hello Fade</div>
    <div v-if="!isShow">Hello Fade</div>
  </TransitionGroup>
  <h2>TransitionGroupをv-forで実装</h2>
  <input v-model="newFruit" type="text" />
  <button @click="fruits.unshift(newFruit)">Add</button>
  <!-- tagを指定すると任意のタグ名で要素を囲むことができる -->
  <TransitionGroup name="fade" tag="div">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
</template>
<script setup>
import { ref } from 'vue'
const isShow = ref(true)
const fruits = ref(['Apple', 'Banana', 'Grape'])
const newFruit = ref('')
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
.fade-move {
  /* 要素が追加削除された時の周りの要素の動き方をなめらかにするもの */
  transition: transform 1s;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  /* こちらを付与することで削除時のmoveも滑らかになる */
  position: absolute;
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
