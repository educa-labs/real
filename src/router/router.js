import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import routes from './routes'; // Routes

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0, };
  },
});
