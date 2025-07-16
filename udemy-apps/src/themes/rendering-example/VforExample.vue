<template>
  <label>配列を操作</label>
  <button @click="fruits.shift()">shift</button>
  <li v-for="fruit in fruits" :key="fruit"><input type="text" />{{ fruit }}</li>
  <!-- key属性はvue.jsがレンダリング時に内部的なヒントとしてのみ使用される -->
  <!-- keyがなければ、タグのみで判断される -->
  <!-- v-ifディレクティブの場合は自動でkeyが付与されるため考慮不要 -->
  <br />
  <label>オブジェクトを操作</label>
  <button @click="fruitsObj.shift()">shift</button>
  <li v-for="fruit in fruitsObj" :key="fruit.id"><input type="text" />{{ fruit.objName }}</li>
</template>
<script setup>
import { ref } from 'vue'
const fruits = ref(['Apple', 'Banana', 'Grape'])
const fruitsObj = ref([
  { id: 1, objName: 'Apple' },
  { id: 2, objName: 'Apple' },
  { id: 3, objName: 'Banana' },
  { id: 4, objName: 'Grape' },
])
</script>
<style></style>
