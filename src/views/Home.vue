<template>
  <div class="home">
    <customized-nav />
    <div class="content">
      首页
    </div>
    <customized-footer />
  </div>
</template>

<script>
import placeholder from 'assets/images/placeholder.jpg';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

export default {
  name: 'home',
  components: {
    CustomizedFooter,
    CustomizedNav
  },
  data() {
    return {
      activeTabName: 'recommend',
      isLogin: false,
      placeholder,
      showLoginModal: false,
      showRegisterModal: false,
      showForgetPwdModal: false,
      selectedOptions: null,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        email: '',
        captcha: '',
        password: ''
      },
      resetPwdForm: {
        email: '',
        captcha: '',
        newPassword: ''
      },
      carouselImgs: [
        require('../assets/images/loop1.jpg'),
        require('../assets/images/loop2.png')
      ],
      options: [{
        value: '101',
        label: '江苏省',
        children: [{
          value: '10101',
          label: '南京'
        }, {
          value: '10102',
          label: '苏州'
        }, {
          value: '10103',
          label: '无锡'
        }, {
          value: '10104',
          label: '常州'
        }, {
          value: '10105',
          label: '南通'
        }, {
          value: '10106',
          label: '泰州'
        }, {
          value: '10107',
          label: '扬州'
        }, {
          value: '10108',
          label: '盐城'
        }, {
          value: '10109',
          label: '镇江'
        }, {
          value: '10110',
          label: '盐城'
        }, {
          value: '10111',
          label: '宿迁'
        }, {
          value: '10112',
          label: '淮安'
        }, {
          value: '10113',
          label: '徐州'
        }, {
          value: '10114',
          label: '连云港'
        }]
      }],
      searchKey: ''
    }
  },
  methods: {
    handleOpenMenu() {},
    handleChangeLocation() {},
    doLogin() {
      // request;
      this.showLoginModal = false;
      this.isLogin = true;
    },
    dealMenuClick(command) {
      if (command === 'logout') {
        this.isLogin = false;
      }
    },
    doLogot() {
      this.isLogin = false;
    },
    doRegister() {

    },
    doResetPwd() {

    },
    redirectToSearchResult() {
      this.$router.push({ path: '/search' });
    },
    companyScrolling() {
      const holder = this.$refs['company-holder'];
      if (holder && document.body.clientWidth === (holder.scrollWidth - holder.scrollLeft))
          holder.scrollLeft = 0;
        holder.scrollLeft += 1;
      requestAnimationFrame(this.companyScrolling);
    }
  },
  mounted() {
    this.companyScrolling();
  }
}
</script>

<style lang="stylus" scoped>
  .home
    margin-top 70px
        
</style>
