<template>
  <div id="app">
    <nav>
      <SideBar/>
    </nav>
    <div class="view"><router-view/></div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
  components:{
    SideBar
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
  display: flex;
}

nav {
  width: 100px;
  height: 700px;
  padding: 30px;
  margin: 10px;
  border: 1px black solid;
  border-radius: 20px;
}

.view {
  width: 800px;
  padding: 30px;
  margin: 10px;
  border: 1px black solid;
  border-radius: 20px;

}
nav a {
  font-weight: bold;
  color: #000000;
  font-size:30px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
