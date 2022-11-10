<template>
  <div class="about">
    <button @click="toHome"> 프로그래밍 방식으로 Home으로!</button>
    <input 
    type="text"
    @keyup.enter = "Hello"
    v-model="input"
    >
  </div>
</template>
<script>
export default {
  name : 'AboutView',
  data(){
    return{
      input : null,
    }
  },
  methods : {
    toHome(){
      this.$router.push({name : 'home'})
    },
    Hello(){
      this.$router.push({name:'hello',params : {userName : this.input }})
      // this.$router.push( {path : `hello/${this.input}`})
    }
  }
}
</script>