<template>
  <p>{{ count }}</p>
  <!-- インライン式の指定方法(@による省略あり、なし) -->
  <button v-on:click="count = $event.clientX">button</button>
  <button @click="count = $event.clientX">button</button>
  <br />
  <!-- 関数ハンドラによる指定方法 -->
  <button @click="countUp">button</button>
  <br />
  <!-- 引数を指定する場合は第一引数にデフォルトのeventを指定する -->
  <button @click="countUp2($event, 5)">button2-2</button>
  <br />
  <!-- stopPropagation -->
  <div @click="count++">
    stopPropagation
    <button @click="">stopPropagationなし</button>
    <button @click.stop="count = 30">click.stop</button>
    <button @click="$event.stopPropagation()">stopPropagationあり</button>
  </div>
  <!-- preventDefault:デフォルトの動作を防ぐ・・・リンクに飛ばない -->
  <a href="https://vuejs.org" @click="$event.preventDefault()">Vue.js</a>
  <a href="https://vuejs.org" @click.prevent="">Vue.js</a>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event) {
  console.log(event)
  count.value = event.clientX
}
function countUp2(event, times) {
  console.log(event)
  count.value = event.clientX * times
}
</script>
