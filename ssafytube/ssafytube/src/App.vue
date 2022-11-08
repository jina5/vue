<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    <SearchBar @search-video = "search"/>
    <VideoDetail :video = "video" :videolist="videolist"/>
    <VideoList @select = "select" :videolist="videolist"/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import VideoList from '@/components/VideoList'
import VideoDetail from 'src/components/VideoDetail'
export default {
  name: 'App',
  components: {
    SearchBar,    
    VideoList,
    VideoDetail
  },
  data : function(){
    return{
      videolist : [],
      video : '',
    }
  },
  methods : {
    search(videolist){
      this.videolist = videolist
    },
    select(video){
      this.video = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
