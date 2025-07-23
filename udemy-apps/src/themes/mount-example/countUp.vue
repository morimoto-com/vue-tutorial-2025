<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <button @click="countUp()">+1</button>
  <button @click="countUpAsync()">+1</button>
</template>
<script setup>
/**
 * コンポーネントのライフサイクル
 * script setup -> onBeforeMount -> mount -> onMounted
 * -> onBeforeUpdate -> patch -> onUpdated
 * -> onBeforeUnmount -> unmount -> onUnmounted
 */
import {
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'
const count = ref(0)
onBeforeMount(() => {
  console.log('onBeforMount')
})
onMounted(() => {
  console.log('onMounted')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
function countUp() {
  count.value++
  // この時点ではcountは更新されない。DOM更新直前に非同期的に更新される
  nextTick(() => {
    // nextTickはDOM更新後に実行される
    console.log('nextTick')
    debugger // デバッガー
  })
}
// countUpと同様の処理だが異なる書き方
async function countUpAsync() {
  count.value++
  await nextTick()
  console.log('nextTick')
}
</script>
<style></style>
