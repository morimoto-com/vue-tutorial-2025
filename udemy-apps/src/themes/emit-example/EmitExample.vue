<template>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <ChildComponent @reset="count = 0" @plus="onPlus" @plus-ten="onPlus10" />
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './EmitExampleChild.vue'
const count = ref(0)
function onPlus(value) {
  count.value = count.value + value
}
function onPlus10(value) {
  count.value = count.value + value
}
</script>
