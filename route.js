module.exports = {
    // navigation: {
    //   key: '应用开发',
    //   value: [
    //     {
    //       name: '我的应用',
    //       href: '/application',
    //       icon: 'llm_ic_app',
    //       component: '/application',
    //     },
    //     // {
    //     //   name: '应用模板中心',
    //     //   href: '/application-template',
    //     //   icon: 'llm_ic_app',
    //     //   component: '/application-template',
    //     // },
    //     // {
    //     //   name: '提示词模板',
    //     //   href: '/prompt',
    //     //   icon: 'llm_ic_project',
    //     //   component: '/prompt/index',
    //     // },
    //     {
    //       name: '编排模板',
    //       href: '/prompt/detail',
    //       icon: 'llm_ic_app',
    //       component: '/prompt/detail',
    //       hidden: true,
    //     },
    //     {
    //       name: '知识库',
    //       href: '/datasets',
    //       icon: 'llm_ic_wiki',
    //       component: '/datasets/index',
    //     },
    //     {
    //       name: '',
    //       href: '/datasets/detail',
    //       icon: 'llm_ic_app',
    //       component: '/datasets/detail',
    //       hidden: true,
    //     },
    //     {
    //       name: '分片策略',
    //       href: '/datasets/setting',
    //       icon: 'llm_ic_app',
    //       component: '/datasets/setting',
    //       hidden: true,
    //     },
    //     {
    //       name: '知识库文档',
    //       href: '/datasets/document',
    //       icon: 'llm_ic_app',
    //       component: '/datasets/document',
    //       hidden: true,
    //     },
    //     {
    //       name: '命中测试',
    //       href: '/datasets/hitTesting',
    //       icon: 'llm_ic_app',
    //       component: '/datasets/hitTesting',
    //       hidden: true,
    //     },
    //   ],
    // },
    // modelNav: {
    //   key: '模型训练',
    //   value: [
    //     {
    //       name: '数据服务',
    //       href: '/data-service',
    //       icon: 'llm_ic_product',
    //       component: '/data-service',
    //     },
    //     {
    //       name: '训练服务',
    //       href: '/train-service',
    //       icon: 'llm_ic_rocket',
    //       component: '/train-service',
    //     },
    //     {
    //       name: '模型训练',
    //       href: '/train-service/create',
    //       component: '/train-service/create',
    //       hidden: true,
    //     },
    //   ]
    // },
    // accountNav: {
    //   key: 'API Keys',
    //   value: [
    //     {
    //       name: '仪表盘',
    //       href: '/dashboard',
    //       icon: 'llm_ic_dashboard',
    //       component: '/dashboard',
    //     },
    //     {
    //       name: '请求数据',
    //       href: '/requests',
    //       icon: 'llm_ic_request',
    //       component: '/requests',
    //     },
    //     {
    //       name: '密钥',
    //       href: '/keys',
    //       icon: 'llm_ic_secretkey',
    //       component: '/keys',
    //     },
    //   ],
    // },
    service: {
      key: '平台服务',
      value: [
        {
          name: '仪表盘',
          href: '/dashboard',
          icon: 'llm_ic_dashboard',
          component: '/dashboard',
        },
        {
          name: '请求数据',
          href: '/requests',
          icon: 'llm_ic_request',
          component: '/requests',
        },
        {
          name: '密钥配置',
          href: '/keys',
          icon: 'llm_ic_secretkey',
          component: '/keys',
        },
        {
          name: '账户总览',
          href: '/recharge',
          icon: 'llm_ic_money',
          component: '/recharge/index',
        },
        {
          name: '充值',
          href: '/recharge/pay',
          icon: 'llm_ic_money',
          component: '/recharge/pay',
          hidden: true,
        },
        {
          name: '微信支付',
          href: '/recharge/wx',
          icon: 'llm_ic_money',
          component: '/recharge/wx',
          hidden: true,
        },
        // {
        //   name: '产品管理',
        //   href: '/licences',
        //   icon: 'llm_ic_project',
        //   component: '/licences/index',
        // },
      ],
    },
    // other: {
    //   key: '',
    //   value: [
    //     {
    //       name: '404',
    //       href: '/404',
    //       icon: '',
    //       component: '/404',
    //     },
    //     {
    //       name: '401',
    //       href: '/401',
    //       icon: '',
    //       component: '/401',
    //     },
    //     {
    //       name: 'webapp',
    //       href: '/webapp',
    //       icon: '',
    //       component: '/webapp',
    //     },
    //     {
    //       name: 'webapp_copy',
    //       href: '/webapp_copy',
    //       icon: '',
    //       component: '/webapp_copy',
    //     },
    //     {
    //       name: 'promptDoc',
    //       href: '/promptDoc',
    //       icon: '',
    //       component: '/promptDoc',
    //     },
    //   ],
    // },
  };
  