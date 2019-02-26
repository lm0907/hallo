<template>
    <div>
        this is a movie page
    </div>
</template>
<script>
export default {
    created() {
        let obj={
            title:"电影",
            className:"movie"
        }
        this.$emit("changeNav",obj)
    },
}
</script>