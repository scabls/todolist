<template>
  <main>
    <template v-if="database.length != 0">
      <ul>
        <li v-for="(item, index) in database" :key="item.id">
          <input type="checkbox" v-model="item.done" />
          <span
            v-if="editing != item.id"
            @click="handleClick(item.id)"
            :class="{ done: item.done }"
            >{{ item.content }}</span
          >
          <input type="text" v-else v-model="item.content" ref="inputText" @blur="editing = null" />
          <button @click="database.splice(index, 1)">删除</button>
        </li>
      </ul>
    </template>
    <h2 v-else>暂无待办事项</h2>
  </main>
</template>

<script setup>
import { ref, nextTick } from 'vue'
const database = defineModel()
const editing = ref(null)
const inputText = ref(null)
const handleClick = id => {
  editing.value = id
  nextTick(() => {
    if (inputText.value) inputText.value[0].focus()
  })
}
</script>

<style scoped>
main {
  color: #333;
}
main h2 {
  padding: 1rem;
  text-align: center;
}
ul {
  list-style: none;
}
ul li {
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #eee;
}
ul li:hover {
  background-color: #ddd;
}
ul li span {
  flex: 1;
  padding: 0 1rem;
}
ul li span.done {
  color: lightcoral;
  text-decoration: line-through;
}
ul li input[type='text'] {
  flex: 1;
  margin: 0 1rem;
  border: 1px solid lightpink;
  color: deepskyblue;
  border-radius: 5px;
  outline: 1px solid lightpink;
}
ul li button {
  padding: 0.2rem 0.8rem;
  background-color: #fff;
  border: 1px solid lightpink;
  color: #333;
  font-size: 0.85rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
