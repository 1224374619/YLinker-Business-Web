<template>
  <div class="container">
    <div class="form">
      <div class="logo">
        <img :src="require('@/assets/images/big-logo.png')" />
      </div>
      <div class="main">
        <p class="header">
          <span>企业用户登录</span>
          <el-button type="text" @click="gotoCustomerSite">个人用户</el-button>
        </p>
        <el-form ref="form" :rules="rules" :model="form">
          <el-form-item label="" prop="username">
            <el-input prefix-icon="el-icon-mobile-phone" v-model.number="form.username" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <password-input v-model="form.password" />
          </el-form-item>
          <el-form-item>
            <el-button class="full main" type="primary" @click="onSignin">立即登录</el-button>
          </el-form-item>
        </el-form>
        <p class="adjunctive">
          <el-button type="text" @click="gotoRegisterUI">立即注册</el-button>
          <el-button type="text" @click="gotoResetPwdUI">忘记密码？</el-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import PasswordInput from 'components/password-input.vue';
import { signin, getAccountInfo } from '@/apis/account';
import { getCompanyInfo, getCompanyBriefInfo } from '@/apis/company';
import { SYNC_USER_INFO, UPDATE_LOGIN_STATUS } from '@/store/mutation-types';
import { nonEmptyValidator } from '@/utils/validators';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
    PasswordInput,
  },
})
export default class Home extends Vue {
  @Mutation(SYNC_USER_INFO) syncUserInfo: any;
  @Mutation(UPDATE_LOGIN_STATUS) updateLoginStatus: any;

  form: object = {
    username: '',
    password: '',
  };

  rules: object = {
    username: [
      { validator: nonEmptyValidator, trigger: 'manual' },
      { type: 'number', message: '手机号必须为数字', trigger: 'manual' },
    ],
    password: [
      { validator: nonEmptyValidator, trigger: 'manual' },
    ],
  };

  onSignin() {    
    const ref: any = this.$refs.form;
    ref.validate(async (valid: boolean) => {
      if (valid) {
        try {
          const response = await signin({ ...this.form });
          if (response) {   
            // check company status;
            const companyInfo = (await getCompanyBriefInfo()).data;
            console.log(companyInfo)
            if (Object.keys(companyInfo).length === 0) { 
              this.$router.push({ name: 'enterprise-info-update' });         
            } else {
              this.$router.push({ name: 'home' });
            }
            this.updateLoginStatus(true);
          }
        } catch(e) {
          console.log(e.response)
          this.$notify.error({
            title: '错误',
            message: e.response.data.message
          });
        }
      }
    });
  };

  gotoRegisterUI() {
    this.$router.push({ path: '/register' });
  };

  gotoResetPwdUI() {
    this.$router.push({ path: '/reset-password' });
  };

  gotoCustomerSite() {
    window.open('http://47.102.145.186/client-zh/#/home');
  }
}
</script>

<style lang="stylus" scoped>
  .container
    flex 1
    display flex
    align-items center
    justify-content center
    .form
      display flex
      width 880px
      padding 20px 0
      align-items center
      justify-content center
      height 520px
      background-color white
      border-radius 5px
      box-sizing border-box
      transform translate(0, -70px)
      .logo
        img
          width 420px
      .main
        width 250px
      button.full
        width 100%
      p
        display flex
        flex-direction row
        margin-bottom 20px
        &.header
          justify-content space-between
        &.adjunctive
          justify-content space-around
        span
          font-size 20px
</style>
