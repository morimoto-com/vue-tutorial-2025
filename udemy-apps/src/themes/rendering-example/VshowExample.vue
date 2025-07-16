<template>
  <label>基本的な使い方</label>
  <br>
  <p v-show="ok">OK!</p>
  <button @click="ok = !ok">Ok toggle</button>
  <!-- v-showを複数指定する場合はtemplateは使えないのでdivタグ等を使用する -->
</template>
<script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>
<style></style>
