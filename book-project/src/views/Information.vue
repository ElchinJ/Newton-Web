<template>
  <div class="information">
    <h1>This is an information page</h1>
    <p>{{ books }}</p>
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
