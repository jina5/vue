<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to = "{ name : 'CreateView' }">[Create]</router-link>
    <hr>
    <Articlelist/>
  </div>
</template>

<script>
import Articlelist from "@/components/ArticleList"

export default {
  name: 'ArticleView',
  components: {
    Articlelist,
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles(){
      if (this.isLogin===true){
      this.$store.dispatch('getArticles')
      } else {
        alert('로그인이 필요한 서비스입니다.')
        this.$router.push({ name : 'LogInView'})
      }
    }
  }
}
</script>

<style>

</style>
