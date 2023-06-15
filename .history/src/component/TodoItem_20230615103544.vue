<template>
  <div :class="'todo-item ' + (todo.completed ? 'completed' : '')" @dblclick="switchCompleted">
      <p>{{ todo.title }}</p>
      <i class="fas fa-trash-alt" @click="deleteConfirm"></i>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
      todo: Object,
  },
  methods: {
      deleteConfirm() {
          if (confirm(`Delete ${this.todo.title} ?`))
              this.$emit("deleteTodo", this.todo.id);
      },
      switchCompleted() {
          this.$emit("switchCompleted", this.todo.id)
      }
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  width: 90%;
  margin: auto;
  padding: 12px 0;
  margin-top: 10px;
  box-shadow: 2px 2px 5px rgb(175, 175, 175);
  border-left: none;
  p {
      display: inline-block;
  }
  i {
      float: right;
      padding-right: 10px;
      color: rgb(241, 241, 241);
  }
}
.todo-item:hover {
  background-color: rgb(209, 209, 209);
  i {
      color: red;
      cursor: pointer;
  }
}
.completed {
  border-left: 6px solid rgb(50, 224, 50);
}
</style>