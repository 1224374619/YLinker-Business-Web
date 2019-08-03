<template>
  <div class="account-basic">
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
        </div>
    </el-dialog>
    <div class="body">
      <h1>基本信息</h1>
      <div class="content">
        <div class="avatar">
          <img :src="require('../../assets/images/company1.jpg')" />
          <el-button type="text" @click="changeBindEmail">更换头像</el-button>
        </div>
        <div class="form">
            <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="账号">
              {{ staticInfo.accountName }}
            </el-form-item>
            <el-form-item label="姓名">
              {{ staticInfo.name }}
            </el-form-item>
            <el-form-item label="角色">
              {{ staticInfo.role }}
            </el-form-item>
            <el-form-item label="所属组织">
              {{ staticInfo.org }}
            </el-form-item>
            <el-form-item label="手机号">
              {{ staticInfo.tel }}
              <el-button type="text" @click="changeBindTel">更换绑定手机号</el-button>
            </el-form-item>
            <el-form-item label="邮箱">
              {{ staticInfo.email }}
              <el-button type="text" @click="changeBindEmail">更换绑定邮箱</el-button>
            </el-form-item>
            </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class AccountBasic extends Vue {
  form: object = {
    comment: '',
  };

  staticInfo: object = {
    accountName: '阿里巴巴',
    name: '中国杭州',
    role: '123123',
    org: '123123123123',
    tel: 'ffff@alibaba-inc.com',
    email: 'asdfasdf',
  }

  rules: object = {
    comment: [
      { required: true, message: '请输入留言内容', trigger: 'blur' },
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

  mounted() {
    // loading init data;
  }

  changeBindTel() {

  }

  changeBindEmail() {
      
  }
}
</script>

<style lang="stylus" scoped>
  .account-basic
    display flex
    flex-direction column
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
      .content
        display flex
        .avatar
          display flex
          flex-direction column
          padding 20px
          img
            border-radius 50%
            width 100px
      h1
        font-size 20px
        text-align left 
        margin 30px 0px 10px
      .form
        padding 20px
        width 520px
        button.full
          width 100%
</style>

<style lang="stylus">
  .account-basic
    .el-form-item__content
      text-align left
</style>
