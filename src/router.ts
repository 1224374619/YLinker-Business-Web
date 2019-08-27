import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
      path: '/notifications',
      name: 'notifications',
      component: () => import(/* webpackChunkName: "notifications" */ './views/Notifications.vue'),
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
      path: '/occupation',
      name: 'occupation',
      redirect: '/occupation/info',
      component: () => import(/* webpackChunkName: "occupation" */ './views/Occupation/index.vue'),
      children: [
        {
          path: 'info',
          name: 'occupation-info',
          component: () => import(/* webpackChunkName: "occupation" */ './views/Occupation/OccupationInfo.vue'),
        },
        {
          path: 'add',
          name: 'occupation-add',
          component: () => import(/* webpackChunkName: "occupation" */ './views/Occupation/OccupationAdd.vue'),
        },
      ],
    },
    {
      path: '/resume',
      name: 'resume',
      redirect: '/resume/info',
      component: () => import(/* webpackChunkName: "resume" */ './views/Resume/index.vue'),
      children: [
        {
          path: 'info',
          name: 'resume-info',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/ResumeInfo.vue'),
        },
        {
          path: 'blacklist',
          name: 'resume-blacklist',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/BlackList.vue'),
        },
        {
          path: ':id(\\d+)',
          name: 'resume-detail',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/ResumeDetail.vue'),
        },
        {
          path: 'enterprise',
          name: 'resume-enterprise',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/ResumeEnterprise.vue'),
        },
        {
          path: 'platform',
          name: 'resume-platform',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/ResumePlatform.vue'),
        },
        {
          path: 'platform/collection',
          name: 'resume-platform-collection',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/ResumeCollection.vue'),
        },
        {
          path: 'platform/downloaded',
          name: 'resume-platform-downloaded',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/ResumeDownloaded.vue'),
        },
      ],
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      redirect: '/enterprise/info',
      component: () => import(/* webpackChunkName: "enterprise" */ './views/Enterprise/index.vue'),
      children: [
        {
          path: 'info',
          name: 'enterprise-info',
          component: () => import(/* webpackChunkName: "enterprise" */ './views/Enterprise/EnterpriseInfo.vue'),
        },
        {
          path: 'user',
          name: 'enterprise-user',
          component: () => import(/* webpackChunkName: "enterprise" */ './views/Enterprise/EnterpriseUser.vue'),
        },
        {
          path: 'bill',
          name: 'enterprise-bill',
          component: () => import(/* webpackChunkName: "enterprise" */ './views/Enterprise/EnterpriseBill.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About/index.vue'),
      children: [
        {
          path: 'intro',
          name: 'about-intro',
          component: () => import(/* webpackChunkName: "about" */ './views/About/AboutUs.vue'),
        },
        {
          path: 'contact',
          name: 'about-contact',
          component: () => import(/* webpackChunkName: "about" */ './views/About/ContactUs.vue'),
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
          name: 'account-basic',
          component: () => import(/* webpackChunkName: "account" */ './views/Account/Basic.vue'),
        },
        {
          path: 'reset-password',
          name: 'account-reset-password',
          component: () => import(/* webpackChunkName: "account" */ './views/Account/ResetPassword.vue'),
        },
      ],
    },
    {
      path: '/enterprise/update',
      name: 'enterprise-info-update',
      component: () => import(/* webpackChunkName: "enterprise-info-update" */ './views/EnterpriseInfoUpdate.vue'),
    },
    {
      path: '/enterprise/update-result',
      name: 'enterprise-info-update-result',
      component: () => import(/* webpackChunkName: "enterprise-info-update-result" */ './views/EnterpriseRegisterResult.vue'),
    },
  ],
});
