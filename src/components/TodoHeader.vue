<template>
  <header class="todo-header">
    <h1>TodoList</h1>
    <section class="add-todo">
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model.tirm="content" />
        <button>添加</button>
      </form>
    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'
const { addTodo } = useTodosStore()
const content = ref('')
const handleSubmit = () => {
  if (!content.value) return
  addTodo({
    id: Date.now(),
    content: content.value,
    done: false,
  })
  content.value = ''
}
</script>

<style scoped>
header {
  background-image: linear-gradient(to right top, lightblue, skyblue);
  padding: 1rem;
  text-align: center;
}
header h1 {
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 1px lightpink;
}
header section form {
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 2rem;
}
header section input {
  flex-basis: 20rem;
  padding: 0.5rem;
  border: 1px solid lightpink;
  border-radius: 0.5rem;
}
header section input:focus {
  outline: 2px solid gold;
}
header section button {
  flex-basis: 4rem;
  background-color: #fff;
  border: 1px solid lightpink;
  color: skyblue;
  border-radius: 0.5rem;
  cursor: pointer;
}
header section button:hover {
  color: lightpink;
}
header section button:active {
  outline: 2px solid gold;
}
</style>
