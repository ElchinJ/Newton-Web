<template>
    <div>
        <router-link to="/home"></router-link>
        <router-link to="/bookView"></router-link>
        <router-link to="/bookInfo"></router-link>
    </div>
</template>

<script>
    export default {
        computed: {
            books() {
                return this.$root.books
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>