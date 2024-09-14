<template>
  <footer v-if="todos.length">
    <input type="checkbox" :checked="allDone" @change="toggleAll" />
    <span>已办事项{{ doneCount }}/全部事项{{ allCount }}</span>
    <button @click="$emit('clear-done')">清除已办</button>
    <button @click="$emit('clear-all')">清除所有</button>
  </footer>
  <h2 v-else>暂无待办事项</h2>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  todos: {
    type: Array,
    require: true,
    default: () => [],
  },
})
const emit = defineEmits(['toggle-all', 'clear-done', 'clear-all'])
const allDone = computed(() => props.todos.every(todo => todo.done))
const doneCount = computed(() => props.todos.filter(todo => todo.done).length)
const allCount = computed(() => props.todos.length)
const toggleAll = event => emit('toggle-all', event.target.checked)
</script>

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
h2 {
  padding: 1rem;
  text-align: center;
}
</style>
