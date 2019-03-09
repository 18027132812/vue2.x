const navData = [
  {
    navName: '首页',
    active: true,
    link: '/main',
    child: []
  },
  {
    navName: '商品中心',
    active: false,
    child: [
      {
        id: '1',
        title: '商品品类',
        icon: 'logo-apple',
        child: [
          {
            id: '1-1',
            title: '商品类目',
            haveChildPage: true,
            url: '/main/goods/category/goods-category'
          },
          {
            id: '1-2',
            title: '品类申请',
            url: '/main/goods/category/goods-category-apply'
          },
          {
            id: '1-3',
            title: '品牌申请',
            url: '/main/goods/category/goods-brank-apply'
          }
        ]
      },
      {
        id: '2',
        title: '商品管理',
        icon: 'logo-apple',
        child: [
          {
            id: '2-1',
            title: '商品列表',
            url: '/main/goods/list'
          },
          {
            id: '2-2',
            title: '商品发布',
            haveChildPage: true,
            url: '/main/goods/release'
          }
        ]
      },
      {
        id: '3',
        title: '商品询价',
        icon: 'logo-apple',
        child: [
          {
            id: '3-1',
            title: '商品询价',
            url: '/main/goods/enquiry'
          }
        ]
      },
      {
        id: '4',
        title: '供应管理',
        icon: 'logo-apple',
        child: [
          {
            id: '4-1',
            title: '商品回复报',
            url: '/main/goods/goods-reply'
          },
          {
            id: '4-2',
            title: '商品求购发布',
            url: '/main/goods/send-ask-buy'
          },
          {
            id: '4-3',
            title: '商品求购报价',
            url: '/main/goods/quote-ask-buy'
          }
        ]
      },
      {
        id: '5',
        title: '商品评论',
        icon: 'logo-apple',
        child: [
          {
            id: '5-1',
            title: '商品评论列表',
            url: '/main/goods/review'
          }
        ]
      }
    ]
  },
  {
    navName: '库存中心',
    active: false,
    child: [
      {
        id: '1',
        title: '仓库管理',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '仓库类型',
            url: '/main/repertory/repertory-type'
          },
          {
            id: '1-2',
            title: '仓库信息',
            url: '/main/repertory/repertory-text'
          }
        ]
      },
      {
        id: '2',
        title: '库存管理',
        icon: 'ios-paper',
        child: [
          {
            id: '2-1',
            title: '库存初始化',
            url: '/main/repertory/stock-init'
          },
          {
            id: '2-2',
            title: '库存管理',
            url: '/main/repertory/stock-management'
          },
          {
            id: '2-3',
            title: '库存调整',
            url: '/main/repertory/stock-adjust'
          },
          {
            id: '2-4',
            title: '库存盘点',
            url: '/main/repertory/stock-check'
          },
          {
            id: '2-5',
            title: '库存锁定',
            url: '/main/repertory/stock-lock'
          },
          {
            id: '2-6',
            title: '入库管理',
            url: '/main/repertory/in-stock'
          },
          {
            id: '2-7',
            title: '出库管理',
            url: '/main/repertory/out-stock'
          },
          {
            id: '2-8',
            title: '调拨管理',
            url: '/main/repertory/allot-management'
          }
        ]
      }
    ]
  },
  {
    navName: '订单中心',
    active: false,
    child: [
      {
        id: '1',
        title: '基本信息',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '标签管理',
            url: '/main/order/tally'
          }
        ]
      },
      {
        id: '2',
        title: '物流信息',
        icon: 'ios-paper',
        child: [
          {
            id: '2-1',
            title: '发货地址',
            url: '/main/order/logistics/ship-address'
          },
          {
            id: '2-2',
            title: '运费模板',
            url: '/main/order/logistics/freight-template'
          }
        ]
      },
      {
        id: '3',
        title: '交易管理',
        icon: 'ios-paper',
        child: [
          {
            id: '3-1',
            title: '订单列表',
            url: '/main/order/transaction/order-list'
          },
          {
            id: '3-2',
            title: '设备订单',
            url: '/main/order/transaction/machinery-order'
          },
          {
            id: '3-3',
            title: '原料订单',
            url: '/main/order/transaction/compared-order'
          },
          {
            id: '3-4',
            title: '应用订单',
            url: '/main/order/transaction/purchase-order'
          }
        ]
      },
      {
        id: '4',
        title: '退换货管理',
        icon: 'ios-paper',
        child: [
          {
            id: '4-1',
            title: '退货列表',
            url: '/main/order/exchange/sales-return-list'
          },
          {
            id: '4-2',
            title: '换货列表',
            url: '/main/order/exchange/change-list'
          }
        ]
      },
      {
        id: '5',
        title: '退款管理',
        icon: 'ios-paper',
        child: [
          {
            id: '5-1',
            title: '退款列表',
            url: '/main/order/refund/refund-list'
          }
        ]
      }
    ]
  },
  {
    navName: '消息中心',
    active: false,
    child: [
      {
        id: '1',
        title: '系统信息',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '系统信息',
            url: '/main/advices/system-msg'
          }
        ]
      },
      {
        id: '2',
        title: '在线客户',
        icon: 'ios-paper',
        child: [
          {
            id: '2-1',
            title: '在线客户',
            url: '/main/advices/on-line-msg'
          }
        ]
      },
      {
        id: '3',
        title: '投诉信息',
        icon: 'ios-paper',
        child: [
          {
            id: '3-1',
            title: '投诉信息',
            url: '/main/advices/complain-msg'
          }
        ]
      },
      {
        id: '4',
        title: '咨询信息',
        icon: 'ios-paper',
        child: [
          {
            id: '4-1',
            title: '咨询信息',
            url: '/main/advices/consult-msg'
          }
        ]
      }
    ]
  },
  {
    navName: '信息中心',
    active: false,
    child: [
      {
        id: '1',
        title: '信息发布',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '内容目录',
            url: '/main/information/catalog'
          },
          {
            id: '1-2',
            title: '内容发布',
            url: '/main/information/issue'
          },
          {
            id: '1-3',
            title: '内容审核',
            url: '/main/information/audit'
          },
          {
            id: '1-4',
            title: '回收站',
            url: '/main/information/recycle'
          }
        ]
      }
    ]
  },
  {
    navName: '营销中心',
    active: false,
    child: [
      {
        id: '1',
        title: '营销管理',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '优惠券',
            url: '/main/marketing/discount'
          },
          {
            id: '1-2',
            title: '商品促销',
            url: '/main/marketing/promotion'
          },
          {
            id: '1-3',
            title: '拼购管理',
            url: '/main/marketing/group-buying'
          },
          {
            id: '1-4',
            title: '满减满折',
            url: '/main/marketing/completely'
          }
        ]
      }
    ]
  },
  {
    navName: '统计中心',
    active: false,
    child: [
      {
        id: '1',
        title: '统计报表',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '商家收入统计',
            url: '/main/statistics/merchant-income'
          },
          {
            id: '1-2',
            title: '店铺收入统计',
            url: '/main/statistics/store-income'
          },
          {
            id: '1-3',
            title: '商品交易统计',
            url: '/main/statistics/commodity-transaction'
          },
          {
            id: '1-4',
            title: '原料交易统计',
            url: '/main/statistics/raw-transaction'
          },
          {
            id: '1-5',
            title: '设备共享交易统计',
            url: '/main/statistics/equipment-transaction'
          },
          {
            id: '1-6',
            title: '设计服务交易统计',
            url: '/main/statistics/design-service-transaction'
          },
          {
            id: '1-7',
            title: '应用交易统计',
            url: '/main/statistics/apply-transaction'
          }
        ]
      }
    ]
  },
  {
    navName: '结算中心',
    active: false,
    child: [
      {
        id: '1',
        title: '交易对帐',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '收入对帐',
            url: '/main/settle/reconcile/income-reconcile'
          },
          {
            id: '1-2',
            title: '退款对帐',
            url: '/main/settle/reconcile/refund-reconcile'
          },
          {
            id: '1-3',
            title: '支出对帐',
            url: '/main/settle/reconcile/expend-reconcile'
          },
          {
            id: '1-4',
            title: '结算对帐',
            url: '/main/settle/reconcile/settle-reconcile'
          }
        ]
      },
      {
        id: '2',
        title: '结算管理',
        icon: 'ios-paper',
        child: [
          {
            id: '2-1',
            title: '结算列表',
            url: '/main/settle/management/settle-list'
          },
          {
            id: '2-2',
            title: '结算申请',
            url: '/main/settle/management/settle-apply'
          },
          {
            id: '2-3',
            title: '服务结算',
            url: '/main/settle/management/serve-settle'
          },
          {
            id: '2-4',
            title: '服务结算审批',
            url: '/main/settle/management/serve-settle-approve'
          }
        ]
      }
    ]
  },
  {
    navName: '店铺中心',
    active: false,
    child: [
      {
        id: '1',
        title: '店铺详情',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '店铺详情',
            url: '/main/store/detail'
          }
        ]
      },
      {
        id: '2',
        title: '用户角色',
        icon: 'ios-paper',
        child: [
          {
            id: '2-1',
            title: '角色管理',
            url: '/main/store/store-role'
          },
          {
            id: '2-2',
            title: '用户管理',
            url: '/main/store/store-user'
          }
        ]
      },
      {
        id: '3',
        title: '商品管理',
        icon: 'ios-paper',
        child: [
          {
            id: '3-1',
            title: '商品列表',
            url: '/main/store/store-goods'
          }
        ]
      },
      {
        id: '4',
        title: '订单管理',
        icon: 'ios-paper',
        child: [
          {
            id: '4-1',
            title: '店铺订单',
            url: '/main/store/store-order'
          },
          {
            id: '4-2',
            title: '退换货订单',
            url: '/main/store/store-exchange'
          },
          {
            id: '4-3',
            title: '退款单',
            url: '/main/store/store-refund'
          }
        ]
      },
      {
        id: '5',
        title: '店铺装修',
        icon: 'ios-paper',
        child: [
          {
            id: '5-1',
            title: 'Pc商城店铺首页装修',
            url: '/main/store/fitment-pc'
          },
          {
            id: '5-2',
            title: '移动商城店铺首页装修',
            url: '/main/store/fitment-web'
          }
        ]
      }
    ]
  },
  {
    navName: '商家中心',
    active: false,
    child: [
      {
        id: '1',
        title: '商家详情',
        icon: 'ios-paper',
        child: [
          {
            id: '1-1',
            title: '商家详情',
            url: '/main/merchant/detail'
          }
        ]
      },
      {
        id: '2',
        title: '安全管理',
        child: [
          {
            id: '2-1',
            title: '密码修改',
            url: '/main/merchant/change-password'
          }
        ]
      },
      {
        id: '3',
        title: '子账号管理',
        child: [
          {
            id: '3-1',
            title: '业务分组',
            url: '/main/merchant/group'
          },
          {
            id: '3-2',
            title: '业务人员',
            url: '/main/merchant/person'
          }
        ]
      },
      {
        id: '4',
        title: '商家入驻',
        child: [
          {
            id: '4-1',
            title: '商家入驻',
            haveChildPage: true,
            url: '/main/merchant/merchant-enter'
          }
        ]
      },
      {
        id: '5',
        title: '会员管理',
        child: [
          {
            id: '5-1',
            title: '我的会员',
            url: '/main/merchant/my-member'
          },
          {
            id: '5-2',
            title: '会员交易',
            url: '/main/merchant/member-order'
          }
        ]
      }
    ]
  }
];

export default navData;
