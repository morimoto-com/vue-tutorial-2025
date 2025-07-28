<template>
  <h1>Animation</h1>
  <!-- <Transition> コンポーネントは、要素の挿入・削除（enter/leave）に対してクラスを自動的に付与してくれます。
    これにより、CSS だけで自然なアニメーションを実現できます。 -->
  <!-- Transitionコンポーネントの直下には必ず１つの要素を指定 -->
  <button @click="isShow = !isShow">switch</button>
  <Transition>
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<script setup>
import { ref } from 'vue'
const isShow = ref(true)
</script>
<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s;
}
.v-leave-to {
  opacity: 0;
}
</style>
