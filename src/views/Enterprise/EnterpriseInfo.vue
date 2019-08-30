<template>
  <div class="enterprise-info-container">
    <div class="body">
      <div class="head">
        <p>企业信息完整度</p>
        <el-progress :text-inside="true" :stroke-width="15" :percentage="70"></el-progress>
      </div>
      <div class="form">
        <p class="header">
          <span class="title">基本信息</span>
          <el-button class="edit-btn main" @click="editEnterpriseInfo" v-if="!enterpriseInfoEditMode">编辑</el-button>
        </p>
        <div class="display" v-if="!enterpriseInfoEditMode">
          <ul>
            <li>
              <span>企业名称：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>企业简称：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>企业规模：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>企业性质：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>所属行业：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>企业地点：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>企业介绍：</span>
              <span>测试测试测试测试</span>
            </li>
            <li>
              <span>企业 LOGO：</span>
              <span>测试测试测试测试</span>
            </li>
          </ul>
        </div>
        <el-form class="form-container" ref="form" :rules="rules" :model="form" label-width="140px" v-else>
          <el-form-item label="企业名称" prop="enterprise">
            <span>企业名称</span>
          </el-form-item>
          <el-form-item label="企业简称" prop="short">
            <el-input v-model="form.serialNumber" placeholder="请输入企业简称"></el-input>
          </el-form-item><el-form-item label="企业规模" prop="enterprise">
            <el-select v-model="value" placeholder="请选择">
              <el-option :value="0">小于 10 人</el-option>
              <el-option :value="1">10-50 人</el-option>
              <el-option :value="2">50-100 人</el-option>
              <el-option :value="3">100-500 人</el-option>
              <el-option :value="4">大于 500 人</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业性质" prop="enterprise">
            <el-select v-model="value" placeholder="请选择">
              <el-option :value="0">外企</el-option>
              <el-option :value="1">私企</el-option>
              <el-option :value="2">国企</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业" prop="enterprise">
            <el-select v-model="value" placeholder="请选择">
              <el-option :value="0">互联网</el-option>
              <el-option :value="1">机械制造</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业地址" prop="location">
            <el-cascader
              class="search-picker"
              style="margin-bottom: 10px;"
              placeholder="请选择企业地址"
              :options="citiesConstant"
              v-model="form.location">
            </el-cascader>
            <br>
            <el-input type="textarea" :rows="4" v-model="form.comment" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="具体地点" prop="detail">
            <el-input
              style="margin-right: 10px;"
              placeholder="请输入公司所在经度"
              v-model="textarea">
            </el-input>
            <el-input
              placeholder="请输入公司所在纬度"
              v-model="textarea">
            </el-input>
          </el-form-item>
          <el-form-item label="企业介绍" prop="location">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </el-form-item>
          <el-form-item label="企业 LOGO" prop="license">
            <el-upload
              :on-success="dealWithUploadLicense"
              class="upload"
              action="https://jsonplaceholder.typicode.com/posts/">
              <i class="el-icon-upload"></i>
              <div class="el-upload__tip" slot="tip">支持图片格式：png、jpg、jpeg，最大不超过 3M。</div>
              <div class="el-upload__tip" slot="tip">为了尽快通过审核，请上传真实合法且清晰的执照图片。</div>
            </el-upload>
          </el-form-item>          
          <div class="operations">
            <el-button type="primary" class="main" @click="onSubmit">保存</el-button>
            <el-button @click="enterpriseInfoEditMode = false">取消</el-button>
          </div>
        </el-form>
        <span class="line"></span>

        <p class="header">
          <span class="title">企业审核信息</span>
          <el-button class="edit-btn main" @click="editEnterpriseRegisterInfo" v-if="!enterpriseRegisterInfoEditMode">编辑</el-button>
        </p>
        <div class="display" v-if="!enterpriseRegisterInfoEditMode">
          <ul>
            <li>
              <span>企业名称：</span>
              <span></span>
            </li>
            <li>
              <span>企业注册地：</span>
              <span></span>
            </li>
            <li>
              <span>统一社会信用代码：</span>
              <span></span>
            </li>
            <li>
              <span>企业类别：</span>
              <span></span>
            </li>
            <li>
              <span>证件原件照片：</span>
              <span></span>
            </li>
          </ul>
        </div>
        <el-form class="form-container"  ref="form" :rules="rules" :model="form" label-width="140px" v-else>
          <el-form-item label="企业名称" prop="name">
            <el-input v-model="form.name" placeholder="企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业注册地" prop="location">
            <el-cascader
              class="search-picker"
              placeholder="请选择企业注册地"
              :options="citiesConstant"
              v-model="form.location">
            </el-cascader>
          </el-form-item>
          <el-form-item label="统一社会信用代码" prop="tel">
            <el-input maxlength="11" v-model.number="form.tel" placeholder="请输入统一社会信用代码"></el-input>
          </el-form-item>
          <el-form-item label="企业类别" prop="tel">
            <el-select v-model="value" placeholder="请选择企业类别">
              <el-option :value="0">互联网</el-option>
              <el-option :value="1">机械制造</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上传证件原件照片" prop="license">
            <el-upload
              :on-success="dealWithUploadLicense"
              class="upload"
              action="https://jsonplaceholder.typicode.com/posts/">
              <i class="el-icon-upload"></i>
              <div class="el-upload__tip" slot="tip">最多上传5张图片；支持图片格式：png、jpg、jpeg、gif，最大不超过3M。</div>
              <div class="el-upload__tip" slot="tip">提示：确保企业名称与提交审核公司一致；如为复印件、黑白扫描件，需加盖企业公章；<br>不可使用屏幕截图或翻拍照片提交审核；上传图片不可有与银领人才网无关的标注或水印；<br>不可使用电子版营业执照提交审核；所上传证照照片，信息需清晰完整。</div>
              <div class="el-upload__tip alert" slot="tip">企业营业执照仅用审核，不会向第三方透露，请放心上传！</div>
            </el-upload>
          </el-form-item>
          <div class="operations">
            <el-button type="primary" class="main" @click="onSubmit">保存</el-button>
            <el-button @click="enterpriseRegisterInfoEditMode = false">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
import citiesConstant from '@/views/constants/cities';

@Component({
  components: {
    Captcha,
    PasswordInput,
  },
})
export default class EnterpriseInfo extends Vue {
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
  
  enterpriseInfoEditMode: boolean = false;

  enterpriseRegisterInfoEditMode: boolean = false;

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

  editEnterpriseRegisterInfo() {
    if (this.enterpriseInfoEditMode) {
      this.$notify({
        title: '警告',
        message: '请先保存企业基本信息！',
        type: 'warning'
      });
    } else {
      this.enterpriseRegisterInfoEditMode = true;
    }
  }

   editEnterpriseInfo() {
    if (this.enterpriseRegisterInfoEditMode) {
      this.$notify({
        title: '警告',
        message: '请先保存企业审核信息！',
        type: 'warning'
      });
    } else {
      this.enterpriseInfoEditMode = true;
    }
  }

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
  .enterprise-info-container
    display flex
    flex-direction column
    margin-top 30px
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      width 100%
      justify-content center
      flex-direction column
      flex 1
      position relative
      background-color white
      margin auto
      .head
        width 240px
        text-align left
        font-size 14px
        margin 20px 0 20px 15px
      .form
        padding 10px
        .form-container
          .operations
            text-align right 
        .display
          ul
            list-style none
            text-align left
            font-size 14px
            padding 0
            li
              margin 40px 0
              display flex
              span:first-child
                flex 0 0 130px
                text-align right
        .line
          width 100%
          height 1px
          display inline-block
          background lightgrey
          margin 20px 0
        button.full
          width 100%
        p
          display flex
          flex-direction row
          margin-bottom 20px
          &.header
            justify-content space-between
            margin 10px 0 30px 5px
            font-weight bold
            .title
              display inline-block
              vertical-align middle
              margin-right 3px
              line-height 38px
          span
            font-size 22px
</style>

<style lang="stylus">
  .enterprise-info-container
    .el-form-item__content
      text-align left
      .el-input, .el-select, .el-cascader
        width 240px
      .el-textarea
        width 500px
    .el-upload__tip
      min-width 600px
      font-size 14px
      color #999
      margin 10px 0
      line-height 1.4
      &.alert
        color #faad14
</style>
