<template>
    <div>
    <h1>Test页面</h1>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    beforeRouteEnter: (to, from, next) => {
        console.log(123456);
        next();
      },
      beforeRouteLeave :(to, from, next) => {
           console.log(654321);
        next();
       }
}
</script>