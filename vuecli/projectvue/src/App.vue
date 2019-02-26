<template>
  <div id="app">
    <navigator :navVal="activeNav"/>
<router-view @changeNav="change"/>
  </div>
</template>
<script>
import navigator from "@/components/Navigation.vue"
export default {
  components:{
    navigator
  },
   data () {
    return {
      activeNav:{
        title:"书籍",
        className:"book"
      }
    }
  },
  methods: {
   change(obj){
      this.activeNav.title=obj.title;
      this.activeNav.className=obj.className;
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
