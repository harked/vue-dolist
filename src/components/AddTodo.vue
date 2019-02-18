<template>
    <div class="v-add-todo-container">
        <form @submit="addTodo">
            <input type="text" v-model="newTodo" placeholder="Learn the awesome Vue.js..." @keyup.enter="addTodo">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// localStorage persistence
const STORAGE_KEY = 'vue-do-list-cnstack-2.0'
const todoStorage = {
    fetch: function () {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

export default {
    name: "AddTodo",

    data() {
      return {
        last_id: 0,
        newTodo: "",
        editTodoCache: "",
        todos: todoStorage.fetch()
      };
    },

    watch: {
      todos: {
        handler: function (todos) {
          todoStorage.save(todos)
        },
        deep: true
      }
    },

    methods: {
        addTodo(e) {
            e.preventDefault();

            // Check if user key in empty value on input?
            if (this.newTodo.trim() == "") return;

            // Store to localstorage
            this.todos.push({
            id: todoStorage.uid++,
            text: this.newTodo,
            components: false,
            editing: false
            });
            this.newTodo = "";
        }
    }
}
</script>

<style scoped>
    div.v-add-todo-container {
        padding: 20px;
    }

    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
        background-color: #2896d7;
    }
</style>