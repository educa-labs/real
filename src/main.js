import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

import Icon from './components/global/Icon.vue';
Vue.component('app-icon', Icon);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
