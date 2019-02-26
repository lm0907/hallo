<template>
    <div>
        this is a music page
    </div>
</template>
<script>
export default {
    created() {
        let obj={
            title:"音乐",
            className:"music"
        }
        this.$emit("changeNav",obj)
    },
}
</script>