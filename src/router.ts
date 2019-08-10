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
          component: () => import(/* webpackChunkName: "occupation" */ './views/Occupation/Add.vue'),
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
          path: 'talent',
          name: 'resume-talent',
          redirect: '/resume/talent/info',
        },
        {
          path: 'talent/:id(\\d+)',
          name: 'resume-talent-detail',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/TalentDetail.vue'),
        },
        {
          path: 'talent/info',
          name: 'resume-talent-info',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/TalentInfo.vue'),
        },
        {
          path: 'talent/collection',
          name: 'resume-talent-collection',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/TalentCollection.vue'),
        },
        {
          path: 'talent/downloaded',
          name: 'resume-talent-downloaded',
          component: () => import(/* webpackChunkName: "resume" */ './views/Resume/TalentDownloaded.vue'),
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
