const Store = [
  {
    path: 'store/detail',
    name: 'store-detail',
    component: resolve => require(['@/components/Views/Store/Detail/StoreDetail'], resolve),
    meta: {
      title: '店铺详情'
    }
  },
  {
    path: 'store/store-role',
    name: 'store-role',
    component: resolve => require(['@/components/Views/Store/UserRole/StoreRole'], resolve),
    meta: {
      title: '角色管理'
    }
  },
  {
    path: 'store/store-user',
    name: 'store-user',
    component: resolve => require(['@/components/Views/Store/UserRole/StoreUser'], resolve),
    meta: {
      title: '用户管理'
    }
  },
  {
    path: 'store/store-goods',
    name: 'store-goods',
    component: resolve => require(['@/components/Views/Store/Goods/StoreGoods'], resolve),
    meta: {
      title: '商品列表'
    }
  },
  {
    path: 'store/store-order',
    name: 'store-order',
    component: resolve => require(['@/components/Views/Store/Order/StoreOrder'], resolve),
    meta: {
      title: '店铺订单'
    }
  },
  {
    path: 'store/store-exchange',
    name: 'store-exchange',
    component: resolve => require(['@/components/Views/Store/Order/StoreExchange'], resolve),
    meta: {
      title: '退换货订单'
    }
  },
  {
    path: 'store/store-refund',
    name: 'store-refund',
    component: resolve => require(['@/components/Views/Store/Order/StoreRefund'], resolve),
    meta: {
      title: '退款单'
    }
  },
  {
    path: 'store/fitment-pc',
    name: 'fitment-pc',
    component: resolve => require(['@/components/Views/Store/Fitment/FitmentPc'], resolve),
    meta: {
      title: 'Pc商城店铺首页装修'
    }
  },
  {
    path: 'store/fitment-web',
    name: 'store-web',
    component: resolve => require(['@/components/Views/Store/Fitment/FitmentWeb'], resolve),
    meta: {
      title: '移动商城店铺首页装修'
    }
  }
];

export default Store;
