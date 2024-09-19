import { ref, computed, watch } from 'vue'
export default function useTodos() {
  // 定义状态
  const todos = ref([])

  // 定义计算属性
  const allDone = computed(() => todos.value.every(todo => todo.done))
  const doneCount = computed(() => todos.value.filter(todo => todo.done).length)
  const allCount = computed(() => todos.value.length)

  // 定义方法
  const getTodos = () => (todos.value = JSON.parse(localStorage.getItem('todoLists') || '[]'))
  const addTodo = todo => todos.value.push(todo)
  const toggleTodo = (id, checked) => (todos.value.find(todo => todo.id === id).done = checked)
  const editTodo = (id, content) => (todos.value.find(todo => todo.id === id).content = content)
  const removeTodo = id =>
    todos.value.splice(
      todos.value.findIndex(todo => todo.id === id),
      1
    )
  const toggleAll = checked => todos.value.forEach(todo => (todo.done = checked))
  const clearDone = () => (todos.value = todos.value.filter(todo => !todo.done))
  const clearAll = () => (todos.value = [])

  watch(
    todos,
    () => {
      localStorage.setItem('todoLists', JSON.stringify(todos.value))
    },
    { deep: true }
  )

  return {
    todos,
    allDone,
    doneCount,
    allCount,
    getTodos,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
    toggleAll,
    clearDone,
    clearAll,
  }
}
