<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <!-- :css="false"にするとCSSトランジションが無効になります。
   javascriptだけで制御させたい場合はfalseにすることがある。 -->
  <Transition
    :css="true"
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <div v-if="isShow">Hello IF</div>
    <!-- v-showの場合はleave-cancelledの指定も必要 <div v-show="isShow">Hello IF</div> -->
  </Transition>
</template>
<script setup>
import { ref } from 'vue'
const isShow = ref(true)
function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
let enterIntervalId
function enter(el, done) {
  console.log('enter', el)
  let translateXValue = 30
  // 20m秒ごとに実行する指定
  enterIntervalId = setInterval(() => {
    translateXValue -= 1
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 0) {
      clearInterval(enterIntervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
// cancelled発生時にインターバルをキャンセルすることでアニメーションのギザギザを防ぐ
function enterCancelled(el) {
  console.log('enterCancelled', el)
  clearInterval(enterIntervalId)
}
function beforeLeave(el) {
  console.log('beforeLeave', el)
}
let leaveIntervalId
function leave(el, done) {
  console.log('leave', el)
  let translateXValue = 0
  // 20m秒ごとに実行する指定
  leaveIntervalId = setInterval(() => {
    translateXValue += 1
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 30) {
      clearInterval(leaveIntervalId)
      done()
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
function leaveCancelled(el) {
  console.log('leaveCancelled', el)
  clearInterval(leaveIntervalId)
}
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
