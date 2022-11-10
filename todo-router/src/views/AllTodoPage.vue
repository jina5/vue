<template>
  <div>
    <h1>모든 할일</h1>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
export default {
    name : 'AllTodoPage',
    components : {
      TodoForm, 
      TodoList,
    }
}
</script>

<style>

</style>