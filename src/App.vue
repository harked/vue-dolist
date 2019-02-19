<template>
  <div id="todo-app">
    <div class="main-nav vuedo-nav">
      <router-link class="vuedo-nav-menu" to="/"> To-do </router-link>
      <router-link class="vuedo-nav-menu" to="/about"> About </router-link>
      <router-link class="vuedo-nav-menu" to="/contact"> Contact </router-link>
    </div>

    <img alt="Vue logo" src="./assets/todo-cloud-hero.png">
    <p class="title"> What are You going <span class="blue-todo">to-Do</span> when you are not saving the world? </p>

    <router-view />
    <TodoList />
  </div>
</template>

<script>
  import TodoList from "./views/TodoList.vue";

  export default {
    name: "todo-app",
    components: {
      TodoList
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-family: Karla, sans-serif;
    font-size: 16px;
    margin: 0;
  }

  #todo-app {
    max-width: 500px;
    margin: 50px auto;
    padding: 0 10px;
  }

  img {
    display: block;
    height: 80px;
    margin: 0 auto 15px auto;
  }

  p.title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .blue-todo {
    color: #2896d7;
  }

  .strong {
    font-weight: bold;
  }

  .vuedo-nav {
    margin: 0 30px 50px 30px;
    text-align: center;
  }

  .vuedo-nav .vuedo-nav-menu {
    text-decoration: none;
    margin: 0 30px;
    border-radius: 0;
    padding: 10px;
    color: #2896d7;
    font-weight: bold;
  }
  .vuedo-nav .vuedo-nav-menu:hover {
    text-decoration: none;
    margin: 0 30px;
    background-color: #2896d7;
    color: #fff;
  }
</style>