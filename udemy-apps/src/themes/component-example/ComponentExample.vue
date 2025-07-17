<template>
  <CountUp />
  <!-- ケバブケースで呼び出しすることも可能 -->
  <Count-Up />
  <CountUp />
</template>
<script setup>
// vue.jsではパスカルケースでコンポーネントを命名することを推奨されている
// また、コンポーネント名は2単語以上にすることが求められる
import CountUp from './CountUp.vue'
</script>
<style></style>
