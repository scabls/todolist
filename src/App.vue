<template>
  <TodoHeader @add-todo="handleAddTodo" />
  <TodoMain>
    <draggable :list="todos" animation="300" item-key="id">
      <template #item="{ element }">
        <TodoItem
          v-bind="element"
          @toggle="handleToggle"
          @edit="handleEdit"
          @del="handleDel"
        ></TodoItem>
      </template>
    </draggable>
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
import draggable from 'vuedraggable'
import useTodos from './hooks/useTodos'

const {
  todos,
  handleAddTodo,
  handleToggle,
  handleEdit,
  handleDel,
  handleToggleAll,
  handleClearDone,
  handleClearAll,
} = useTodos()
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
