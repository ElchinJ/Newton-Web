import Vue from 'vue'
import App from './App.vue'
import router from './router'
import booksJSON from './assets/books.json'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      books: booksJSON.books,
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
