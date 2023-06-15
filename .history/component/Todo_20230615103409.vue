<template>
    <div class="container">
        <h1>Todo</h1>

        <div class="list" v-if="!isLoading">
            <TodoItem
                v-for="(todo, index) in todoList"
                :key="index"
                :todo="todo"
                @deleteTodo="deleteTodo"
                @switchCompleted="switchCompleted"
            />
            <TodoAdd
                v-if="isShowForm"
                @closeForm="isShowForm = false"
                @addTodo="addTodo"
            />
            <i
                class="fas fa-plus"
                @click="isShowForm = true"
                v-if="!isShowForm"
            ></i>
        </div>

        <Loading v-else />
    </div>
</template>

<script>
import TodoItem from "./TodoItem";
import Loading from "./Loading";
import TodoAdd from "./TodoAdd.vue";
import { getData } from "../helpers/apiService";

export default {
    name: "Todo",
    data: () => ({
        todoList: null,
        isLoading: true,
        isShowForm: false,
    }),
    components: {
        TodoItem,
        Loading,
        TodoAdd,
    },
    methods: {
        deleteTodo(id) {
            this.todoList = this.todoList.filter((todo) => todo.id !== id);
            //sap xep lai id
            this.todoList = this.todoList.map((todo) => {
                if (todo.id > id)
                    todo.id -= 1;
                return todo;
            })
            console.table(this.todoList);
        },
        switchCompleted(id) {
            this.todoList.map((todo) => {
                if (todo.id === id) todo.completed = !todo.completed;
            });
            console.table(this.todoList);
        },
        addTodo(title) {
            this.todoList.push({
                id: this.todoList.length + 1,
                title,
                completed: false
            })
            console.table(this.todoList);
        },
    },
    created() {
        setTimeout(() => {
            getData()
                .then((data) => {
                    this.todoList = data;
                    this.isLoading = false;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }, 2000);
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 600px;
    height: fit-content;
    margin: auto;
    margin-top: 50px;
    background-color: rgb(241, 241, 241);
    box-shadow: 2px 2px 10px rgb(202, 202, 202);
    border-radius: 5px;
    text-align: center;
    h1 {
        text-align: center;
        padding: 10px 0;
    }
    i {
        font-size: 40px;
        padding: 20px 0;
        color: rgb(10, 131, 10);
    }
    i:hover {
        cursor: pointer;
    }
}
</style>