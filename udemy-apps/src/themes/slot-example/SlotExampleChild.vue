<template>
  <div>
    <slot>
      <!-- <slot name="default"> name指定ない場合はdefaultとなる -->
      <p>こちらはslotタグのデフォルト内容（フォールバックコンテンツ）</p>
    </slot>
    <!-- 名前付きスロットを定義することで複数のslotを指定可能 -->
    <slot name="header" />
    <slot name="main" />
    <slot name="footer" />
  </div>
</template>
<style scoped>
div {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0, 4);
  border-radius: 5px;
  padding: 16px;
}
</style>
