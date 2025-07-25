<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <!-- 切り替えの度にmountとunmountが発生している -->
  <!-- リアクティブ情報を保持するにはkeepAlive属性の付与が必要 -->
  <keep-alive include="CompB,CompC">
    <!-- <keep-alive include="['CompA','CompB']"> 配列でも指定可能 -->
    <!-- <keep-alive max="2">  最新2コのコンポーネントまでしか保持されない -->
    <!-- include属性で対象を限定できる -->
    <component :is="currentComp" />
  </keep-alive>
  <keep-alive exclude="CompB">
    include属性で対象を限定できる
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
