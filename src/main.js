import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import apiService from './services/apiService'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import BootstrapVue from "bootstrap-vue"

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.prototype.$apiservice = apiService;

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created(){
    // this.$router.push({path:'/login'})
  }
}).$mount('#app')
