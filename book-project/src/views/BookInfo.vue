<template>
        <div v-if="book">
            <article>
            <router-link
            id="backBtn"
            to="/books"
            tag="button">
            <input type="image" src="@/assets/backButton2.png"/>
            </router-link>
            <div class="singleBookContainer" v-bind:style="{backgroundColor: book.color}">
                <span class="bookCover">
                    <h2>{{book.title}}</h2> 
                    <p>{{book.author}}</p>
                </span>
            </div>
            <div class="singleBookHeader">
                <h1>{{book.title}}</h1>
                <h2>By {{book.author}}</h2>
                <p class="bookPlot">{{book.plot}}</p>
            </div>
            
            <div class="information">
                <p id="p1">Audience: {{book.audience}}</p>
                <p id="p2">First published: {{book.year}}</p>
                <p id="p3">Pages: {{book.pages}}</p>
                <p id="p4">Publisher: {{book.publisher}}</p>
            </div>
            <button id="readItBtn">Oh, I want to read it!</button>
            </article>
        </div>
        <div v-else>No book found</div>
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
    article {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto auto auto auto;
    }

    .singleBookContainer {
            grid-column: 1;
            grid-row: 2/7;
            height: 30rem;
            width: 20rem;
            margin: 0.5
        }

    .singleBookHeader {
        grid-column: 2;
        grid-row: 2
    }

    .bookPlot {
        grid-column: 3;
        grid-row: 2;
        height: 15rem
    }

    .information {
        grid-column: 2;
        grid-row: 3;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        background-color: grey;
    }

    .bookCover {
        h2 {
            font-size: 2rem
        };
        
        p {
        font-size: 0.9rem;
        text-align: left;
        }
    }
    

    #backBtn {
        grid-column: 1;
        grid-row: 1;
        width: 3rem
    }

    #readItBtn {
        grid-column: 2;
        grid-row: 6;
        width: 9rem;
        margin: 0.5rem
    }
    
    
</style>