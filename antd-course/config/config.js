export default {
    singular: true,
    dva: {},
    antd: {},
    routes: [{
        path: '/',
        component: '../layout',
        // component: './puzzlecards',
        routes: [
          {
            path: '/dashboard',
            routes: [
              { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
              { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
              { path: '/dashboard/workplace', component: 'Dashboard/Workplace'}
            ]
          },
          {
            path: '/puzzlecards',
            component: './puzzlecards'
          }
        ]
      }],
};