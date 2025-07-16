<!-- Computed -->
<template lang="">
  <p>{{ count1 }}</p>
  <p>{{ count2 }}</p>
  <p>{{ count3 }}</p>
  <button @click="count1++">count1 +1</button>
  <button @click="count2++">count2 +1</button>
  <button @click="count3++">count3 +1</button>
</template>
<script setup>
import { ref, watchEffect, watch } from 'vue'
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)
// watch:引数を２つとる。引数に指定された
watch(count1, () => {
  console.log('watch')
  console.log(count1.value, count2.value, count3.value)
})
// watchEffect:Computedとほとんど同じ動き
watchEffect(() => {
  console.log('watchEffect')
  console.log(count1.value, count2.value, count3.value)
  setTimeout(() => {
    console.log('after 1 second')
  }, 1000)
})
</script>
<style lang=""></style>
