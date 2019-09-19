<template>
  <div class="occupation-detail">
    <div class="body">
      <div class="form">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="职位名称">
            <sapn class="value">{{ form.positionName }}</sapn>
            <span class="tag">{{ statusMapper[form.state] }}</span>
          </el-form-item>
          <el-form-item label="工作性质">
             <sapn class="value">{{ form.jobType }}</sapn>
          </el-form-item>
          <el-form-item label="职位分类">
             <sapn class="value">{{ form.positionCatalog }}</sapn>
          </el-form-item>
          <el-form-item label="月薪范围">
           <sapn class="value">{{ form.salaryMin }}-{{ form.salaryMax }}K</sapn>
          </el-form-item>
          <el-form-item label="最低学历">
            <sapn class="value">{{ form.degreeMin }}</sapn>
          </el-form-item>
          <el-form-item label="工作年限">
            <sapn class="value" v-if="form.workAgeMax">{{ form.workAgeMin }}-{{ form.workAgeMax }}年</sapn>
            <sapn class="value" v-else>{{ form.workAgeMin }}年</sapn>
          </el-form-item>
          <el-form-item label="工作地址">
            <sapn class="value">{{ form.positionName }}</sapn>
          </el-form-item>
          <el-form-item label="职位描述">
            <sapn class="value">{{ form.description }}</sapn>
          </el-form-item>
          <el-form-item label="任职要求">
            <sapn class="value">{{ form.requirement }}</sapn>
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="负责 HR">
            <sapn class="value">{{ form.managerUid }}</sapn>
          </el-form-item>
           <el-form-item label="投递邮箱">
             <sapn class="value">{{ form.addedEmails.join(' | ') }}</sapn>
          </el-form-item>
          <el-form-item class="operations">
            <el-button @click="onReturnOccupationInfo">返回</el-button>
            <el-button type="primary" class="main" @click="gotoOccupationEditUI()">编辑</el-button>
            <!-- <el-button type="primary" class="main" @click="onSubmit">上线</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <!--
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
      -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import { 
  getPositionDetail
} from '@/apis/position';

@Component({
  components: {
    Board,
  },
})
export default class OccuptaionDetail extends Vue {
  statusMapper = ['已下线', '已上线', '待上线', '编辑中', '审核中', '审核失败'];

  form: any = {
    addedEmails: [
      {
        value: '',
        key: '',
      }
    ],
    state: '',
    addressId: '',
    degreeMin: '',
    description: '',
    isGraduate: true,
    jobType: '',
    managerUid: '',
    positionCatalog: '',
    positionName: '',
    published: true,
    requirement: '',
    salaryMax: '',
    salaryMin: '',
    template: false,
    workAddress: {
      county: 0,
      detail: '',
      latitude: 0,
      longitude: 0,
      province: 0
    },
    workAgeMax: 0,
    workAgeMin: 0,
  };

  occupationId: number = 0;

  gotoOccupationEditUI() {
    this.$router.push({ path: `/occupation/${this.occupationId}/edit` });
  }

  onReturnOccupationInfo() {
    this.$router.push({ name: 'occupation-info' });
  }

  async created() {
    this.occupationId = Number(this.$route.params.id);
    if (this.occupationId) {
      this.form = (await getPositionDetail(this.occupationId)).data;
    } 
  }
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

