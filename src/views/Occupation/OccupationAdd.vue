<template>
  <div class="occupation-add">
    <div class="body">
      <h1>新增职位</h1>
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="职位名称" prop="comment">
            <el-input v-model="form.comment" placeholder="请输入职位名称"></el-input>
          </el-form-item>
          <el-form-item label="工作性质" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">实习</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位分类" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">技术</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="月薪范围" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">10000-15000</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="最低学历" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">本科</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作年限" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-3年</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作年限" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-3年</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作地址" prop="location">
            <el-cascader
              class="search-picker"
              placeholder="请选择工作地址"
              :options="citiesConstant"
              v-model="form.location">
            </el-cascader>
          </el-form-item>
          <el-form-item label="地址详情" prop="comment">
            <el-input type="textarea" :rows="4" v-model="form.comment" placeholder="请输入留言内容"></el-input>
          </el-form-item>
          <el-form-item label="职位描述" prop="comment">
            <el-input type="textarea" :rows="4" v-model="form.comment" placeholder="请输入留言内容"></el-input>
          </el-form-item>
          <el-form-item label="任职要求" prop="comment">
            <el-input type="textarea" :rows="4" v-model="form.comment" placeholder="请输入留言内容"></el-input>
          </el-form-item>
          <el-form-item label="技能标签" prop="comment">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">添加</el-button>
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="负责 HR" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">马云</el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            v-for="(email, index) in form.emails"
            :label="'邮箱' + index"
            :key="email.key"
            :prop="'email.' + index + '.value'"
          >
            <el-input v-model="email.value" style="width: 200px; margin-right: 10px;"></el-input>
            <el-button @click.prevent="addEmail()" v-if="index === form.emails.length - 1">添加</el-button>
            <el-button @click.prevent="removeEmail(email)" v-if="form.emails.length !== 1">删除</el-button>
          </el-form-item>

          <el-form-item label="投递邮箱" prop="comment">
             <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-3年</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上线时间" prop="comment">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="下线时间" prop="comment">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
           <el-form-item label="上线时长" prop="comment">
            <span>30天</span>
          </el-form-item>
          <el-form-item class="operations">
            <el-button @click="onSubmit">取消</el-button>
            <el-button type="primary" class="main" @click="onSubmit">提交</el-button>
            <el-button type="primary" class="main" @click="onSubmit">上线</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import citiesConstant from '@/views/constants/cities';

@Component({})
export default class OccuptaionAdd extends Vue {
  form: any = {
    comment: '',
    emails: [{
      value: ''
    }],
  };

  citiesConstant: any = citiesConstant;

  dynamicTags: string[] = ['标签一', '标签二', '标签三'];

  inputVisible: boolean = false;
    
  inputValue: string = '';

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

  }

  handleClose(tag: string) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
  };

  showInput() {
    this.inputVisible = true;
    this.$nextTick(() => {
      /*
      const ref: any = this.$refs.saveTagInput.$refs;
      ref.input.focus();
      */
    });
  };

  handleInputConfirm() {
    let inputValue = this.inputValue;
    if (inputValue) {
      this.dynamicTags.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  }

  removeEmail(item: any) {
    var index = this.form.emails.indexOf(item)
    if (index !== -1) {
      this.form.emails.splice(index, 1)
    }
  };

  addEmail() {
    this.form.emails.push({
      value: '',
      key: Date.now()
    });
  };
}
</script>

<style lang="stylus" scoped>
  .occupation-add
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
      h1
        font-size 20px
        text-align left 
        margin 30px 0px 10px
      .form
        padding 10px
        width 720px
        .el-tag + .el-tag
          margin-left 10px
        .button-new-tag
          margin-left 10px
          height 32px
          line-height 30px
          padding-top 0
          padding-bottom 0
        .input-new-tag
          width 90px
          margin-left 10px
          vertical-align bottom
        .line
          height 1px
          background-color #eee
          margin 30px 0
</style>

<style lang="stylus">
  .occupation-add
    .el-form-item__content
      text-align left
    .operations
      .el-form-item__content
        text-align center
</style>

