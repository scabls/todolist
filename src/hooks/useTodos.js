import { ref, onMounted, watch } from 'vue'
export default function useTodos() {
  const todos = ref([])
  const getTodos = () => {
    const todoLists = JSON.parse(localStorage.getItem('todoLists') || '[]')
    todos.value = todoLists
  }
  const handleAddTodo = todo => todos.value.push(todo)
  const handleToggle = (id, checked) => (todos.value.find(todo => todo.id === id).done = checked)
  const handleEdit = (id, content) => (todos.value.find(todo => todo.id === id).content = content)
  const handleDel = id =>
    todos.value.splice(
      todos.value.findIndex(todo => todo.id === id),
      1
    )
  const handleToggleAll = checked => todos.value.forEach(todo => (todo.done = checked))
  const handleClearDone = () => (todos.value = todos.value.filter(todo => !todo.done))
  const handleClearAll = () => (todos.value = [])
  watch(
    todos,
    () => {
      localStorage.setItem('todoLists', JSON.stringify(todos.value))
    },
    { deep: true }
  )
  onMounted(() => {
    getTodos()
  })
  return {
    todos,
    getTodos,
    handleAddTodo,
    handleToggle,
    handleEdit,
    handleDel,
    handleToggleAll,
    handleClearDone,
    handleClearAll,
  }
}
