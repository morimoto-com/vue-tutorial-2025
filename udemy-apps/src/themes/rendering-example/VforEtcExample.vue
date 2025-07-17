<template>
  <p>オブジェクトを使ったv-forレンダリング</p>
  <p v-for="(value, key, index) in user" :key="value">{{ key }}:{{ value }}({{ index }})</p>
  <p>[v-for="n in 10"]数値分繰り返すv-forレンダリング（1から開始）</p>
  <p v-for="n in 10" :key="n">{{ n }}</p>
  <p>[v-for="n of 10"]inをofに変更しても同じ意味</p>
  <p v-for="n of 10" :key="n">{{ n }}</p>
</template>
<script setup>
import { ref } from 'vue'
const user = ref({
  name: 'shinji',
  age: 36,
  gender: 'man',
})
</script>
<style></style>
