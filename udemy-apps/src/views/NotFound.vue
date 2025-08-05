<template>
  <h2>NotFound</h2>
  <p>{{ catchAll }}</p>
</template>
<script setup>
defineProps({
  // C:\Users\morim\git\vue-tutorial-2025\udemy-apps\src\router\index.js
  // に定義した名称
  catchAll: {
    type: Array,
    required: true,
  },
})
</script>
<style></style>
