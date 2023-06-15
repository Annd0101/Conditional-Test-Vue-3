<template>
  <form class="add-form">
      <label>
          <h2>Title</h2>
          <input type="text" v-model="title" />
          <button class="cancel" @click="closeForm">Cancel</button>
          <button class="submit" @click="addTodo">Add</button>
      </label>
  </form>
</template>

<script>
export default {
  name: "TodoAdd",
  data: () => ({
      title: "",
  }),
  methods: {
      closeForm(e) {
          e.preventDefault();
          this.$emit("closeForm");
      },
      addTodo(e) {
          e.preventDefault();
          if (!this.title) {
              alert("Title is empty");
              return;
          }
          this.$emit("addTodo", this.title);
          this.title = "";
      },
  },
};
</script>

<style lang="scss" scoped>
.add-form {
  padding: 20px 0;
  input {
      width: 90%;
      margin: 15px 0;
      padding: 12px;
      border: 2px solid gray;
      background-color: rgb(247, 247, 247);
  }
  input:focus {
      border: 2px solid gray;
      outline: none;
  }
  button {
      display: inline-block;
      width: 80px;
      margin: 0 5px;
      padding: 7px;
      outline: none;
      border: none;
      border-radius: 2px;
  }
  button:hover {
      cursor: pointer;
  }
  button.cancel {
      background-color: rgb(175, 175, 175);
  }
  button.cancel:hover {
      background-color: rgb(145, 145, 145);
  }
  button.submit {
      background-color: rgb(166, 166, 240);
  }
  button.submit:hover {
      background-color: rgb(130, 130, 236);
  }
}
</style>