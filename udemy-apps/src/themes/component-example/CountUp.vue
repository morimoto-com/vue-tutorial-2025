<template>
  <h2>CountUp</h2>
  <p>count:{{ count }}</p>
  <button @click="count++"><BaseIcon />button</button>
</template>
<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
const count = ref(0)
</script>
