<template>
  <div>
    <input type="checkbox" 
    @click="updateCompletedState">
    <span @click="todoClick">{{todo.content}}</span>
    <!--v-if로 하기-->
    <span v-if="todo.isImportant" 
    @click="updateImportantState">💛</span>
    <span v-if="!todo.isImportant"
    @click="updateImportantState">🤍</span> 
    <!--computed로 하기-->
    <span @click="updateImportantState"> {{star}} </span>
    
    <TodoUpdateForm :todo="todo" v-show="isTodoClick"/>
  </div>
</template>

<script>
import TodoUpdateForm from '@/components/TodoUpdateForm.vue'

export default {
    name : 'TodoListItem',
    data(){
        return{
            isTodoClick:false,
        }
    },
    components : {
        TodoUpdateForm,
    },
    props:{
        todo : Object,
    },
    computed : {
        star(){
            return this.todo.isImportant ? '💛' : '🤍'
        }
    },
    methods : {
        updateCompletedState(){
            this.$store.dispatch("updateCompletedState",this.todo)
        },
        updateImportantState(){
            this.$store.dispatch("updateImportantState",this.todo)
        },
        todoClick(){
            this.isTodoClick=!this.isTodoClick
        }
    }
}
</script>

<style>

</style>