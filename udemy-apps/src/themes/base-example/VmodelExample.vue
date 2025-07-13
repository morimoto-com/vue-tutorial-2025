<template lang="">
  <p>{{ userInput }}</p>
  <input type="text" v-model="userInput" />
  <button v-on:click="userInput = 'hi'">button</button>
</template>
<script setup>
import { ref } from 'vue'
const userInput = ref('')
</script>
