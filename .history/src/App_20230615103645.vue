<template>
  <div id="app">
      <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
      Todo,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.3s;
}
</style>