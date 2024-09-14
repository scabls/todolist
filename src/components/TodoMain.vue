<template>
  <main>
    <ul>
      <slot></slot>
    </ul>
    <h2>暂无待办事项</h2>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  color: #333;
}
main h2 {
  padding: 1rem;
  text-align: center;
}
ul {
  list-style: none;
}
</style>
