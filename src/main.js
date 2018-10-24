import Vue from 'vue';
import store from '@store';
import router from '@router';

// API
import API from '@API';
Vue.prototype.$API = API;

// AnimeJS
import anime from 'animejs';
Vue.prototype.$a = anime; // Abbreviation

// Vue MQ (https://github.com/AlexandreBonaventure/vue-mq)
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    mobile: 992,
    desktop: Infinity,
  },
});

// Vue ScrollTo (https://github.com/rigor789/vue-scrollto)
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

// Vue Scroll Reveal (https://github.com/tserkov/vue-scroll-reveal)
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal);

// Global Components
import Icon from '@components/global/Icon';
Vue.component('app-icon', Icon);

import Logo from '@components/global/Logo';
Vue.component('app-logo', Logo);

// Stylesheets
import '@stylesheets/index.sass';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
