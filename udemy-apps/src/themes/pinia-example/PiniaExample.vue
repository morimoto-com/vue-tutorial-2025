<template>
  <h2>Pinia</h2>
  <button @click="countStore.count++">+1</button>
  <button @click="countStore.increment">increment</button>
  <p>{{ countStore.count }}</p>
  <p>{{ countStore.doubleCount }}</p>
  <CounterExample />
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import CounterExample from './CounterExample.vue'
const countStore = useCounterStore()
console.log(countStore.count)
</script>
<style></style>
