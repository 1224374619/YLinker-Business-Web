<template>
  <div class="account-basic">
    <el-dialog center title="更换手机号" :visible.sync="dialogChangeTelVisible" width="25%">
      <el-form :model="form" label-width="60px">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <captcha v-model="form.captcha" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeTelVisible = false">取消</el-button>
        <el-button type="primary main" @click="dialogFormVisible = false">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog center title="更换绑定邮箱" :visible.sync="dialogChangeMailVisible" width="25%">
      <el-form :model="form" label-width="70px">
        <el-form-item label="邮箱账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <captcha v-model="form.captcha" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeMailVisible = false">取消</el-button>
        <el-button type="primary main" @click="dialogFormVisible = false">确定</el-button>
      </div>
    </el-dialog>
     <el-dialog center title="更换头像" :visible.sync="dialogChangeAvatarVisible" width="25%">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeAvatarVisible = false">取消</el-button>
        <el-button type="primary main" @click="dialogFormVisible = false">确定</el-button>
      </div>
    </el-dialog>
    <board class="body" title="基本信息">
      <div class="content">
        <div class="avatar">
          <img :src="require('../../assets/images/company1.jpg')" />
          <el-button type="text" @click="dialogChangeAvatarVisible = true">更换头像</el-button>
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
              <el-button type="text" @click="dialogChangeTelVisible = true">更换绑定手机号</el-button>
            </el-form-item>
            <el-form-item label="邮箱">
              {{ staticInfo.email }}
              <el-button type="text" @click="dialogChangeMailVisible = true">更换绑定邮箱</el-button>
            </el-form-item>
            </el-form>
        </div>
      </div>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import Captcha from 'components/captcha.vue';

@Component({
  components: {
    Board,
    Captcha,
  },
})
export default class AccountBasic extends Vue {
  form: object = {
    comment: '',
  };

  dialogChangeTelVisible: boolean = false;

  dialogChangeMailVisible: boolean = false;

  dialogChangeAvatarVisible: boolean = false;

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
}
</script>

<style lang="stylus" scoped>
  .account-basic
    display flex
    flex-direction column
    margin-top 30px
    .avatar-uploader
      text-align center
      .avatar-uploader-icon
        border: 1px dashed #d9d9d9;
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
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
