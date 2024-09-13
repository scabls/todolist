<template>
  <footer v-if="database.length != 0">
    <input type="checkbox" :checked="allDone" @click="manageDone" />
    <span>已办事项{{ completed }}/全部事项{{ database.length }}</span>
    <button @click="clearDone">清除已办</button>
    <button @click="clearAll">清除所有</button>
  </footer>
</template>

<script setup>
const database = defineModel()
import { ref, computed } from 'vue'
const completed = computed(() => {
  if (database.value.length == 0) return null
  else return database.value.filter(item => item.done == true).length
})
const allDone = computed(() => completed.value == database.value.length)
const manageDone = () => {
  const keys = ref(Object.keys(localStorage))
  if (allDone.value) {
    database.value.forEach(item => (item.done = false))
    keys.value.forEach(key => localStorage.setItem(key, false))
  } else {
    database.value.forEach(item => (item.done = true))
    keys.value.forEach(key => localStorage.setItem(key, true))
  }
}
const clearDone = () => {
  database.value = database.value.filter(item => item.done == false)
  const keys = ref(Object.keys(localStorage))
  keys.value.forEach(key => {
    if (localStorage.getItem(key) === 'true') localStorage.removeItem(key)
  })
}
const clearAll = () => {
  database.value = []
  localStorage.clear()
}
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
</style>
