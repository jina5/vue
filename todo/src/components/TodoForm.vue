<template>
  <div>
    <input 
    type="text"
    v-model.trim="content"
    @keyup.enter = "createTodo"
    placeholder="할 일을 작성해주세요!"
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

</style>