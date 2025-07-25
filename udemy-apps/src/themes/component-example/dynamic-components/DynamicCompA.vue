<template>
  <h2>DynamicCompA</h2>
  <button @click="count++">+1</button>
  <p>count:{{ count }}</p>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
