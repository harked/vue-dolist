<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
  // import Header from '../components/layout/Header'; Move header to public index
  import AddTodo from '../components/AddTodo';
  import Todos from '../components/Todos';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      // Header, Move header to public index
      AddTodo,
      Todos
    },
    data() {
      return {
        todos: [
          // {
          //   id: 1,
          //   title: "Learn Freecodecamp",
          //   completed: false
          // },
          // {
          //   id: 2,
          //   title: "Practice Hackerrank",
          //   completed: false
          // },
          // {
          //   id: 3,
          //   title: "Be a Topcoder",
          //   completed: false
          // },
        ]
      }
    },
    methods: {
      deleteTodo(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err));

        // this.todos = this.todos.filter(todo => todo.id !== id); comment out while using axios
      },
      addTodo(newTodo) {
        const {title, completed} = newTodo;

        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed
        })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));

        // this.todos = [...this.todos, newTodo]; comment out while using axios
      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>