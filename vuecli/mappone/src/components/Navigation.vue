<template>
    <div :class="activeClass">
        <header>
            <span @click="routerPush(btnList[0])">首页</span>
            <h1>{{propsal}}</h1>
        </header>
        <nav>
            <ul>
                <li :class="{'active':item.className==activeClass}" v-for="(item,index) in btnList" :key="index" @click="routerPush(item)">{{item.name}}</li>
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
            activeClass:"book",
            btnList:[{name:"书籍",routerPath:"/",className:"book"},{name:"电影",routerPath:"/movie",className:"movie"}
            ,{name:"音乐",routerPath:"/music",className:"music"},{name:"聊天",routerPath:"/chat",className:"chat"}]
        }
    },props:["navVal"],
    methods: {
        routerPush(item){
            this.$router.push(item.routerPath);
            this.activeClass=item.className;
            this.activeName=item.name;
        }
    },
    computed: {
        propsal(){
            return this.navVal.title;
        }
    },
    watch: {
        propsal(){
            this.activeName=this.navVal.title;
            this.activeClass=this.navVal.className;
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
    left: 20px;

}
    nav{
    bottom: 0;
}
nav ul{
    width: 100%;
}
nav ul li{
    float: left;
    list-style: none;
    width: 25%;
    height: 1rem;
    line-height: 1rem;
    color:#ddd;
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
  .active{
      color: #fff;
      font-weight: 200;
      font-size: 20px;
  }
</style>