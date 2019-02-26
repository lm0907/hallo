<template>
    <div :class="activeClass">
        <header>
            <span @click="routerPush(btnList[0])">首页</span>
            <h1>{{propsVal}}</h1>
        </header>
        <nav>
            <ul>
                <li :class="{'active':item.className==activeClass}" v-for=" (item,index) in btnList" :key="index" @click="routerPush(item)">{{item.name}}</li>
            </ul>
            </nav>
    </div>
</template>
<script>
export default {
    navigator,
    data() {
        return {
            activeName:"书籍",
            btnList:[{name:"书籍",routerPath:"/",className:"book"},{name:"电影",routerPath:"/movie",className:"movie"},
            {name:"音乐",routerPath:"/music",className:"music"},{name:"聊天",routerPath:"/chat",className:"chat"}],
            activeClass:"book"
        }
    },
    props: ['navVal'],
    methods: {
        routerPush(item){
            this.$router.push(item.routerPath);
            this.activeClass=item.className;
            this.activeName=item.name;  
        },
        
    },
  computed: {
    propsVal(){
      return this.navVal.title
    }
  },
  watch: {
    propsVal(){
      this.activeClass = this.navVal.className;
      this.activeTitle = this.navVal.title;
    }
  },
}
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
header,nav{
    position: fixed;
    left: 0;
    background-color:  rgb(33, 150, 243);
    width: 100%;
    height: 1rem;
    color:#fff;
    text-align: center;
    line-height: 1rem;
}
header{
    top: 0;
}
header span{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
}
nav{
    bottom: 0;
}
  .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .chat header,.chat nav{
    background-color: rgb(63, 81, 181);
  }
nav ul{
    width: 100%;
}
nav li{
    list-style: none;
    float: left;
    width: 25%;
    height: 1rem;
    line-height: 1rem;
    color:#ddd;
}
nav li.active{
    font-weight: 200;
    color:#fff;
    font-size: 16px;
}
</style>
