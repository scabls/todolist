<template>
  <li>
    <input type="checkbox" :checked="done" @change="handleChange" />
    <input
      type="text"
      v-if="isEditing"
      v-focus
      :value="content"
      @keyup.enter="handleEdit"
      @blur="handleEdit"
    />
    <span v-else @click="isEditing = true">{{ content }}</span>
    <button>删除</button>
  </li>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['toggle', 'edit'])
// 实现一个自定义的指令。约定: 在setup中, 如果一个变量为vFocus 就表示一个自定义指令
// 指令都是应用于dom元素的, 可以扩展dom元素功能
// 指令是一个对象
const vFocus = {
  mounted(el) {
    // el表示应用指令的dom
    el.focus()
  },
}
const isEditing = ref(false)
const handleChange = event => emit('toggle', props.id, event.target.checked)
const handleEdit = event => {
  isEditing.value = false
  emit('edit', props.id, event.target.value)
}
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #eee;
}
li:hover {
  background-color: #ddd;
}
li span {
  flex: 1;
  padding: 0 1rem;
}
li span.done {
  color: lightcoral;
  text-decoration: line-through;
}
li input[type='text'] {
  flex: 1;
  margin: 0 1rem;
  border: 1px solid lightpink;
  color: deepskyblue;
  border-radius: 5px;
  outline: 1px solid lightpink;
}
li button {
  padding: 0.2rem 0.8rem;
  background-color: #fff;
  border: 1px solid lightpink;
  color: #333;
  font-size: 0.85rem;
  border-radius: 5px;
  cursor: pointer;
}
li button:hover {
  background-color: pink;
  color: #fff;
}
li button:active {
  outline: 2px solid gold;
}
</style>
