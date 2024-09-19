import { defineStore, acceptHMRUpdate } from 'pinia'
import useTodos from '@/hooks/useTodos'

export const useTodosStore = defineStore('todos', () => useTodos())

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot))
}
