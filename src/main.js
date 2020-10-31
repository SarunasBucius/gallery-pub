import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bulma from 'bulma'

Vue.use(bulma)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
