<template>
  <div class="container">
    <div style="flex: 1;">
      <div class="vuedo_input">
        <div class="vuedo_input_wrapper">
          <input  type="text" 
                  placeholder="I wanna learn the awesome Vue.js..." 
                  v-model="newTodo" 
                  @keyup.enter="addTodo" />
        </div>
        <div class="border"></div>
      </div>

      <div class="vuedo-list">
        <div v-for="todo in todos" :key="todo.id" class="list">
          <label class="vuedo-material-checkbox">
            <input type="checkbox" v-model="todo.completed">
            <span></span>
          </label>
          <div class="text" :class="{completed: todo.completed}"> 
            {{ todo.text }}
            <span title="Remove list" class="delete-list" @click="removeTodo(todo)"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // localStorage persistence
  const STORAGE_KEY = 'vue-do-list-cnstack-2.0'
  const todoStorage = {
    fetch: function () {
      let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
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
    name: "TodoList",

    data() {
      return {
        newTodo: "",
        todos: todoStorage.fetch()
      };
    },

    watch: {
      todos: {
        handler: function (todos) {
          todoStorage.save(todos)
        },
        // Toogle checkbox
        deep: true
      }
    },

    methods: {
      addTodo() {
        // Check if user key in empty value on input?
        if (this.newTodo.trim() == "") return;
        
        // Store to localstorage
        this.todos.push({
          id: todoStorage.uid++,
          text: this.newTodo,
        });
        this.newTodo = "";
      },

      removeTodo: function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
      },

    },
  };
</script>

<style scoped>
  .container {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .vuedo-list {
    padding: 8px 0;
  }

  .vuedo-list .list:hover {
    background: #b6d3f0;
  }

  .vuedo-list .list {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .vuedo-list .list .text {
    padding: 0 8px;
    height: 35px;
    line-height: 35px;
    margin: 6px 0;
    cursor: default;
    flex: 1;
    position: relative;
  }

  .vuedo-list .list .text.completed {
    text-decoration: line-through;
  }

  .vuedo_input {
    margin: 6px 0;
    position: relative;
    border: 1px solid #e8f3ff;
    flex: 1;
  }

  .vuedo_input:focus-within .vuedo_input_wrapper {
    background: #fff;
  }

  .vuedo_input .vuedo_input_wrapper {
    background: #e8f3ff;
    padding: 0 15px;
    transition: background 0.3s;
  }

  .vuedo_input .vuedo_input_wrapper input {
    height: 35px;
    background: 0 0;
    border: none;
    color: #2c3e50;
    display: block;
    font-family: inherit;
    font-size: 16px;
    line-height: 16px;
    outline: 0;
    padding: 0;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .vuedo_input .border {
    background: #2896d7;
    transition: all 0.18s;
    bottom: -1px;
    height: 2px;
    left: 30%;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 30%;
  }

  .vuedo_input:focus-within .border {
    left: 0;
    right: 0;
    opacity: 1;
  }

  .vuedo-material-checkbox {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
  }

  .vuedo-material-checkbox > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    position: absolute;
    z-index: -1;
    left: -5px;
    top: -5px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    outline: none;
    opacity: 0;
    transform: scale(1);
    -ms-transform: scale(0); /* Graceful degradation for IE */
    transition: opacity 0.5s, transform 0.5s;
  }

  .vuedo-material-checkbox > input:checked {
    background-color: #2196f3;
  }

  .vuedo-material-checkbox > input:disabled {
    opacity: 0;
  }

  .vuedo-material-checkbox > input:disabled + span {
    cursor: initial;
  }

  .vuedo-material-checkbox > span::before {
    content: "";
    display: inline-block;
    margin-right: 15px;
    border: solid 2px rgba(0, 0, 0, 0.42);
    border-radius: 2px;
    width: 14px;
    height: 14px;
    vertical-align: -4px;
    transition: border-color 0.5s, background-color 0.5s;
  }

  .vuedo-material-checkbox > input:checked + span::before {
    border-color: #2896d7;
    background-color: #2896d7;
  }

  .vuedo-material-checkbox > input:active + span::before {
    border-color: #2896d7;
  }

  .vuedo-material-checkbox > input:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.42);
  }

  .vuedo-material-checkbox > span::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 10px;
    border: solid 2px transparent;
    border-left: none;
    border-top: none;
    transform: translate(5.5px, 1px) rotate(45deg);
    -ms-transform: translate(5.5px, 2px) rotate(45deg);
  }

  .vuedo-material-checkbox > input:checked + span::after {
    border-color: #fff;
  }

  .list .delete-list {
    display: none;
    position: absolute;
    right: -10px;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 35px;
    color: #e74c3c;
  }

  .list .delete-list:hover {
    color: #c0392b;
    cursor: pointer;
  }

  .list .delete-list:after {
    content: '×';
  }

  .list:hover .delete-list {
    display: inline-block;
  }
</style>