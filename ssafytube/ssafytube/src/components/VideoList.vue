<template>
  <ul>
    <VideoListItem
      v-for="(video, index) in videolist"
      :key="index"
      @select="select"
      :video="video"
    />
  </ul>
</template>

<script>
import VideoListItem from "@/components/VideoListItem";
export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  props: {
    videolist: Object,
  },
  methods : {
    select : function(video){
        this.$emit('select',video)
    }
  }
};
</script>

<style>
</style>