<template>
  <!-- definePropsの属性は子コンポーネントへは継承されない -->
  <ChildComponent :foo="count" bar="Hello"/>
  <button @click="count++">button</button>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './PropsExampleChild.vue';
const count = ref(0)
</script>
