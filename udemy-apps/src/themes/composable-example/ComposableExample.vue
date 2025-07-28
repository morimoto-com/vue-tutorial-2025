<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo">undo</button>
  <p>count: {{ count2 }}</p>
  <button @click="count2++">+1</button>
  <p>history: {{ history2 }}</p>
  <button @click="undo2">undo2</button>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { useRefLHistory } from './RefLimitedHistory.js'
const count = ref(0)
// 関数定義
function refHistory(source) {
  const history = ref([])
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length === 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo,
  }
}
const { history, undo } = refHistory(count)
const count2 = ref(0)
const { history: history2, undo: undo2 } = useRefLHistory(count2, 3)
</script>
<style></style>
