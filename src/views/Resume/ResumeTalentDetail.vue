<template>
  <div class="resume-detail">
    <board class="board" title="简历详情">
      <div class="resume">
        <div class="head">
          <img :src="resumeDetail.avatarUrl"/>
          <div>
            <p class="name">{{ resumeDetail.fullName }}</p>
            <p class="meta">
              <span>{{ resumeDetail.sex }}</span>
              <span>开始工作年份：{{ resumeDetail.workBeginYear }}</span>
              <span>{{ resumeDetail.topDegree }}</span>
              <span>生日：{{ dayjs(resumeDetail.birthday).format('YYYY-MM-DD') }}</span>
              <span>政治面貌：{{ resumeDetail.politicalStatus }}</span>
              <span>海外工作经验：{{ resumeDetail.overseas }}</span>
              <span>现居地：{{ resumeDetail.residence }}</span>
            </p>
          </div>
          <!--
          <el-button class="btn-collect" type="primary main">收藏</el-button>
          -->
        </div>
        <div class="section">
          <h3><span class="icon">&#xe60c;</span>求职意向</h3>
          <div class="content">
            <ul>
              <li>
                <span>职位类型</span>
                <span>{{ resumeDetail.targetPosition }}</span>
              </li>
              <li>
                <span>意向城市</span>
                <span>{{ resumeDetail.targetCity }}</span>
              </li>
              <li>
                <span>企业行业</span>
                <span>{{ resumeDetail.targetIndustry }}</span>
              </li>
              <li>
                <span>薪资范围</span>
                <span>{{ resumeDetail.targetSalary }}</span>
              </li>
              <li>
                <span>求职状态</span>
                <span>{{ resumeDetail.jobSearchStatus }}</span>
              </li>
              <li>
                <span>工作类型</span>
                <span>{{ resumeDetail.jobType }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe605;</span>教育经历</h3>
          <div class="content" v-for="(item, index) in resumeDetail.eduExpr" :key="index">
            <div class="grid">
              <span><b>{{ item.school }}</b></span>
              <span>{{ dayjs(item.beginTime).format('YYYY-MM-DD') }} - {{ item.endTime ? dayjs(item.endTime).format('YYYY-MM-DD') : '至今' }}</span>
            </div>
            <div class="meta">
              <span>{{ item.major }}</span>
              <span>{{ item.degree }}</span>
              <span>{{ item.isUnified ? '统招' : '非统招'}}</span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe603;</span>工作经历</h3>
          <div class="content" v-for="(item, index) in resumeDetail.workExpr" :key="100 + index">
            <div class="grid">
              <span>
                <div class="meta">
                  <span><b>{{ item.company }}</b></span>
                </div>
              </span>
              <span>{{ dayjs(item.beginTime).format('YYYY-MM-DD') }} - {{ item.endTime ? dayjs(item.endTime).format('YYYY-MM-DD') : '至今' }}</span>
            </div>
            <div class="meta">
              <span>{{ item.position }}</span>
              <span>{{ item.salaryBeforeTax }}K</span>
            </div>
            <div class="textarea">
              <span>{{ item.description }}</span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe60f;</span>项目经历</h3>
          <div class="content" v-for="(item, index) in resumeDetail.projects" :key="200 + index">
            <div class="grid">
              <span>
                <div class="meta">
                  <span><b>{{ item.project }}</b></span>
                  <span>{{ item.company }}</span>
                </div>
              </span>
              <span>{{ dayjs(item.beginTime).format('YYYY-MM-DD') }} - {{ item.endTime ? dayjs(item.endTime).format('YYYY-MM-DD') : '至今' }}</span>
            </div>
            <div class="textarea">
              <span>个人职责：{{ item.duty }}</span>
            </div>
            <div class="textarea">
              <span>项目介绍：{{ item.description }}</span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe608;</span>培训经历</h3>
          <div class="content" v-for="(item, index) in resumeDetail.training" :key="300 + index">
            <div class="grid">
              <span><b>{{ item.lesson }}</b></span>
              <span>{{ item.institution }}</span>
              <span>{{ dayjs(item.beginTime).format('YYYY-MM-DD') }} - {{ item.endTime ? dayjs(item.endTime).format('YYYY-MM-DD') : '至今' }}</span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe613;</span>语言能力</h3>
          <div class="content" v-for="(item, index) in resumeDetail.languages" :key="400 + index">
            <div class="grid">
              <span><b>{{ item.language }}</b></span>
              <span>听说能力{{ findLabel(options.masterLevel, item.listenAndSpeak) }}</span>
              <span>读写能力{{ findLabel(options.masterLevel, item.readAndWrite) }}</span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe615;</span>职称等级</h3>
          <div class="content" v-for="(item, index) in resumeDetail.qualifications" :key="500 + index">
            <div class="grid">
              <span><b>{{ item.qual }}</b></span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe617;</span>专业技能</h3>
          <div class="content" v-for="(item, index) in resumeDetail.skills" :key="600 + index">
            <div class="grid">
              <span><b>{{ item.skill }}</b></span>
              <span>{{ findLabel(options.masterLevel, item.level) }}</span>
              <span></span>
            </div>
            <div class="grid">
              <span>{{ item.cert || `${item.skill}证书` }}</span>
              <span>{{ item.acquiredTime && dayjs(item.acquiredTime).format('YYYY-MM') }}</span>
              <span><el-button type="text" @click="downloadSkillAttachment(item.certId)">证书附件</el-button></span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe60d;</span>荣誉奖项</h3>
          <div class="content" v-for="(item, index) in resumeDetail.awards" :key="700 + index">
            <div class="grid">
              <span>{{ item.award }}</span>
              <span>{{ item.acquiredTime && dayjs(item.acquiredTime).format('YYYY-MM') }}</span>
              <span><el-button type="text" @click="downloadAwardAttachment(item.certId)">奖项附件</el-button></span>
            </div>
          </div>
        </div>
        <div class="section">
          <h3><span class="icon">&#xe618;</span>自我评价</h3>
          <div class="content">
            <div class="textarea">
              <span>{{ resumeDetail.selfEvaluation }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="operations">
        <el-button @click="returnBack">返回</el-button>
        <!--
        <el-button type="primary main">立即下载</el-button>
        <span>（10 银币）</span>
        -->
      </div>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import { mapState } from 'vuex';
import dayjs from 'dayjs';
import { 
  getResumeDetail, 
  getResumeAwardCert, 
  getResumeSkillCert,
  getTalentResumeDetail,
} from '@/apis/resume';
import { RootState } from '@/store/root-states';
import {
  inspectLabel,
  inspectLabelBySingleCode,
  findLabel,
} from '@/utils/transformer';

@Component({
  components: {
    Board,
  },
  computed: mapState({
    options(state: RootState) {
      return state.constants.options;
    },
    positionCatalogs(state: RootState) {
      return state.constants.positionCatalogs;
    },
    districts(state: RootState) {
      return state.constants.districts;
    },
  }),
})
export default class ResumeTalentDetail extends Vue {
  resumeId: number = 0;

  findLabel: any = findLabel;

  inspectLabel: any = inspectLabel;

  inspectLabelBySingleCode: any = inspectLabelBySingleCode;

  dayjs: any = dayjs;

  resumeDetail: any = {
    workExpr: [],
    eduExpr: [],
    projectExpr: [],
  };

  async downloadAwardAttachment(id: number) {
    const res = (await getResumeAwardCert(this.resumeId, id)).data;
    if (res.tempUrl) {
      window.open(res.tempUrl);
    }
  }

  async downloadSkillAttachment(id: number) {
    const res = (await getResumeSkillCert(this.resumeId, id)).data;
    if (res.tempUrl) {
      window.open(res.tempUrl);
    }
  }

  async created() {
    const { id } = this.$route.params;
    // fetch resume data;
    this.resumeId = Number(id);
    this.resumeDetail = (await getTalentResumeDetail(id)).data;
  }

  returnBack() {
    this.$router.go(-1);
  }
}
</script>

<style lang="stylus" scoped>
  .resume-detail
    color #000
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      display flex
      .operations
        margin 0 50px
        text-align right
        span
          font-size 14px
          color #666
      .head
        height 100px
        padding 20px 0
        margin 0 50px
        display flex
        position relative
        border-bottom solid 1px #eee
        div
          display flex
          flex-direction column
          justify-content space-around
          text-align left
          margin-left 20px
          p
            margin 0
            &.name
              color #a3292e
              font-size 24px
            &.meta
              color #333
              font-size 14px
              span
                padding 0 8px
                border-left solid 1px #999
                &:first-child
                  padding-left 0
                  border none
        .btn-collect
          position absolute
          right 0
          top 30px
          width 90px
        img
          border-radius 50%
          width 100px
      .section
        padding 20px 0
        margin 0 50px
        border-bottom solid 1px #eee
        &:last-child
          border none
        h3
          color #a3292e
          font-size 18px
          margin 0
          text-align left
        .content
          padding 0 26px
          margin-top 15px
          &+.content
            margin-top 30px
          .grid
            display flex
            margin 10px 0
            span
              flex 1
              font-size 14px
              text-align left
          .textarea
            font-size 14px
            text-align left
            margin 10px 0
          .meta
            text-align left
            span
              padding 0 10px
              font-size 14px
              border-left: solid 1px #999
              &:first-child
                padding-left 0
                border 0
          ul
            list-style none
            display flex
            flex-wrap wrap
            padding 0
            li
              width 50%
              text-align left
              margin-bottom 10px
              span
                font-size 14px
                color #333
                &:first-child
                  color #666
                  &:after
                    content: '：'
</style>
