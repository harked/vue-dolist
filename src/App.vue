<template>
  <div id="app">
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
  import Todos from './components/Todos';

  export default {
    name: 'app',
    components: {
      Todos
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            title: "Learn Freecodecamp",
            completed: false
          },
          {
            id: 2,
            title: "Practice Hackerrank",
            completed: false
          },
          {
            id: 3,
            title: "Be a Topcoder",
            completed: false
          },
        ]
      }
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
</style>