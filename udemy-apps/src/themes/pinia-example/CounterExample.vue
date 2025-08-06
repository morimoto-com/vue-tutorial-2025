<template>
  <h2>CounterComp</h2>
  <button @click="countStore.count++">+1</button>
  <p>{{ countStore.count }}</p>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()
console.log(countStore.count)
</script>
<style></style>
