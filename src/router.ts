import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import(/* webpackChunkName: "reset-password" */ './views/ResetPassword.vue'),
    },
    {
      path: '/reset-result',
      name: 'reset-result',
      component: () => import(/* webpackChunkName: "reset-result" */ './views/ResetResult.vue'),
    },
    {
      path: '/user-license',
      name: 'user-license',
      component: () => import(/* webpackChunkName: "user-license" */ './views/UserLicense.vue'),
    },
    {
      path: '/enterprise',
      name: 'enterprise-info',
      component: () => import(/* webpackChunkName: "enterprise" */ './views/Enterprise/index.vue'),
      children: [
        {
          path: 'info',
          component: () => import(/* webpackChunkName: "enterprise-info" */ './views/Enterprise/EnterpriseInfo.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about-us',
      component: () => import(/* webpackChunkName: "about" */ './views/About/index.vue'),
      children: [
        {
          path: 'intro',
          component: () => import(/* webpackChunkName: "about-intro" */ './views/About/AboutUs.vue'),
        },
        {
          path: 'contact',
          component: () => import(/* webpackChunkName: "about-contact" */ './views/About/ContactUs.vue'),
        },
      ],
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ './views/Account/index.vue'),
      children: [
        {
          path: 'basic',
          component: () => import(/* webpackChunkName: "account-basic" */ './views/Account/Basic.vue'),
        },
        {
          path: 'reset-password',
          component: () => import(/* webpackChunkName: "account-resetpwd" */ './views/Account/ResetPassword.vue'),
        },
      ],
    },
    {
      path: '/enterprise/update',
      name: 'enterprise-info-update',
      component: () => import(/* webpackChunkName: "enterprise-info-update" */ './views/EnterpriseInfoUpdate.vue'),
    },
    {
      path: '/enterprise/update/result',
      name: 'enterprise-info-update-result',
      component: () => import(/* webpackChunkName: "enterprise-info-update-result" */ './views/EnterpriseRegisterResult.vue'),
    },
  ],
});
