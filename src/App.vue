<template>
  <div id="todo-app">
    <img alt="Vue-dolist!" src="./assets/todo-cloud-hero.png">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: "todo-app",
  components: {
    Header
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
</style>