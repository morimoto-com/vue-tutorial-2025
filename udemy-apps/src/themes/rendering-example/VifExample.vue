<template>
  <label>基本的な使い方</label>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">maybe OK!</p>
  <p v-else>not OK...</p>
  <button @click="ok = !ok">Ok toggle</button>
  <button @click="maybeOk = !maybeOk">maybeOk toggle</button>
  <label>複数の要素にvifを指定する</label>
  <!-- templateタグは描画時に削除される -->
  <template v-if="ok">
    <p>OK!</p>
    <p>Hello</p>
    <p>Hi</p>
  </template>
</template>
<script setup>
import { ref } from 'vue'
const ok = ref(true)
const maybeOk = ref(false)
</script>
<style></style>
