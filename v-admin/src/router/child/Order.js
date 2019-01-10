const Order = [
  {
    path: 'order/tally',
    name: 'order-tally',
    component: resolve => require(['@/components/Views/Order/Tally/Tally'], resolve),
    meta: {
      title: '标签管理'
    }
  },
  {
    path: 'order/logistics/ship-address',
    name: 'ship-address',
    component: resolve => require(['@/components/Views/Order/Logistics/ShipAddress'], resolve),
    meta: {
      title: '发货地址'
    }
  },
  {
    path: 'order/logistics/freight-template',
    name: 'freight-template',
    component: resolve => require(['@/components/Views/Order/Logistics/FreightTemplate'], resolve),
    meta: {
      title: '运费模板'
    }
  },
  {
    path: 'order/transaction/order-list',
    name: 'order-list',
    component: resolve => require(['@/components/Views/Order/Transaction/OrderList'], resolve),
    meta: {
      title: '订单列表'
    }
  },
  {
    path: 'order/transaction/machinery-order',
    name: 'machinery-order',
    component: resolve => require(['@/components/Views/Order/Transaction/MachineryOrder'], resolve),
    meta: {
      title: '设备订单'
    }
  },
  {
    path: 'order/transaction/compared-order',
    name: 'compared-order',
    component: resolve => require(['@/components/Views/Order/Transaction/ComparedOrder'], resolve),
    meta: {
      title: '原料订单'
    }
  },
  {
    path: 'order/transaction/purchase-order',
    name: 'purchase-order',
    component: resolve => require(['@/components/Views/Order/Transaction/PurchaseOrder'], resolve),
    meta: {
      title: '应用订单'
    }
  },
  {
    path: 'order/exchange/sales-return-list',
    name: 'sales-return-list',
    component: resolve => require(['@/components/Views/Order/Exchange/SalesReturnList'], resolve),
    meta: {
      title: '退货列表'
    }
  },
  {
    path: 'order/exchange/change-list',
    name: 'change-list',
    component: resolve => require(['@/components/Views/Order/Exchange/ChangeList'], resolve),
    meta: {
      title: '换货列表'
    }
  },
  {
    path: 'order/refund/refund-list',
    name: 'refund-list',
    component: resolve => require(['@/components/Views/Order/Refund/RefundList'], resolve),
    meta: {
      title: '退款列表'
    }
  }
];

export default Order;
