import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import VueLazyload from 'vue-lazyload';
import store from './store/store';
import { post, upLoad } from './common/js/api';
import { scrollTop } from './common/js/v';
import './common/css/style.less';
import 'iview/dist/styles/iview.css';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/v-lazy.png',
  loading: '/static/img/v-lazy.png',
  attempt: 1
});

Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$upLoad = upLoad;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
  const sTop = document.documentElement.scrollTop || document.body.scrollTop;
  scrollTop(window, sTop, 0, 500);
  document.title = route.meta.title;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
