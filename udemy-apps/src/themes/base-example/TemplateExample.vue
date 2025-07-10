<!-- HTMLではなく正確にはテンプレート構文と呼ぶ -->
<template>
  <div>Hello</div>
  <div>{{ count + count2 }}</div>
  <!-- v-textディレクティブで表示 -->
  <div v-text="count"></div>
  <!-- v-htmlディレクティブでhtmlを表示 -->
  <div v-html="message"></div>
  <!-- v-bindディレクティブで属性値を指定可能 -->
  <a v-bind:id="vueId" v-bind:href="vueUrl">Vue.js(v-bind省略しない)</a>
  <br />
  <!-- v-bindは省略可能 -->
  <a :id="vueId" :href="vueUrl">Vue.js(v-bindを省略)</a>
  <br />
  <!-- v-bindは複数指定可能 -->
  <a v-bind="{ id: vueId2, href: vueUrl }">Vue.js(複数指定)</a>
  <br />
  <button :disabled>ボタン</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(1)
const count2 = ref(2)
const message = ref('<h1>Hello</h1>')
const vueUrl = ref('https://vuejs.org')
const vueId = ref('vue-link')
const vueId2 = ref('vue-link2')
</script>
