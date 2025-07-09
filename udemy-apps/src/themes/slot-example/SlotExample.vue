<template>
  <div>
    <h2>Slot Example</h2>
    <SlotExampleChild>
      <template #header>
        <h3>これは親から渡された Header スロットです</h3>
      </template>

      <p>これはデフォルトスロット（子に挿入）です。</p>

      <template #footer>
        <small>フッター領域 - 親が提供</small>
      </template>
    </SlotExampleChild>
  </div>
</template>

<script>
import SlotExampleChild from './SlotExampleChild.vue';

export default {
  components: {
    SlotExampleChild
  }
};
</script>
