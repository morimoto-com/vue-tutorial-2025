<template>
  <div>
    <button @click="isShow = !isShow">switch</button>
    <CountUp v-if="isShow" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import CountUp from './countUp.vue'
const isShow = ref(true)
</script>
<style></style>
