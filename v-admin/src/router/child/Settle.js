const Settle = [
  {
    path: 'settle/reconcile/income-reconcile',
    name: 'reconcile-income-reconcile',
    component: resolve => require(['@/components/Views/Settle/Reconcile/IncomeReconcile'], resolve),
    meta: {
      title: '收入对帐'
    }
  },
  {
    path: 'settle/reconcile/refund-reconcile',
    name: 'reconcile-refund-reconcile',
    component: resolve => require(['@/components/Views/Settle/Reconcile/RefundReconcile'], resolve),
    meta: {
      title: '退款对帐'
    }
  },
  {
    path: 'settle/reconcile/expend-reconcile',
    name: 'reconcile-expend-reconcile',
    component: resolve => require(['@/components/Views/Settle/Reconcile/ExpendReconcile'], resolve),
    meta: {
      title: '支出对帐'
    }
  },
  {
    path: 'settle/reconcile/settle-reconcile',
    name: 'reconcile-settle-reconcile',
    component: resolve => require(['@/components/Views/Settle/Reconcile/SettleReconcile'], resolve),
    meta: {
      title: '结算对帐'
    }
  },
  {
    path: 'settle/management/settle-list',
    name: 'management-settle-list',
    component: resolve => require(['@/components/Views/Settle/Management/SettleList'], resolve),
    meta: {
      title: '结算列表'
    }
  },
  {
    path: 'settle/management/settle-apply',
    name: 'management-settle-apply',
    component: resolve => require(['@/components/Views/Settle/Management/SettleApply'], resolve),
    meta: {
      title: '结算申请'
    }
  },
  {
    path: 'settle/management/serve-settle',
    name: 'management-serve-settle',
    component: resolve => require(['@/components/Views/Settle/Management/ServeSettle'], resolve),
    meta: {
      title: '服务结算'
    }
  },
  {
    path: 'settle/management/serve-settle-approve',
    name: 'management-serve-settle-approve',
    component: resolve => require(['@/components/Views/Settle/Management/ServeSettleApprove'], resolve),
    meta: {
      title: '服务结算审批'
    }
  }
];

export default Settle;
