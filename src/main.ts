import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>',
});
