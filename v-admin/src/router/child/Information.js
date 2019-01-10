const Information = [
  {
    path: 'information/catalog',
    name: 'information-catalog',
    component: resolve => require(['@/components/Views/Information/Catalog/Catalog'], resolve),
    meta: {
      title: '内容目录'
    }
  },
  {
    path: 'information/issue',
    name: 'information-issue',
    component: resolve => require(['@/components/Views/Information/Issue/Issue'], resolve),
    meta: {
      title: '内容发布'
    }
  },
  {
    path: 'information/audit',
    name: 'information-audit',
    component: resolve => require(['@/components/Views/Information/Audit/Audit'], resolve),
    meta: {
      title: '内容审核'
    }
  },
  {
    path: 'information/recycle',
    name: 'information-recycle',
    component: resolve => require(['@/components/Views/Information/Recycle/Recycle'], resolve),
    meta: {
      title: '回收站'
    }
  }
];

export default Information;
