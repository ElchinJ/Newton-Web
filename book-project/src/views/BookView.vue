<template>
<div class="container">
      <router-link  
      :to="'/books/' + book.id" 
      v-for="book in books" :key="book.id">
      <div class="container" v-bind:style="{backgroundColor: book.color}" >
          <span>
            <h2>{{book.title}}</h2> 
            <p>{{book.author}}</p>
          </span>
      </div>
      </router-link>
  </div>
    
</template>

<script>
    export default {
        name: 'bookView',
        computed: {
            books() {
                return this.$root.books
            }
        }
    }
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  width: 7rem;
  height: 12rem;
  margin: 12px;

  h2 {
    font-size: 22px;
    align-content: center;
    text-decoration: none;
  };
  p {
    font-size: 12px;
    text-align: center;
  }
}
</style>