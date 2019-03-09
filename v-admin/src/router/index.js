import Vue from 'vue'
import Router from 'vue-router'
import Goods from './child/Goods';
import Merchant from './child/Merchant';
import Repertory from './child/Repertory';
import Order from './child/Order';
import Advices from './child/Advices';
import Information from './child/Information';
import Marketing from './child/Marketing';
import Statistics from './child/Statistics';
import Settle from './child/Settle';
import Store from './child/Store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: resolve => require(['@/components/Views/index'], resolve),
      children: [
        {
          path: '/',
          name: 'index',
          component: resolve => require(['@/components/Views/Index/index'], resolve),
          meta: {
            title: '首页'
          }
        },
        ...Goods,
        ...Merchant,
        ...Repertory,
        ...Order,
        ...Advices,
        ...Information,
        ...Marketing,
        ...Statistics,
        ...Settle,
        ...Store
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/Login/Login'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/Login/Register'], resolve),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: resolve => require(['@/components/Login/Forget'], resolve),
      meta: {
        title: '密码找回'
      }
    },
    {
      path: '*',
      component: resolve => require(['@/components/NotFind/404'], resolve),
      meta: {
        title: '错误页面'
      }
    }
  ]
})
