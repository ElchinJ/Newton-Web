<template>
      <div id="app">
        <Navigation/>
        <router-view/>
      </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {Navigation},
}
</script>

<style lang="scss">

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
