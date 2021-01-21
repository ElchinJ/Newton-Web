<template>
    <div class="container">
      <router-link  
      :to="'/books/' + book.id" 
      v-for="book in books" :key="book.id">
      <div class="container" v-bind:style="{backgroundColor: book.color}" >
          {{book.title}}
      </div>
      </router-link>

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

.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  width: 5rem;
  height: 12rem;
  margin: 12px;
}

</style>
