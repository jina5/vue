<template>
  <div>
    <div class="container">
    <router-link :to="{name:'all'}">모든</router-link>
    <router-link :to="{name:'today'}">오늘</router-link>
    <router-link :to="{name:'important'}">중요</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name : 'SideBar'
}
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
}
</style>