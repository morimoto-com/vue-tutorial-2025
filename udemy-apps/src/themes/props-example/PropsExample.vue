<template>
  <!-- definePropsの属性は子コンポーネントへは継承されない -->
  <ChildComponent :foo="count" bar="Hello" />
  <!-- 子コンポーネントでキャメルケースで定義された属性はケバブケースで指定することが推奨される。（HTMLの属性値は大文字小文字判別ないため、類似属性との混在が懸念される。） -->
  <ValidationChild :foo-count="count" bar="Hello" />
  <button @click="count++">button</button>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './PropsExampleChild.vue'
import ValidationChild from './PropsValidationChildExample.vue'
const count = ref(0)
</script>
