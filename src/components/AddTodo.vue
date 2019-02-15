<template>
    <div class="v-add-todo-container">
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid'; comment while using jsonplaceholder

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();

            const newTodo = {
                // id: uuid.v4(), comment while using jsonplaceholder
                title: this.title,
                completed: false
            }
            // Send up to parent
            this.$emit('add-todo', newTodo)

            // clear input after submit
            this.title = '';
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
    }
</style>