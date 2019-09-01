<template>
  <div class="resume-info-container">
    <div class="left">
      <board title="职位看板">
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
      <board class="list" title="职位列表">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="职位名称">
                <el-autocomplete
                  v-model="filters.occupationName"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="请输入内容"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-form-item>
            </div>
            <div class="operations">
              <el-button @click="onSearch">重置</el-button>
              <el-button type="primary main" @click="onSearch">查询</el-button>
            </div>
          </el-form>
        </div>
        <div class="tab-operations">
          <el-checkbox v-model="checked">只看自己</el-checkbox>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleClick">
          <el-tab-pane label="已上线职位" name="online">
            <el-table
              :data="onlineTableData">
              <table-empty-placeholder slot="empty"/>
              <el-table-column
                prop="date"
                label="职位名称">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.date}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="待处理简历">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.name}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="处理中简历">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.name}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="录用简历">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.address}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="不合格简历">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="gotoResumeListUI(scope.row.id)">{{scope.row.address}}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="上线时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="下线时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地区">
              </el-table-column>
              <el-table-column
                prop="address"
                label="负责 HR">
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
          <el-tab-pane label="已下线职位" name="checking">已下线职位</el-tab-pane>
        </el-tabs>
      </board>
    </div>
    <div class="right">
      <board title="统计数据">
        <ul>
          <li>
            <span>简历处理率</span>
            <span>1</span>
          </li>
          <li>
            <span>过去7天投递</span>
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
import G2 from '@antv/g2';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';

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

  onlineTableData: any = [
    {
      id: 1,
      date: '后端开发',
      name: 1,
      address: 1
    }
  ];

  activedTabName: string = 'online';

  data: any = [];

  querySearchAsync() {}

  onSearch() {}

  gotoResumeListUI(id: number) {
    this.$router.push({ path: `/resume/list/${id}` });
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
}
</script>

<style lang="stylus" scoped>
  .resume-info-container
    display flex
    margin-top 30px
    .left
      flex 1
      margin-right 15px
      .list
        padding-bottom 30px
        position relative
        .tab-operations
          position absolute
          top 155px
          left 250px
      .filters .form
        display flex
        justify-content space-between
        margin 5px 10px 20px
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
