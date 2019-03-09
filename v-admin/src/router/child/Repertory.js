const Repertory = [
  {
    path: 'repertory/repertory-type',
    name: 'repertory-type',
    component: resolve => require(['@/components/Views/Repertory/Management/RepertoryType'], resolve),
    meta: {
      title: '仓库类型'
    }
  },
  {
    path: 'repertory/repertory-text',
    name: 'repertory-text',
    component: resolve => require(['@/components/Views/Repertory/Management/RepertoryText'], resolve),
    meta: {
      title: '仓库信息'
    }
  },
  {
    path: 'repertory/stock-init',
    name: 'stock-init',
    component: resolve => require(['@/components/Views/Repertory/Stock/StockInit'], resolve),
    meta: {
      title: '库存初始化'
    }
  },
  {
    path: 'repertory/stock-management',
    name: 'stock-management',
    component: resolve => require(['@/components/Views/Repertory/Stock/StockManagement'], resolve),
    meta: {
      title: '库存管理'
    }
  },
  {
    path: 'repertory/stock-adjust',
    name: 'stock-adjust',
    component: resolve => require(['@/components/Views/Repertory/Stock/StockAdjust'], resolve),
    meta: {
      title: '库存调整'
    }
  },
  {
    path: 'repertory/stock-check',
    name: 'stock-check',
    component: resolve => require(['@/components/Views/Repertory/Stock/StockCheck'], resolve),
    meta: {
      title: '库存盘点'
    }
  },
  {
    path: 'repertory/stock-lock',
    name: 'stock-lock',
    component: resolve => require(['@/components/Views/Repertory/Stock/StockLock'], resolve),
    meta: {
      title: '库存锁定'
    }
  },
  {
    path: 'repertory/in-stock',
    name: 'in-stock',
    component: resolve => require(['@/components/Views/Repertory/Stock/InStock'], resolve),
    meta: {
      title: '入库管理'
    }
  },
  {
    path: 'repertory/out-stock',
    name: 'out-stock',
    component: resolve => require(['@/components/Views/Repertory/Stock/OutStock'], resolve),
    meta: {
      title: '出库管理'
    }
  },
  {
    path: 'repertory/allot-management',
    name: 'allot-management',
    component: resolve => require(['@/components/Views/Repertory/Stock/AllotManagement'], resolve),
    meta: {
      title: '调拨管理'
    }
  }
];

export default Repertory;
