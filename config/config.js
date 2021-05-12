export default {
  singular: true,
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: './index',
        },
        {
          path: '/helloworld',
          component: 'HelloWorld',
        },
        {
          path: '/puzzlecard',
          component: 'puzzlecards',
        },
        {
          path: '/list',
          component: './list',
        },
        {
          path: 'css-modules-with-less',
          component: './css-modules-with-less',
        },
        {
          path: 'css-modules-with-antd',
          component: './css-modules-with-antd',
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
          ],
        },
      ],
    },
  ],
  proxy: {
    '/pailepai': {
      target: 'http://my-json-server.typicode.com',
      changeOrigin: true,
    },
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        locale: {
          enable: true,
        },
      },
    ],
  ],
  theme: {
    '@primary-color': '#30b767', // 绿色
  },
};
