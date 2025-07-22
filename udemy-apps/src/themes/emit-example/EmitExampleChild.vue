<template>
  <!-- 関数名を親に渡すことが可能 -->
  <button @click="$emit('reset')">Reset</button>
  <!-- 関数名と一緒にパラメータを親に渡すことも可能 -->
  <button @click="$emit('plus', 5)">+5</button>
  <button @click="emitReset()">+10</button>
</template>
<script setup>
const emit = defineEmits(['reset', 'plus', 'plusTen'])
console.log(emit)
function emitReset() {
  emit('plusTen', 10)
}
</script>
