const Merchant = [
  {
    path: 'merchant/detail',
    name: 'text-index',
    component: resolve => require(['@/components/Views/Merchant/Text/TextIndex'], resolve),
    meta: {
      title: '商家详情'
    }
  },
  {
    path: 'merchant/change-password',
    name: 'text-index',
    component: resolve => require(['@/components/Views/Merchant/Safe/ChangePassword'], resolve),
    meta: {
      title: '修改密码'
    }
  },
  {
    path: 'merchant/change-password',
    name: 'text-index',
    component: resolve => require(['@/components/Views/Merchant/Safe/ChangePassword'], resolve),
    meta: {
      title: '修改密码'
    }
  },
  {
    path: 'merchant/group',
    name: 'merchant-group',
    component: resolve => require(['@/components/Views/Merchant/Account/MerchantGroup'], resolve),
    meta: {
      title: '业务组管理'
    }
  },
  {
    path: 'merchant/person',
    name: 'merchant-person',
    component: resolve => require(['@/components/Views/Merchant/Account/MerchantPerson'], resolve),
    meta: {
      title: '人员管理'
    }
  },
  {
    path: 'merchant/merchant-enter',
    name: 'enter-one',
    component: resolve => require(['@/components/Views/Merchant/Enter/child/EnterOne'], resolve),
    meta: {
      title: '商户入驻'
    }
  },
  {
    path: 'merchant/merchant-enter/two',
    name: 'enter-two',
    component: resolve => require(['@/components/Views/Merchant/Enter/child/EnterTwo'], resolve),
    meta: {
      title: '商户入驻'
    }
  },
  {
    path: 'merchant/merchant-enter/three',
    name: 'enter-three',
    component: resolve => require(['@/components/Views/Merchant/Enter/child/EnterThree'], resolve),
    meta: {
      title: '商户入驻'
    }
  },
  {
    path: 'merchant/merchant-enter/four',
    name: 'enter-four',
    component: resolve => require(['@/components/Views/Merchant/Enter/child/EnterFour'], resolve),
    meta: {
      title: '商户入驻'
    }
  },
  {
    path: 'merchant/merchant-enter/five',
    name: 'enter-five',
    component: resolve => require(['@/components/Views/Merchant/Enter/child/EnterFive'], resolve),
    meta: {
      title: '商户入驻'
    }
  },
  {
    path: 'merchant/member-order',
    name: 'member-order',
    component: resolve => require(['@/components/Views/Merchant/Member/MemberOrder'], resolve),
    meta: {
      title: '会员订单'
    }
  },
  {
    path: 'merchant/my-member',
    name: 'my-member',
    component: resolve => require(['@/components/Views/Merchant/Member/MyMember'], resolve),
    meta: {
      title: '我的会员'
    }
  }
];

export default Merchant;
