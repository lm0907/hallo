<template>
    <div>
        this is a chat page
    </div>
</template>
<script>
export default {
    created() {
        let obj={
            title:"聊天",
            className:"chat"
        }
        this.$emit("changeNav",obj)
    },
}
</script>