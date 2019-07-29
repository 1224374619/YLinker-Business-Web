<template>
  <div class="home">
    <customized-nav />
    <div class="content">
      首页
    </div>
    <customized-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Home extends Vue {
  priactiveTabName: string = 'recommend';

  isLogin: boolean = false;

  showLoginModal: boolean = false;

  showRegisterModal: boolean = false;

  showForgetPwdModal: boolean = false;

  loginForm: object = {
    username: '',
    password: '',
  };

  registerForm: object = {
    email: '',
    captcha: '',
    password: '',
  };

  resetPwdForm: object = {
    email: '',
    captcha: '',
    newPassword: '',
  };

  options: object[] = [{
    value: '101',
    label: '江苏省',
    children: [{
      value: '10101',
      label: '南京',
    }, {
      value: '10102',
      label: '苏州',
    }, {
      value: '10103',
      label: '无锡',
    }, {
      value: '10104',
      label: '常州',
    }, {
      value: '10105',
      label: '南通',
    }, {
      value: '10106',
      label: '泰州',
    }, {
      value: '10107',
      label: '扬州',
    }, {
      value: '10108',
      label: '盐城',
    }, {
      value: '10109',
      label: '镇江',
    }, {
      value: '10110',
      label: '盐城',
    }, {
      value: '10111',
      label: '宿迁',
    }, {
      value: '10112',
      label: '淮安',
    }, {
      value: '10113',
      label: '徐州',
    }, {
      value: '10114',
      label: '连云港',
    }],
  }];

  searchKey: string = '';

  doLogin() {
    // request;
    this.showLoginModal = false;
    this.isLogin = true;
  }

  dealMenuClick(command: String) {
    if (command === 'logout') {
      this.isLogin = false;
    }
  }

  doLogot() {
    this.isLogin = false;
  }

  redirectToSearchResult() {
    this.$router.push({ path: '/search' });
  }

  companyScrolling() {
    const holder: any = this.$refs['company-holder'];
    if (holder && document.body.clientWidth === (holder.scrollWidth - holder.scrollLeft)) {
      holder.scrollLeft = 0;
    }
    holder.scrollLeft += 1;
    requestAnimationFrame(this.companyScrolling);
  }

  mounted() {
    this.companyScrolling();
  }
}
</script>

<style lang="stylus" scoped>
  .home
    margin-top 70px

</style>
