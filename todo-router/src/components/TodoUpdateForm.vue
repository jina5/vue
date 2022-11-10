<template>
  <div class="update"> 
    <span class="content_input">
        <input type="text" v-model="content" @keyup="inputContent"> 
        <button @click="reset">↩</button>
    </span>
    <input type="date" v-model="date"> 
    <button @click="update">수정하기</button>
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
            date : this.todo.dueDateTime
        }
    },
    methods : {
        update(){
            this.thistodo.content = this.content
            this.thistodo.dueDateTime = this.date
            this.$store.dispatch('update',this.thistodo)
            alert('수정 완!')
            const div = document.querySelectorAll('.update')
            div.forEach(d => {
                d.style.display='none'
            });
        },
        inputContent(){
            this.$emit('input-content',this.content)
        },
        reset(){
            this.content=this.todo.content
        }
    }

}
</script>

<style>
.update{
    display: flex;
    flex-direction: column;
    padding:10px;
}
.update *{
    height:20px;
    border: 1px solid gray;
    border-radius: 5px;
}
.update input{
    padding:10px;
}
.update button{
    margin-top:10px;
    height:25px;
    font-weight: bold;
    background-color:rgb(172, 201, 183);
    color: white;
}
.content_input{
    height:100%;
    margin-bottom:10px;
}
.content_input button{
    color: black;
}
.content_input input{
    width:90%;
    border:none;
}
</style>