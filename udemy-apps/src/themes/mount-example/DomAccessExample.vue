<template>
  <input ref="user-input" type="text" />
</template>
<script setup>
import { onMounted, useTemplateRef } from 'vue'

const userInput = useTemplateRef('user-input')
console.log(userInput.value)
onMounted(() => {
  console.log(userInput.value)
  // テキストボックスにフォーカスが当たる
  userInput.value.focus()
})
</script>
