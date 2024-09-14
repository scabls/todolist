<template>
  <TodoHeader @add-todo="handleAddTodo" />
  <TodoMain />
  <TodoFooter />
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue'
const todos = ref([])
const handleAddTodo = todo => {
  todos.value.push(todo)
  console.log(todos.value)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
