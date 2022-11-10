<template>
  <div class="item" >
    <div @click="todoClick">
    <div class="check_item"  >    
    <input type="checkbox" @click.stop="updateCompletedState"/>
    <span class="content" >{{ content }}</span>
    </div>
    <!--v-if로 하기-->
    <!-- <span v-if="todo.isImportant" 
    @click="updateImportantState">💛</span>
    <span v-if="!todo.isImportant"
    @click="updateImportantState">🤍</span>  -->
    <!--computed로 하기-->
    <button class="star" @click.stop="updateImportantState" >{{ star }} </button>
  </div>
    <!--class로 하기-->
    <!-- <span @click="updateImportantState" :class="{'star':todo.isImportant}">★</span> -->
    <TodoUpdateForm  @input-content="inputContent" :todo="todo" v-show="isTodoClick" />
  </div>
</template>

<script>
import TodoUpdateForm from "@/components/TodoUpdateForm.vue";

export default {
  name: "TodoListItem",
  data() {
    return {
      isTodoClick: false,
      content : this.todo.content,
    };
  },
  components: {
    TodoUpdateForm,
  },
  props: {
    todo: Object,
  },
  computed: {
    star() {
      return this.todo.isImportant ? "💚" : "🤍";
    },
  },
  methods: {
    updateCompletedState() {
      this.$store.dispatch("updateCompletedState", this.todo);
    },
    updateImportantState() {
      this.$store.dispatch("updateImportantState", this.todo);
    },
    todoClick() {
      this.isTodoClick = !this.isTodoClick;
    },
    inputContent(input){
        this.content=input
    }
  },
};
</script>

<style>
input[type=checkbox]{
    width:15px;
    height:15px;
    margin-right:20px;
    accent-color: rgb(0, 165, 0);
}
.item {
    margin:10px;
    padding:20px;
    text-align: left;
  border: 1px solid rgba(150, 150, 150, 0.598);
  border-radius: 10px;
}
/* .star {
    color:rgb(255, 208, 0)
} */
.check_item{
    display: inline-block;
    width:90%;
}
.star{
    border:0px;
    background: none;
    width:30px;
    height:30px;
    font-size:20px;
}
.content{
    display: inline-block;
    width:90%;

}

</style>