<template>
  <div class="occupation-detail">
    <div class="body">
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="职位名称" prop="comment">
            <sapn class="value">111</sapn>
            <span class="tag">待上线</span>
          </el-form-item>
          <el-form-item label="工作性质" prop="comment">
             <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="职位分类" prop="comment">
             <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="月薪范围" prop="comment">
           <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="最低学历" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="工作年限" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="工作年限" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="工作地址" prop="location">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="职位描述" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="任职要求" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="技能标签" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="负责 HR" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
           <el-form-item label="投递邮箱" prop="comment">
             <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="上线时间" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item label="下线时间" prop="comment">
           <sapn class="value">111</sapn>
          </el-form-item>
           <el-form-item label="上线时长" prop="comment">
            <sapn class="value">111</sapn>
          </el-form-item>
          <el-form-item class="operations">
            <el-button @click="onSubmit">返回</el-button>
            <el-button type="primary" class="main" @click="onSubmit">编辑</el-button>
            <el-button type="primary" class="main" @click="onSubmit">上线</el-button>
          </el-form-item>
        </el-form>
      </div>
      <board title="统计数据">
        <ul>
          <li>
            <span>当日浏览</span>
            <span>1</span>
          </li>
          <li>
            <span>今日浏览</span>
            <span>1</span>
          </li>
        </ul>
        <div class="chart" ref="chart"></div>
      </board>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import citiesConstant from '@/views/constants/cities';
import G2 from '@antv/g2';
import Board from 'components/board.vue';

@Component({
  components: {
    Board,
  },
})
export default class OccuptaionDetail extends Vue {
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
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ]; 

    const div: any = this.$refs['chart'];
    const chart = new G2.Chart({
      container: div,
      width: 230, 
      height: 150,
      padding: {
        top: 15,
        right: 10,
        bottom: 35,
        left: 35,
      }
    });

    chart.source(data);
    chart.line().position('genre*sold');
    chart.point().position('genre*sold').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });
    chart.render();
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
  .occupation-detail
    display flex
    flex-direction column
    .body
      display flex
      justify-content center
      flex-direction column
      flex 1
      position relative 
      background-color white
      .board
        position absolute
        right 20px
        top 70px
        ul
          margin 5px 0
          list-style none
          display flex
          justify-content space-around
          padding 0
          li
            flex 1
            display flex
            flex-direction column
            span:first-child
              color #666
              font-size 12px
            span:last-child
              font-size 14px
              color #17376e
      .form
        margin-top 20px
        padding 10px
        width 720px
        .line
          height 1px
          background-color #eee
          margin 30px 0
</style>

<style lang="stylus">
  .occupation-detail
    .el-form-item__content
      text-align left
      .value
        margin-left 40px
      .tag
        margin-left 15px
    .operations
      .el-form-item__content
        text-align center
</style>

