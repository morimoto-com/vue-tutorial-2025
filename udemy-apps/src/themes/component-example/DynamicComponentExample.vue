<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <!-- 切り替えの度にmountとunmountが発生している -->
  <!-- リアクティブ情報を保持するにはkeepAlive属性の付与が必要 -->
  <keep-alive>
    <component :is="currentComp" />
  </keep-alive>
</template>
<script setup>
import { shallowRef } from 'vue'
import CompA from './dynamic-components/DynamicCompA.vue'
import CompB from './dynamic-components/DynamicCompB.vue'
import CompC from './dynamic-components/DynamicCompC.vue'
// 先頭のデータだけをリアクティブにする場合はshallowRefを利用する
const currentComp = shallowRef(CompA)
</script>
<style></style>
