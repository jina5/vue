<template>
  <div>
    <input type="text" v-model="search">
    <button @click="searchVideo">검색</button>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
export default {
    name: 'SearchBar',
    data:function(){
        return{
            search : null,
        }
    },
    methods : {
        searchVideo(){
            axios({
                method:'get',
                url:'https://www.googleapis.com/youtube/v3/search',
                params : {
                    part : 'snippet',
                    type : 'video',
                    q : this.search,
                    key : API_KEY
                }
            })
            .then((response)=>{
                this.$emit('search-video',response.data.items)
                this.search=''
            })
        }
    }
};
</script>

<style>
</style>