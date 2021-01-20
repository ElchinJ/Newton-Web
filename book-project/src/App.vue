<template>
  <div id="app">
    <nav>
      <router-link to="/">Navigation</router-link> |
      <router-link to="/Information">Information</router-link> |
      <router-link to="´/books/´ + book.id" v-for="book in books" :key="book.id">{{book.title}} | </router-link>
    </nav>

    <router-view/>
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
</style>
