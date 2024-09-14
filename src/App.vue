<template>
  <TodoHeader @add-todo="handleAddTodo" />
  <TodoMain>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      v-bind="todo"
      @toggle="handleToggle"
      @edit="handleEdit"
    />
  </TodoMain>
  <TodoFooter />
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoItem from './components/TodoItem.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue'
const todos = ref([])
const handleAddTodo = todo => todos.value.push(todo)
const handleToggle = (id, checked) => (todos.value.find(todo => todo.id === id).done = checked)
const handleEdit = (id, content) => (todos.value.find(todo => todo.id === id).content = content)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
