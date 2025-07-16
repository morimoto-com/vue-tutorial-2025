<template>
  <!-- 直接指定する方法 -->
  <div :class="'red bg-blue'">Hello</div>
  <!-- オブジェクトとして指定する方法 -->
  <div :class="{ red: false, 'bg-blue': true }">Hello</div>
  <!-- オブジェクトとして指定して、リアクティブにする方法 -->
  <!-- 静的な指定も併せて指定可能 -->
  <div class="border" :class="[className, { 'bg-blue': isBgBlue }]">Hello</div>
  <button @click="toggleButton">toggleButton</button>
</template>
<script setup>
import { ref } from 'vue'
const isRed = ref(true)
const isBgBlue = ref(true)
const className = ref('red')
function toggleButton() {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
}
</script>
<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: solid;
}
</style>
