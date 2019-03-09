const Advices = [
  {
    path: 'advices/system-msg',
    name: 'system-msg',
    component: resolve => require(['@/components/Views/Advices/System/SystemMsg'], resolve),
    meta: {
      title: '系统消息'
    }
  },
  {
    path: 'advices/on-line-msg',
    name: 'on-line-msg',
    component: resolve => require(['@/components/Views/Advices/OnLine/onLineMsg'], resolve),
    meta: {
      title: '在线客户'
    }
  },
  {
    path: 'advices/complain-msg',
    name: 'complain-msg',
    component: resolve => require(['@/components/Views/Advices/Complain/ComplainMsg'], resolve),
    meta: {
      title: '投诉信息'
    }
  },
  {
    path: 'advices/consult-msg',
    name: 'consult-msg',
    component: resolve => require(['@/components/Views/Advices/Consult/ConsultMsg'], resolve),
    meta: {
      title: '咨询信息'
    }
  }
];

export default Advices;
