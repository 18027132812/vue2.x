const Marketing = [
  {
    path: 'marketing/discount',
    name: 'marketing-discount',
    component: resolve => require(['@/components/Views/Marketing/Discount/Discount'], resolve),
    meta: {
      title: '优惠券'
    }
  },
  {
    path: 'marketing/promotion',
    name: 'marketing-promotion',
    component: resolve => require(['@/components/Views/Marketing/Promotion/Promotion'], resolve),
    meta: {
      title: '商品促销'
    }
  },
  {
    path: 'marketing/group-buying',
    name: 'marketing-group-buying',
    component: resolve => require(['@/components/Views/Marketing/GroupBuying/GroupBuying'], resolve),
    meta: {
      title: '拼购管理'
    }
  },
  {
    path: 'marketing/completely',
    name: 'marketing-completely',
    component: resolve => require(['@/components/Views/Marketing/Completely/Completely'], resolve),
    meta: {
      title: '满减满折'
    }
  }
];

export default Marketing;
