<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{count}}</h1>
    <h3>{{count1}}</h3>
    <button @click="add(10)">click</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  // methods:{
  //   add(){
  //     this.$store.commit("add",10)
  //   }
  // },
  // computed: {
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },

  // computed: mapState({
  //   count:state=>state.count
  // }),

  // computed:mapState(["count"]),
  

  methods: {
    ...mapMutations(['add']),
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count1'])
  }
}
</script>
