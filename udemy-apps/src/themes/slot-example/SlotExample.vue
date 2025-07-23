<template>
  <h1>Slots</h1>
  <SlotExampleChild>
    <!-- defaultはtemplate指定不要 -->
    <h2>Hello</h2>
    <p>How are you?</p>
    <template v-slot:header>
      <h2>header</h2>
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
