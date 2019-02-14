<template>
    <div class="todo-container">
        <h1> Move forward today! </h1>
        <div v-bind:key="list.id" v-for="list in todos">
            <Todoitem v-bind:todo="list" />
        </div>
    </div>
</template>

<script>
import Todoitem from './Todoitem.vue';

export default {
    name: "Todos",
    components: {
        Todoitem
    },
    props: ["todos"]
}
</script>

<style scoped>
    .todo-container > h1 {
        margin: 10px 0;
    }
</style>