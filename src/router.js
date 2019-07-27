import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ResetPassword from './views/ResetPassword.vue'
import Register from './views/Register.vue'
import UserLicense from './views/UserLicense.vue'
import ResetResult from './views/ResetResult.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
    {
      path: '/reset-result',
      name: 'reset-result',
      component: ResetResult
    },
    {
      path: '/user-license',
      name: 'user-license',
      component: UserLicense
    },
  ]
});
