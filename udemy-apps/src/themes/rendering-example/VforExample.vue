<template>
  <label>配列を操作</label>
  <button @click="fruits.shift()">shift</button>
  <!-- 第二引数でindexを指定することで順序を取得可能 -->
  <li v-for="(fruit, index) in fruits" :key="fruit">
    <input type="text" />{{ fruit }}({{ index }})
  </li>
  <!-- key属性はvue.jsがレンダリング時に内部的なヒントとしてのみ使用される -->
  <!-- keyがなければ、タグのみで判断される -->
  <!-- v-ifディレクティブの場合は自動でkeyが付与されるため考慮不要 -->
  <br />
  <label>オブジェクトを操作</label>
  <button @click="fruitsObj.shift()">shift</button>
  <label>オブジェクトをそのまま指定</label>
  <li v-for="fruit in fruitsObj" :key="fruit.id"><input type="text" />{{ fruit.objName }}</li>
  <label>オブジェクトの要素を指定</label>
  <li v-for="({ id, objName }, index) in fruitsObj" :key="id">
    <input type="text" />{{ objName }}({{ index }})
  </li>
  <label>templateタグによる指定</label>
  <template v-for="({ id, objName }, index) in fruitsObj" :key="id">
    <p>id: {{ id }}</p>
    <input type="text" />{{ objName }}({{ index }})
  </template>
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
