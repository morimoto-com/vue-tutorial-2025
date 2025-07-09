<template>
  <div class="box">
    <header>
      <slot name="header">デフォルトのヘッダー</slot>
    </header>

    <main>
      <slot>デフォルトの本文</slot>
    </main>

    <footer>
      <slot name="footer">デフォルトのフッター</slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 1rem;
}
header {
  background: #f0f0f0;
  padding: 0.5rem;
}
footer {
  background: #f9f9f9;
  padding: 0.5rem;
}
</style>
