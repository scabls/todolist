<template>
  <footer>
    <input type="checkbox" />
    <span>已办事项0/全部事项1</span>
    <button>清除已办</button>
    <button>清除所有</button>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  background-color: rgb(173, 216, 230, 0.6);
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  color: #333;
}
footer span {
  flex: 1;
  padding: 0 1rem;
}
footer button {
  padding: 0.2rem 0.8rem;
  background-color: #fff;
  margin-left: 0.5rem;
  border: 1px solid lightpink;
  color: #333;
  font-size: 0.85rem;
  border-radius: 5px;
  cursor: pointer;
}
footer button:hover {
  background-color: pink;
  color: #fff;
}
footer button:active {
  outline: 2px solid gold;
}
</style>
