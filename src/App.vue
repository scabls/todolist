<template>
  <TodoHeader />
  <TodoMain>
    <draggable :list="todos" animation="300" item-key="id">
      <template #item="{ element }">
        <TodoItem v-bind="element"></TodoItem>
      </template>
    </draggable>
  </TodoMain>
  <TodoFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos.js'

import draggable from 'vuedraggable'

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoItem from './components/TodoItem.vue'
import TodoFooter from './components/TodoFooter.vue'

// 解构状态, 使用storeToRefs
const { todos } = storeToRefs(useTodosStore())
// 解构方法, 使用调用store函数
const { getTodos } = useTodosStore()

onMounted(() => getTodos())
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
