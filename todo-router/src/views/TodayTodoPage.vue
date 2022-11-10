<template>
  <div>
    <h1>오늘 할일</h1>
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
    name : 'TodayTodoPage',
    components:{
      TodoForm, TodoListItem
    },
    computed:{
        todos(){
            return this.$store.getters.getTodayTodos
    },
    }
}
</script>

<style>

</style>