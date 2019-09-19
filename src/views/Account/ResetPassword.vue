<template>
  <div class="account-reset-password">
    <board class="body">
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel" placeholder="请输入登录手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="captcha">
            <captcha v-model="form.captcha" />
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <password-input v-model="form.password" :placeholder="'请输入新密码（6-24位数字和字母）'" />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirm-password">
            <password-input v-model="form.confirmPassword" :placeholder="'请再次输入新密码'" />
          </el-form-item>
          <el-form-item>
            <el-button class="full main" type="primary" @click="onSubmit">重置密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import Board from 'components/board.vue';

@Component({
  components: {
    Board,
    Captcha,
    PasswordInput,
  },
})
export default class AccountResetPassword extends Vue {
  form = {
    tel: '',
    password: '',
    confirmPassword: '',
    captcha: '',
  };

  rules = {
    tel: [
      { required: true, message: '请输入登录手机号', trigger: 'blur' },
      { type: 'number', message: '手机号必须为数字值', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入新登录密码', trigger: 'blur' },
    ],
    'confirm-password': [
      { required: true, message: '请再次输入新登录密码', trigger: 'blur' },
    ],
    captcha: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
  };

  onSubmit() {
    const ref: any = this.$refs.form;
    ref.validate((valid: boolean) => {
      if (valid) {
        // submit;
      }
      return false;
    });
  }
}
</script>

<style lang="stylus" scoped>
  .account-reset-password
    display flex
    flex-direction column
    margin-top 30px
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      justify-content center
      flex-direction column
      flex 1
      position relative
      background-color white
      .form
        padding 20px
        width 520px
        button.full
          width 100%
</style>

<style lang="stylus">
  .account-reset-password
    .el-form-item__content
      text-align left
</style>
