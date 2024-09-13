<template>
  <ListHeader v-model="database"></ListHeader>
  <ListMain v-model="database"></ListMain>
  <ListFooter v-model="database"></ListFooter>
</template>

<script setup>
import ListHeader from './components/ListHeader.vue'
import ListMain from './components/ListMain.vue'
import ListFooter from './components/ListFooter.vue'
import { ref, onMounted, watch } from 'vue'
const database = ref([])
onMounted(() => {
  const keys = ref(
    Object.keys(localStorage).sort(function (a, b) {
      return parseInt(a) - parseInt(b)
    })
  )
  keys.value.forEach(key => {
    database.value.push({
      id: parseInt(key),
      content: key.slice(key.indexOf('-') + 1),
      done: localStorage.getItem(key) === 'true',
    })
  })
})
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
