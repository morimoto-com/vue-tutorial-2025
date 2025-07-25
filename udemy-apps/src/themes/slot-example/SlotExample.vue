<template>
  <h1>Slots</h1>
  <SlotExampleChild>
    <!-- defaultはtemplate指定不要 -->
    <h2>Hello</h2>
    <p>How are you?</p>
    <template #headerslot="slotProps">
      <p>pageCount:{{ slotProps.pageCount }}</p>
    </template>
    <template v-slot:header="slotProps">
      <h2 v-if="slotProps.pageCount === 1">header1</h2>
      <h2 v-if="slotProps.pageCount === 2">header2</h2>
      <h2 v-if="slotProps.pageCount === 3">header3</h2>
    </template>
    <template #main>
      <h2>main</h2>
    </template>
    <template #footer>
      <h2>footer</h2>
    </template>
  </SlotExampleChild>
</template>
<script setup>
import SlotExampleChild from './SlotExampleChild.vue'
</script>
