<template>
  <header class="todo-header">
    <h1>TodoList</h1>
    <section class="add-todo">
      <input type="text" />
      <button>添加</button>
    </section>
  </header>
  <main>
    <ul>
      <li><input type="checkbox" /><span>待办事项1</span><button>删除</button></li>
    </ul>
    <h2>暂无待办事项</h2>
  </main>
  <footer>
    <input type="checkbox" />
    <span>已办事项0/全部事项1</span>
    <button>清除已办</button>
    <button>清除所有</button>
  </footer>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-image: linear-gradient(to right top, lightblue, skyblue);
  padding: 1rem;
  text-align: center;
}
header h1 {
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 1px lightpink;
}
header section {
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 2rem;
}
header section input {
  flex-basis: 20rem;
  padding: 0.5rem;
  border: 1px solid lightpink;
  border-radius: 0.5rem;
}
header section input:focus {
  outline: 2px solid gold;
}
header section button {
  flex-basis: 4rem;
  background-color: #fff;
  border: 1px solid lightpink;
  color: skyblue;
  border-radius: 0.5rem;
  cursor: pointer;
}
header section button:hover {
  color: lightpink;
}
header section button:active {
  outline: 2px solid gold;
}

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
ul li button:hover {
  background-color: pink;
  color: #fff;
}
ul li button:active {
  outline: 2px solid gold;
}

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
footer button:hover {
  background-color: pink;
  color: #fff;
}
footer button:active {
  outline: 2px solid gold;
}
</style>
