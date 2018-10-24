import Vue from 'vue';
import App from './App.vue';
import store from '@store';
import router from '@router';

// Vue Scroll Reveal (https://github.com/tserkov/vue-scroll-reveal)
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal);

// Vue ScrollTo (https://github.com/rigor789/vue-scrollto)
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

// Vue MQ (https://github.com/AlexandreBonaventure/vue-mq)
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    mobile: 992,
    desktop: Infinity,
  },
});

// AnimeJS
import anime from 'animejs';
Vue.prototype.$a = anime; // Abbreviation

// Global Components
import Icon from '@components/global/Icon';
Vue.component('app-icon', Icon);

import Logo from '@components/global/Logo';
Vue.component('app-logo', Logo);

// Stylesheets
import '@stylesheets/index.sass';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
