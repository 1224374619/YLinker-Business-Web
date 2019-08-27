<template>
  <div class="container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>您的位置：首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="left">
        <board title="简历看板" :seeMoreAction="seeMoreAction">
          <ul>
            <li>
              <span>本日新增</span>
              <span>1</span>
            </li>
            <li>
              <span>待处理</span>
              <span>1</span>
            </li>
          </ul>
        </board>
        <board title="职位看板" :seeMoreAction="seeMoreAction">
          <ul>
            <li>
              <span>已上线</span>
              <span>1</span>
            </li>
            <li>
              <span>待上线</span>
              <span>1</span>
            </li>
            <li>
              <span>审核中</span>
              <span>1</span>
            </li>
            <li>
              <span>审核未通过</span>
              <span>1</span>
            </li>
            <li>
              <span>已下线</span>
              <span>1</span>
            </li>
          </ul>
        </board>
        <board title="企业账单" :seeMoreAction="seeMoreAction">
        </board>
      </div>
      <div class="right">
        <board title="系统通知" :seeMoreAction="seeMoreAction">
          <div class="notifications">
            <div class="noti-head">
              <span>标题</span>
              <span class="tag">未读</span>
            </div>
            <div class="noti-content">
              我是文案我是文案我是文案我是文案文案我是文案我是文案文...
              <span class="more">详情 &gt;</span>
            </div>
          </div>
        </board>
        <board title="企业摘要" :seeMoreAction="seeMoreAction">
          <div class="enterprise">
            <div class="enter-head">
              <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/f2294b1af49e18ccfdbb2ccae022ff04_121_121.png" />
              <div>
                <span>企业信息完整度</span>
                <el-progress :percentage="70"></el-progress>
              </div>
            </div>
            <div class="enter-content">
              <p>企业名称：上海XX有限公司 <span class="tag">已审核</span></p>
              <p>企业简称：xxxx公司</p>
            </div>
          </div>
        </board>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import G2 from '@antv/g2';

@Component({
  components: {
    Board,
  },
})
export default class OccupationInfo extends Vue {
  filters: object = {
    occupationName: ''
  };

  onlineTableData: any = [];

  activedTabName: string = 'online';

  data: any = [];

  querySearchAsync() {}

  onSearch() {}

  seeMoreAction() {}

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
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    margin-top 30px
    width 1280px
    background-color white
    margin auto
    padding 20px
    margin-bottom 20px
    flex-direction column
    .content
      margin-top 30px
      display flex
      .left
        flex 1
        margin-right 15px
        .list
          padding-bottom 30px
        .filters .form
          display flex
          justify-content space-between
          margin-bottom 20px
        .pagination
          margin-top 20px
        ul
          margin 0
          list-style none
          display flex
          justify-content space-around
          padding 0
          li
            flex 1
            display flex
            flex-direction column
            span:first-child
              line-height 27px
              color #666
              font-size 14px
            span:last-child
              line-height 33px
              font-size 24px
              color #17376e
      .right
        flex 0 0 240px
        .tag
          color white
          background-color #358be5
          border-radius 10px
          padding 0 5px
          font-size 12px
          height 18px
        .notifications
          margin 10px
          cursor pointer
          .noti-head
            display flex
            font-size 16px
            justify-content space-between
            align-items center
          .noti-content
            color #666
            font-size 12px
            text-align left
            margin-top 7px
            .more
              color #ff7152
       .enterprise
        margin 10px
        .enter-head
          display flex
          align-items center
          justify-content center
          img
            width 50px
            height 50px
          div
            margin-left 10px
            text-align left
            font-size 12px 
            color #999
            flex 1
            span
              margin-left 10px
        .enter-content
          font-size 12px
          color #333
          text-align left
          margin-top 5px
</style>
