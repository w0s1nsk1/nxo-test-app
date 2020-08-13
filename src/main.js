import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://192.168.180.2:9000';

Vue.prototype.$http = axios;

sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
