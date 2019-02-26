<template>
    <div>
        <h3>电影名称:{{datacollection.original_title}}</h3>
        电影类型:<span v-for="(item,index) in datacollection.genres" :key="index">{{item}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datacollection:{}
        }
    },
    created(){
        this.getData()
    },methods: {
        getData(){
            let url=`https://api.douban.com/v2/movie/subject/${this.$route.params.transid}`;
        let proxy = 'https://bird.ioliu.cn/v2?url=';
        axios({url:proxy+url,method:"post"}
        ).then((res)=>{
            this.datacollection=res.data
            console.log(res)
        })
        }
    },
}
</script>