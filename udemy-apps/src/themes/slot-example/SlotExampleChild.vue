<template>
  <div>
    <button @click="pageCount = 1">1</button>
    <button @click="pageCount = 2">2</button>
    <button @click="pageCount = 3">3</button>
    <header>
      <!-- slotプロップスを定義することもできる -->
      <slot name="headerslot" :page-count="pageCount"></slot>
    </header>
    <slot>
      <!-- <slot name="default"> name指定ない場合はdefaultとなる -->
      <p>こちらはslotタグのデフォルト内容（フォールバックコンテンツ）</p>
    </slot>
    <!-- 名前付きスロットを定義することで複数のslotを指定可能 -->
    <slot name="header" :page-count="pageCount" />
    <slot name="main" />
    <slot name="footer" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const pageCount = ref(0)
</script>
<style scoped>
div {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0, 4);
  border-radius: 5px;
  padding: 16px;
}
</style>
