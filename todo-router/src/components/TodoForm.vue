<template>
  <div>
    + <input class="todo_add" 
    type="text"
    v-model.trim="content"
    @keyup.enter = "createTodo"
    placeholder=" 할 일을 작성해주세요!"
    >
    <hr>
  </div>
</template>

<script>
export default {
    name : 'TodoForm',
    data(){
        return {
            content :null,
        }
    },
    methods : {
        createTodo(){
            if (this.content){
                this.$store.dispatch('createTodo',this.content)
            }
            this.content=null
        }
    }
}
</script>

<style>
.todo_add{
    width: 400px;
    height:40px;
    border : 2px solid rgb(159, 159, 159);
    border-radius: 10px;
}
</style>