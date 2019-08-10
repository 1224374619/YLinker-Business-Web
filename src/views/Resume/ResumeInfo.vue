<template>
  <div class="resume-info-container">
    <div class="left">
      <board title="岗位看板">
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
      <board class="list" title="岗位列表">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="岗位名称">
                <el-autocomplete
                  v-model="filters.occupationName"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="请输入内容"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-form-item>
            </div>
            <div class="operations">
              <el-form-item>
                <el-button @click="onSearch">重置</el-button>
                <el-button type="primary main" @click="onSearch">查询</el-button>
                <el-button type="primary" @click="onSearch">企业人才库</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleClick">
          <el-tab-pane label="已上线岗位" name="online">
            <el-table
              :data="onlineTableData">
              <el-table-column
                prop="date"
                label="岗位名称">
              </el-table-column>
              <el-table-column
                prop="name"
                label="未处理简历">
              </el-table-column>
              <el-table-column
                prop="address"
                label="录用简历">
              </el-table-column>
              <el-table-column
                prop="address"
                label="不合格简历">
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
          <el-tab-pane label="已下线岗位" name="checking">已下线岗位</el-tab-pane>
        </el-tabs>
      </board>
    </div>
    <div class="right">
      <board title="统计数据">
        <ul>
          <li>
            <span>昨日投递</span>
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
      width: 270, 
      height: 300 
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
    margin-top 20px
    .left
      flex 5
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
            font-size 14px
          span:last-child
            font-size 24px
            color #17376e
    .right
      flex 2
      ul
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
