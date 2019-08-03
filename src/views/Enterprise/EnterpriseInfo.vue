<template>
  <div class="enterprise-info-container">
    <div class="body">
      <div class="head">
        <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/28bb3690b4369bf2bec008f213614668_121_121.jpg" />
        <div>
          <p>企业信息完整度</p>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        </div>
      </div>
      <div class="form">
        <p class="header">
          <span>
            <span class="title">企业信息</span>
            <el-tooltip effect="dark" content="企业名称，纳税人识别号及营业执照更改后，系统将重新进行审核，部分功能将不可用。" placement="right-start">
              <el-button type="text">?</el-button>
            </el-tooltip>
          </span>
          <el-button size="small" @click="enterpriseInfoEditMode = true" v-if="!enterpriseInfoEditMode">编辑</el-button>
        </p>
        <div class="display" v-if="!enterpriseInfoEditMode">
          <ul>
            <li>
              <span>企业名称：</span>
              <span></span>
            </li>
            <li>
              <span>企业类别：</span>
              <span></span>
            </li>
            <li>
              <span>纳税人识别号：</span>
              <span></span>
            </li>
            <li>
              <span>企业规模：</span>
              <span></span>
            </li>
            <li>
              <span>企业性质：</span>
              <span></span>
            </li>
            <li>
              <span>所属行业：</span>
              <span></span>
            </li>
            <li>
              <span>企业地点：</span>
              <span></span>
            </li>
            <li>
              <span>企业介绍：</span>
              <span></span>
            </li>
            <li>
              <span>营业执照：</span>
              <span></span>
            </li>
          </ul>
        </div>
        <el-form ref="form" :rules="rules" :model="form" label-width="120px" v-else>
          <el-form-item label="企业名称" prop="enterprise">
            <el-input v-model="form.enterprise" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业类别" prop="enterpriseType">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="纳税人识别号" prop="serialNumber">
            <el-input maxlength="18" v-model="form.serialNumber" placeholder="请输入纳税人识别号"></el-input>
          </el-form-item>
          <el-form-item label="企业规模" prop="enterpriseType">
            <el-select v-model="value" placeholder="请选择">
              <el-option :value="0">小于 10 人</el-option>
              <el-option :value="1">10-50 人</el-option>
              <el-option :value="2">50-100 人</el-option>
              <el-option :value="3">100-500 人</el-option>
              <el-option :value="4">大于 500 人</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业性质" prop="enterpriseType">
            <el-select v-model="value" placeholder="请选择">
              <el-option :value="0">外企</el-option>
              <el-option :value="1">私企</el-option>
              <el-option :value="2">国企</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业" prop="enterpriseType">
            <el-select v-model="value" placeholder="请选择">
              <el-option :value="0">互联网</el-option>
              <el-option :value="1">机械制造</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业地址" prop="location">
            <el-cascader
              class="search-picker"
              placeholder="请选择企业地址"
              :options="citiesConstant"
              v-model="form.location">
            </el-cascader>
          </el-form-item>
          <el-form-item label="企业介绍" prop="location">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </el-form-item>
          <el-form-item label="企业 LOGO" prop="license">
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
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="enterpriseInfoEditMode = false">取消</el-button>
          </el-form-item>
          <span class="line"></span>
        </el-form>
        <p class="header">
          <span class="title">联系人信息</span>
          <el-button size="small" @click="contactInfoEditMode = true" v-if="!contactInfoEditMode">编辑</el-button>
        </p>
        <div class="display" v-if="!contactInfoEditMode">
          <ul>
            <li>
              <span>联系人姓名：</span>
              <span></span>
            </li>
            <li>
              <span>职位：</span>
              <span></span>
            </li>
            <li>
              <span>联系电话：</span>
              <span></span>
            </li>
            <li>
              <span>联系邮箱：</span>
              <span></span>
            </li>
          </ul>
        </div>
        <el-form ref="form" :rules="rules" :model="form" label-width="120px" v-else>
          
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
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="contactInfoEditMode = false">取消</el-button>
          </el-form-item>
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

  contactInfoEditMode: boolean = false;

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
  .enterprise-info-container
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
      margin auto
      .head
        display flex
        flex-direction row
        img
          width 100px
          height 100px
        div
          flex 1
          text-align left
          margin 0 20px
          font-size 13px
          p
            margin-left 20px
      .form
        padding 20px
        width 520px
        .display
          ul
            list-style none
            text-align left
            font-size 14px
            padding 0
            li
              margin 20px 0
              display flex
              span:first-child
                flex 0 0 100px
                text-align right
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
            margin-top 40px
            font-weight bold
            &:first-child
              margin-top 10px
            .title
              display inline-block
              vertical-align middle
              margin-right 3px
          span
            font-size 20px
</style>

<style lang="stylus">
  .enterprise-info-container
    .el-form-item__content
      text-align left
    .el-upload__tip
      margin 10px 0
      line-height 1
    .el-select, .el-cascader
      width 100%
</style>
