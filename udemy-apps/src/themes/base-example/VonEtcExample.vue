<template lang="">
  <p>{{ count }}</p>
  <input type="text" @[eventName].space.delete="count++" />
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
const eventName = 'keyup'
</script>
<style lang=""></style>
