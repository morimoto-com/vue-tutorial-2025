<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
</template>
<script setup>
/**
 * コンポーネントのライフサイクル
 * script setup -> onBeforeMount -> mount -> onMounted
 * -> onBeforeUpdate -> patch -> onUpdated
 * -> onBeforeUnmount -> unmount -> onUnmounted
 */
import {
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
</script>
<style></style>
