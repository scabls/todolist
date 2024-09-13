<template>
  <main>
    <template v-if="database.length != 0">
      <ul>
        <li v-for="(item, index) in database" :key="item.id">
          <input type="checkbox" :checked="item.done" @click="changeDone(item)" />
          <span v-if="editing != item.id" @click="handleClick(item.id)" :class="{ done: item.done }"
            >{{ item.content }}
          </span>
          <input
            type="text"
            v-else
            v-model.trim="item.content"
            ref="inputText"
            @blur="handleBlur(item.id, item.content, item.done)"
          />
          <button @click="deleteTodo(index, item.id, item.content)">删除</button>
        </li>
      </ul>
    </template>
    <h2 v-else>暂无待办事项</h2>
  </main>
</template>

<script setup>
import { ref, nextTick } from 'vue'
const database = defineModel()
const changeDone = item => {
  item.done = !item.done
  localStorage.setItem(`${item.id}-${item.content}`, item.done)
}
const editing = ref(null)
const inputText = ref(null)
const handleClick = id => {
  editing.value = id
  nextTick(() => {
    if (inputText.value) inputText.value[0].focus()
  })
}
const handleBlur = (id, content, done) => {
  if (content) {
    if (
      database.value.findIndex(item => item.content == content) !=
      database.value.findLastIndex(item => item.content == content)
    )
      alert('该任务已经被添加了')
    else {
      const keys = ref(Object.keys(localStorage))
      const oldKey = keys.value.find(key => parseInt(key) == id)
      localStorage.removeItem(oldKey)
      localStorage.setItem(`${id}-${content}`, done)
      editing.value = null
    }
  } else alert('任务内容不能为空')
}
const deleteTodo = (index, id, content) => {
  database.value.splice(index, 1)
  localStorage.removeItem(`${id}-${content}`)
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
