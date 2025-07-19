<template>
  <p>count:{{ foo }}</p>
</template>
<script setup>
defineProps({
  foo: {
    type: Number,
    required: true,
    default: 100, // 指定しなければ'undefined'が設定される
  },
})
</script>
