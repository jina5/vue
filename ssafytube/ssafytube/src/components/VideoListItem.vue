<template>
<div @click = "select">
    <img :src="video.snippet.thumbnails.high.url" alt="">
    <p>{{video.snippet.title}}</p>
</div>
</template>

<script>
export default {
    name : "VideoListItem",
    props : {
        video : Object
    },
    methods : {
    select : function(){
        this.$emit('select',this.video)
    }
  }
}
</script>

<style>

</style>