<template>
  <TodoHeader @add-todo="handleAddTodo" />
  <TodoMain>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      v-bind="todo"
      @toggle="handleToggle"
      @edit="handleEdit"
      @del="handleDel"
    />
  </TodoMain>
  <TodoFooter
    :todos="todos"
    @toggle-all="handleToggleAll"
    @clear-done="handleClearDone"
    @clear-all="handleClearAll"
  />
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
const handleDel = id =>
  todos.value.splice(
    todos.value.findIndex(todo => todo.id === id),
    1
  )
const handleToggleAll = checked => todos.value.forEach(todo => (todo.done = checked))
const handleClearDone = () => (todos.value = todos.value.filter(todo => !todo.done))
const handleClearAll = () => (todos.value = [])
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
