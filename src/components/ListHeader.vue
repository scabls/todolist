<template>
  <header>
    <h1>Todo List</h1>
    <section>
      <input
        type="text"
        placeholder="请输入待办事项"
        v-model.trim="content"
        @keyup.enter="addToDatabase(content)"
      />
      <button @click="addToDatabase(content)">添加</button>
    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const database = defineModel()
const content = ref('')
let id = 0
const addToDatabase = newItem => {
  if (newItem) {
    if (database.value.length == 0) {
      id = 0
    } else {
      id = database.value[database.value.length - 1].id + 1
    }
    if (database.value.findIndex(item => item.content == newItem) != -1) alert('该任务已经被添加了')
    else {
      database.value.push({ id: id, content: newItem, done: false })
      localStorage.setItem(`${id++}-${newItem}`, false)
    }
    content.value = ''
  }
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
header section {
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
header section button:active {
  outline: 2px solid gold;
}
</style>
