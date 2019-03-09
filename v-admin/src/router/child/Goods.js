const Goods = [
  {
    path: 'goods/category/goods-category',
    name: 'goods-category',
    component: resolve => require(['@/components/Views/Goods/Category/GoodsCategory'], resolve),
    meta: {
      title: '商品类目'
    }
  },
  {
    path: 'goods/category/goods-category-apply',
    name: 'goods-category-apply',
    component: resolve => require(['@/components/Views/Goods/Category/GoodsCategoryApply'], resolve),
    meta: {
      title: '品类申请'
    }
  },
  {
    path: 'goods/category/goods-brank-apply',
    name: 'goods-brank-apply',
    component: resolve => require(['@/components/Views/Goods/Category/GoodsBrankApply'], resolve),
    meta: {
      title: '品牌申请'
    }
  },
  {
    path: 'goods/list',
    name: 'release-list',
    component: resolve => require(['@/components/Views/Goods/Release/List'], resolve),
    meta: {
      title: '商品列表'
    }
  },
  {
    path: 'goods/release',
    name: 'release-main',
    component: resolve => require(['@/components/Views/Goods/Release/ReleaseMain'], resolve),
    meta: {
      title: '商品发布'
    }
  },
  {
    path: 'goods/release/send',
    name: 'release-send',
    component: resolve => require(['@/components/Views/Goods/Release/ReleaseSend'], resolve),
    meta: {
      title: '商品发布'
    }
  },
  {
    path: 'goods/enquiry',
    name: 'goods-enquiry',
    component: resolve => require(['@/components/Views/Goods/Enquiry/Enquiry'], resolve),
    meta: {
      title: '商品询价'
    }
  },
  {
    path: 'goods/goods-reply',
    name: 'goods-reply',
    component: resolve => require(['@/components/Views/Goods/Provision/GoodsReply'], resolve),
    meta: {
      title: '商品回复报'
    }
  },
  {
    path: 'goods/send-ask-buy',
    name: 'send-ask-buy',
    component: resolve => require(['@/components/Views/Goods/Provision/SendAskBuy'], resolve),
    meta: {
      title: '商品求购发布'
    }
  },
  {
    path: 'goods/quote-ask-buy',
    name: 'quote-ask-buy',
    component: resolve => require(['@/components/Views/Goods/Provision/QuoteAskBuy'], resolve),
    meta: {
      title: '商品求购报价'
    }
  },
  {
    path: 'goods/review',
    name: 'goods-review',
    component: resolve => require(['@/components/Views/Goods/Review/Review'], resolve),
    meta: {
      title: '商品评论列表'
    }
  }
];

export default Goods;
