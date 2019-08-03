<template>
  <div class="enterprise-info-update-container">
    <customized-nav class="nav"/>
    <div class="body">
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
          <p class="header">
            <span>企业信息</span>
          </p>
          <el-form-item label="企业名称" prop="enterprise">
            <el-input v-model="form.enterprise" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="纳税人识别号" prop="serialNumber">
            <el-input maxlength="18" v-model="form.serialNumber" placeholder="请输入纳税人识别号"></el-input>
          </el-form-item>
          <el-form-item label="企业地点" prop="location">
            <el-cascader
              class="search-picker"
              placeholder="请选择企业地点"
              :options="citiesConstant"
              v-model="form.location">
            </el-cascader>
          </el-form-item>
          <el-form-item label="上传营业执照" prop="license">
            <el-upload
              :on-success="dealWithUploadLicense"
              class="upload"
              drag
              action="https://jsonplaceholder.typicode.com/posts/">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">支持图片格式：png、jpg、jpeg，最大不超过 2M。</div>
              <div class="el-upload__tip" slot="tip">为了尽快通过审核，请上传真实合法且清晰的执照图片。</div>
            </el-upload>
          </el-form-item>
          <span class="line"></span>
          <p class="header">
            <span>联系人信息</span>
          </p>
          <el-form-item label="联系人姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="occupation">
            <el-input v-model="form.occupation" placeholder="请输入职位"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="tel">
            <el-input maxlength="11" v-model.number="form.tel" placeholder="请输入联系电话"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入联系邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="full" type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <customized-footer :showSimple="true" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import citiesConstant from '@/views/constants/cities';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
    Captcha,
    PasswordInput,
  },
})
export default class EnterpriseInfoUpdate extends Vue {
  form: object = {
    enterprise: '',
    serialNumber: '',
    location: '',
    name: '',
    occupation: '',
    tel: '',
    email: '',
    license: '',
  };

  citiesConstant: any = citiesConstant;

  rules: object = {
    serialNumber: [
      { required: true, message: '请输入请输入纳税人识别号', trigger: 'blur' },
      { len: 18, message: '纳税人识别号为18位数字', trigger: 'blur' },
    ],
    enterprise: [
      { required: true, message: '请输入企业名称', trigger: 'blur' },
    ],
    location: [
      { required: true, message: '请选择企业地点', trigger: 'blur' },
    ],
    name: [
      { required: true, message: '请输入联系人姓名', trigger: 'blur' },
    ],
    tel: [
      { required: true, message: '请输入联系电话', trigger: 'blur' },
      { len: 11, message: '手机号为11位数字', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入联系邮箱', trigger: 'blur' },
    ],
    license: [
      { required: true, message: '请上传营业执照图片', trigger: 'blur' },
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

  dealWithUploadLicense(response: any, file: any, fileList: any) {

  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-info-update-container
    height 100%
    display flex
    flex-direction column
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      justify-content center
      flex 1
      position relative
      background-color white
      margin auto
      width 1280px
      .form
        padding 20px
        width 520px
        .line
          width 100%
          height 1px
          display inline-block
          background lightgrey
          margin 10px 0
        button.full
          width 100%
        p
          display flex
          flex-direction row
          margin-bottom 20px
          &.header
            justify-content space-between
            margin-left 5px
            font-weight bold
          span
            font-size 20px
</style>

<style lang="stylus">
  .enterprise-info-update-container
    .el-form-item__content
      text-align left
    .el-upload__tip
      margin 10px 0
      line-height 1
</style>
