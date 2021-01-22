<template>
    <article>
        <div v-if="book">
            <div class="singleBookContainer" v-bind:style="{backgroundColor: book.color}">
                {{book.author}}
            </div>
            
        </div>
        <div v-else>No book found</div>
    </article>
</template>

<script>
    export default {
        name: 'bookInfo',
        computed: {
            book() {
                return this.$root.books.find(book => book.id == this.$route.params.id)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>