<template>
  <h1>v-model</h1>
  <CustomInput v-model.uppercase="userInput" v-model:title-name="titleInput" />
  <p>userInput:{{ userInput }}</p>
  <p>titleInput:{{ titleInput }}</p>
  <button @click="userInput = 'Hello'">Hello</button>
</template>
<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
const userInput = ref('Hello')
const titleInput = ref('Title')
</script>
<style></style>
