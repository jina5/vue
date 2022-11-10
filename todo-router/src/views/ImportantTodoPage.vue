<template>
  <div>
    <h1>중요 할일</h1>
    <TodoForm/>
    <TodoListItem
    v-for = "(todo,index) in todos"
    :key = "index" 
    :todo = "todo"
    />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoListItem from '@/components/TodoListItem.vue'

export default {
    name : 'ImportantTodoPage',
    components:{
      TodoForm, TodoListItem
    },
    computed : {
        todos(){
            const temp = this.$store.state.todo.todos
            const todos = temp.filter((todo) => {
              return todo.isImportant
            } )
            return todos
        }
    }
}
</script>

<style>

</style>