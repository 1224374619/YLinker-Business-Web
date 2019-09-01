<template>
  <div class="occupation-info-container">
    <div class="left">
      <board title="职位看板">
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
      <board class="list" title="职位列表">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="招聘职位">
                <el-autocomplete
                  v-model="filters.occupationName"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="请输入内容"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-form-item>
              <el-button type="text" @click="showMoreFilters = true" v-if="!showMoreFilters">展开 ▼</el-button>
              <el-button type="text" @click="showMoreFilters = false" v-if="showMoreFilters">收起 ▲</el-button>
            </div>
            <div class="fields" v-if="showMoreFilters">
              <el-form-item label="工作地址">
                <el-cascader
                  class="search-picker"
                  style="margin-bottom: 10px;"
                  placeholder="请选择工作地址"
                  :options="citiesConstant"
                  v-model="location">
                </el-cascader>
              </el-form-item>
              <el-form-item label="上线时间">
                 <el-date-picker
                  v-model="value7"
                  type="datetimerange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="上线方式">
                <el-select v-model="value" placeholder="请选择">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="fields" v-if="showMoreFilters">
              <el-form-item label="负责 HR">
                <el-select v-model="value" placeholder="请选择">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="下线时间">
                 <el-date-picker
                  v-model="value7"
                  type="datetimerange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="下线方式">
                <el-select v-model="value" placeholder="请选择">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="operations">
              <el-button @click="onSearch">重置</el-button>
              <el-button type="primary main" @click="onSearch">查询</el-button>
            </div>
          </el-form>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleClick">
          <div class="tab-operations">
            <el-checkbox v-model="checked">只看自己</el-checkbox>
          </div>
          <el-tab-pane label="已上线" name="ONLINE">
            <el-table
              :data="onlineTableData">
              <table-empty-placeholder slot="empty"/>
              <el-table-column
                prop="date"
                label="职位名称">
              </el-table-column>
              <el-table-column
                prop="name"
                label="下线时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="职位性质">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地区">
              </el-table-column>
              <el-table-column
                prop="address"
                label="投递数量">
              </el-table-column>
              <el-table-column
                prop="address"
                label="负责 HR">
              </el-table-column>
              <el-table-column
                width="165"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoOccupationDetailUI(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small">下线</el-button>
                  <el-button type="text" size="small">刷新排名</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              background
              class="pagination"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="待上线" name="PENDING">待上线</el-tab-pane>
          <el-tab-pane label="审核中" name="CHECKING">角色管理</el-tab-pane>
          <el-tab-pane label="审核未通过" name="INVALID">定时任务补偿</el-tab-pane>
          <el-tab-pane label="已下线" name="OFFLINE">定时任务补偿</el-tab-pane>
        </el-tabs>
      </board>
    </div>
    <div class="right">
      <board title="统计数据">
        <ul>
          <li>
            <span>今日浏览</span>
            <span>1</span>
          </li>
          <li>
            <span>今日投递</span>
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
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import citiesConstant from '@/views/constants/cities';
import G2 from '@antv/g2';

@Component({
  components: {
    Board,
    TableEmptyPlaceholder
  },
})
export default class OccupationInfo extends Vue {
  filters: object = {
    occupationName: ''
  };

  pickerOptions2: object = {
    shortcuts: [{
      text: '昨天',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '今天',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一周',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick(picker: any) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    }]
  };

  citiesConstant: any = citiesConstant;

  showMoreFilters: boolean = false;
 
  onlineTableData: any = [
    {
      id: 1,
      address: '1'
    }
  ];

  activedTabName: string = 'ONLINE';

  data: any = [];

  querySearchAsync() {}

  onSearch() {}

  gotoOccupationDetailUI(id: number) {
    this.$router.push({ path: `/occupation/${id}` });
  }

  mounted() {
    // setup active tabs;
    this.activedTabName = this.$route.query.tab as string || 'ONLINE';

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
  .occupation-info-container
    display flex
    margin-top 30px
    .left
      flex 1
      margin-right 15px
      .list
        padding-bottom 30px
        position relative
        .filters .form
          margin 5px 10px 20px
          display flex
          flex-direction column
          .fields
            text-align left
          .operations
            text-align right  
        .tab-operations
          display flex
          justify-content space-between
          align-items center
          width 300px
          position absolute
          top -47px
          left 460px
          z-index 1
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
      width 240px
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
</style>
<style lang="stylus">
  .occupation-info-container
    .el-tabs__content
      overflow initial
    .el-form-item
      margin-right 20px
      .el-form-item__content 
        text-align left
        .el-input, .el-select, .el-cascader
          width 170px
</style>
