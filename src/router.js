import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './views/TodoList.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
