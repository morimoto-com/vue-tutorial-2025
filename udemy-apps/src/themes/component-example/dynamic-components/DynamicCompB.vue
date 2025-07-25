<template>
  <h2>DynamicCompB</h2>
  <button @click="count++">+1</button>
  <p>count:{{ count }}</p>
</template>
<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'
const count = ref(0)
onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})
</script>
