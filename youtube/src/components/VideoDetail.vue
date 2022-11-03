<template>
  <div>
    <iframe id="player" type="text/html" width="640" height="360"
  :src="`http://www.youtube.com/embed/${video.id.videoId}`"></iframe>
  </div>
</template>

<script>
export default {
    name : "VideoDetail",
    props : {
    videolist : Object,
    video : Object,
     },
}
</script>

<style>

</style>