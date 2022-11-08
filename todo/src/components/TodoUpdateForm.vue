<template>
  <div> 
    <button @click="update">수정하기</button>
    <input type="text" v-model="content"> 
    <input type="date" v-model="date">
    </div>
</template>

<script>
export default {
    name : 'TodoUpdateForm',
    props : {
        todo : Object,
    },
    data(){
        return{
            thistodo : this.todo,
            content : this.todo.content,
            date : this.todo.dueDateTime.slice(0,10)
        }
    },
    methods : {
        update(){
            this.thistodo.content = this.content
            this.thistodo.dueDateTime = this.date
            this.$store.dispatch('update',this.thistodo)
        }
    }

}
</script>

<style>

</style>