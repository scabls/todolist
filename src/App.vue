<template>
  <ListHeader v-model="database"></ListHeader>
  <ListMain v-model="database"></ListMain>
  <ListFooter v-model="database"></ListFooter>
</template>

<script setup>
import ListHeader from './components/ListHeader.vue'
import ListMain from './components/ListMain.vue'
import ListFooter from './components/ListFooter.vue'
import { ref } from 'vue'
const database = ref([])
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
