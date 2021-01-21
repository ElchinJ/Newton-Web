<template>
  <div id="app">
    <div>
      <router-link  
      :to="'/books/' + book.id" 
      v-bind:style="{color:book.color}" 
      v-for="book in books" :key="book.id">
      <div class="container">
          {{book.title}} | 
      </div>
      </router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  // data() {
  //   bookColor: book.color
  // },
  computed: {
    books() {
      return this.$root.books
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  width: 80px;
  height: 150px;
  background-color: yellow;
  margin: 12px;
}
</style>
