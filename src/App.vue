<template>
  <div class="container" v-if="todos.length">
    <h1>Todo list</h1>
    <div class="content">

      <p
        v-for="(todo, index) in todos"
        :key="todo.title"
        @dblclick="markDone(todo)"
        :class="{ markDone: todo.completed }"
      >
        {{ todo.title }}
        <i class="fas fa-x" @click="removeTodo(index)"></i>
      </p>
      
      <button class="showbutton" @click="isShowForm = true">
        <i class="fas fa-plus"></i>
      </button>
      
      <form v-if="isShowForm">
        <label class="label">
          <h2>Title</h2>
          <input type="text" v-model="newTodo" />
          <button class="cancel" @click.prevent="isShowForm = false">
            Cancel
          </button>
          <button class="add" @click.prevent="addTodo">Add</button>
        </label>
      </form>

    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const todos = ref([]);
const isShowForm = ref(false);
const newTodo = ref("");
// fetch data
const getAllTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5&_delay=3000"
    );
    todos.value = await response.json();
  } catch (err) {
    console.log(err);
  }
};
getAllTodos();
// add new item
const addTodo = () => {
  if (newTodo.value == "") {
    alert("Title is empty");
    return;
  } else {
    todos.value.push({
      id: todos.value.length + 1,
      title: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
  }
};
// mark completed item
const markDone = (todo) => {
  todo.completed = !todo.completed;
};
// remove item
const removeTodo = (index) => {
  if (confirm("Delete todo ?")) {
    todos.value.splice(index, 1);
  }
};
</script>

<style scoped>
.container {
  width: 40%;
  height: 50%;
  margin: auto;
  background-color: rgb(250, 248, 248);
  border: 2px solid;
  border-radius: 15px 15px;
  text-align: center;
}
.showbutton {
  height: 80px;
  cursor: pointer;
  border: none;
  margin-left: 5px;
  background-color: #fff;
}
.showbutton i {
  font-size: 50px;
}
p {
  position: relative;
  background: #fffdfd;
  width: 95%;
  margin: auto;
  padding: 12px 0;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid;
  border-radius: 5px;
}
p i {
  position: absolute;
  right: -600px;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3 ease;
}
p:hover i {
  right: 5px;
}

input[type="text"] {
  display: flex;
  width: 70%;
  height: 50px;
  margin: auto;
}
.cancel {
  background-color: rgb(142, 142, 210);
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
}
.add {
  background-color: rgb(77, 77, 247);
  color: #fff;
  margin-left: 10px;
}

.markDone {
  border-left: 10px solid greenyellow;
}
</style>
