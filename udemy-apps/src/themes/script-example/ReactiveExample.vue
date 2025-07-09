<template>
  <h1>Title: {{ title }}</h1>
  <!-- リアクティブでもhtml上は.valueは不要 -->
  <h2>Price: {{ price - 1 }}</h2>
  <button @click="increment">button</button>
</template>

<script setup>
import { ref } from 'vue'
const title = 'Vue.js Cource'
let price = ref(9.99) //リアクティブなデータを定義
console.log(price.value)
function increment() {
  // リアクティブなデータは.valueで取得
  price.value += 1
  console.log(price.value)
}
//リアクティブなオブジェクト
const info = ref({
  students: 1000,
  rating: 4,
})
console.log(info.value.students)
</script>
