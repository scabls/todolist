<template>
  <main>
    <template v-if="database.length != 0">
      <ul>
        <li
          v-for="(item, index) in database"
          :key="item.id"
          draggable="true"
          @dragstart="handleDragStart(index)"
          @dragover.prevent
          @drop="handleDrop(index)"
        >
          <input type="checkbox" v-model="item.done" />
          <span
            v-if="editingId != item.id"
            @click="editingId = item.id"
            :class="{ done: item.done }"
          >
            {{ item.content }}
          </span>
          <input
            type="text"
            v-else
            v-model.trim="item.content"
            v-focus
            @blur="handleEdit(item.content)"
            @keyup.enter="handleEdit(item.content)"
          />
          <button @click="database.splice(index, 1)">删除</button>
        </li>
      </ul>
    </template>
    <h2 v-else>暂无待办事项</h2>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
const vFocus = {
  mounted(el) {
    // el表示应用指令的dom
    el.focus()
  },
}
const database = defineModel()

const editingId = ref(null)
const draggedIndex = ref(null)

const getDatabase = () => (database.value = JSON.parse(localStorage.getItem('todoLists') || '[]'))
const handleEdit = content => {
  if (!content) return alert('任务内容不能为空')
  if (
    database.value.findIndex(item => item.content == content) !=
    database.value.findLastIndex(item => item.content == content)
  )
    return alert('该任务已经被添加了')
  editingId.value = null
}

const handleDragStart = index => {
  draggedIndex.value = index
}
const handleDrop = index => {
  if (draggedIndex.value !== null) {
    const draggedItem = database.value[draggedIndex.value]
    database.value.splice(draggedIndex.value, 1)
    database.value.splice(index, 0, draggedItem)
    draggedIndex.value = null
  }
}

watch(database, () => localStorage.setItem('todoLists', JSON.stringify(database.value)), {
  deep: true,
})

onMounted(() => getDatabase())
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
  white-space: normal;
  word-break: break-word;
  transition: 0.1s;
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
ul li button:hover {
  background-color: pink;
  color: #fff;
}
ul li button:active {
  outline: 2px solid gold;
}
</style>
