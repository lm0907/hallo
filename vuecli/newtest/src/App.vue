<template>
  <div id="app">
    <div id="nav">
    <button @click="back">click</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">自定义界面</router-link> | 
      <router-link to="/test">Test界面</router-link> |
      <router-link :to="{name:'test1',params:{name:'zs',age:'20'}}">子界面1</router-link>
      <router-link to="/test2/ls/25">子界面2</router-link> |
      <router-link to="/home/ww/12">重定向</router-link> |
      <router-link to="/abc">别名</router-link> |
      <router-link to="/error">404notfound</router-link>
      
    </div>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.push("/")
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s ease 1s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  opacity: 0;
}
}
</style>
