const Statistics = [
  {
    path: 'statistics/merchant-income',
    name: 'statistics-merchant-income',
    component: resolve => require(['@/components/Views/Statistics/MerchantIncome'], resolve),
    meta: {
      title: '商家收入统计'
    }
  },
  {
    path: 'statistics/store-income',
    name: 'statistics-store-income',
    component: resolve => require(['@/components/Views/Statistics/StoreIncome'], resolve),
    meta: {
      title: '店铺收入统计'
    }
  },
  {
    path: 'statistics/commodity-transaction',
    name: 'statistics-commodity-transaction',
    component: resolve => require(['@/components/Views/Statistics/CommodityTransaction'], resolve),
    meta: {
      title: '商品交易统计'
    }
  },
  {
    path: 'statistics/raw-transaction',
    name: 'statistics-raw-transaction',
    component: resolve => require(['@/components/Views/Statistics/RawTransaction'], resolve),
    meta: {
      title: '原料交易统计'
    }
  },
  {
    path: 'statistics/equipment-transaction',
    name: 'statistics-equipment-transaction',
    component: resolve => require(['@/components/Views/Statistics/EquipmentTransaction'], resolve),
    meta: {
      title: '设备共享交易统计'
    }
  },
  {
    path: 'statistics/design-service-transaction',
    name: 'statistics-design-service-transaction',
    component: resolve => require(['@/components/Views/Statistics/DesignServiceTransaction'], resolve),
    meta: {
      title: '设计服务交易统计'
    }
  },
  {
    path: 'statistics/apply-transaction',
    name: 'statistics-apply-transaction',
    component: resolve => require(['@/components/Views/Statistics/ApplyTransaction'], resolve),
    meta: {
      title: '应用交易统计'
    }
  }
];

export default Statistics;
