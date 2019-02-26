<template>
  <div id="app">
    <navigator :navVal="bindNav"/>
    <router-view @changeNav="change"/>
  </div>
</template>
<script>
import navigator from "@/components/Navigation.vue"
export default {
  components:{
    navigator
  },
  data() {
    return {
      bindNav:{
        title:"书籍",
        className:"book"
      }
    }
  },
  methods: {
      change(obj){
        this.bindNav.title=obj.title;
        this.bindNav.className=obj.className;
      }
    },
}
</script>
<style>
#app {
  color: #2c3e50;
  padding:1rem 0;
}
</style>
