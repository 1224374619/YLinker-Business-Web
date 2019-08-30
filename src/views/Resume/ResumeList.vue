<template>
  <div class="occupation-info-container">
    <div class="left">
      <board class="list" title="后端开发" desc="介绍介绍介绍介绍介绍">
        <div class="filters">
          <el-form :inline="true" :model="filters" class="form">
            <div class="fields">
              <el-form-item label="求职状态">
                <el-select v-model="value" placeholder="请选择求职状态">
                  <el-option value="1">xxx</el-option>
                </el-select>
              </el-form-item>
              <el-button type="text" @click="showMoreFilters = true" v-if="!showMoreFilters">展开 ▼</el-button>
              <el-button type="text" @click="showMoreFilters = false" v-if="showMoreFilters">收起 ▲</el-button>
            </div>
            <div class="fields" v-if="showMoreFilters">
              <el-form-item label="地区">
                <el-cascader
                  class="search-picker"
                  style="margin-bottom: 10px;"
                  placeholder="请选择地区"
                  :options="citiesConstant"
                  v-model="location">
                </el-cascader>
              </el-form-item>
              <el-form-item label="简历完整度">
                <el-select v-model="value" placeholder="请选择简历完整度">
                  <el-option value="1">手动</el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="投递时间">
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
            </div>
            <div class="operations">
              <el-form-item>
                <el-button @click="onSearch">重置</el-button>
                <el-button type="primary main" @click="onSearch">查询</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <el-tabs v-model="activedTabName" type="card" @tab-click="handleClick">
          <div class="tab-operations">
            <el-button type="text" class="underline mini">批量导出简历</el-button>
          </div>
          <el-tab-pane label="待处理" name="online">
            <el-table
              :data="onlineTableData">
              <table-empty-placeholder slot="empty"/>
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="date"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="name"
                label="工作年限">
              </el-table-column>
              <el-table-column
                prop="address"
                label="求职状态">
              </el-table-column>
              <el-table-column
                prop="address"
                label="所在地区">
              </el-table-column>
              <el-table-column
                prop="address"
                label="简历完整度">
              </el-table-column>
              <el-table-column
                prop="address"
                label="投递时间">
              </el-table-column>
              <el-table-column
                width="305"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">通知面试/笔试</el-button>
                  <el-button type="text" size="small">不合格</el-button>
                  <el-button type="text" size="small">加入黑名单</el-button>
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
          <el-tab-pane label="处理中" name="pending">处理中</el-tab-pane>
          <el-tab-pane label="录用" name="checking">录用</el-tab-pane>
          <el-tab-pane label="不合格" name="invalid">不合格</el-tab-pane>
        </el-tabs>
      </board>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import citiesConstant from '@/views/constants/cities';

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

  activedTabName: string = 'online';

  data: any = [];

  querySearchAsync() {}

  onSearch() {}

  gotoOccupationDetailUI(id: number) {
    this.$router.push({ path: `/occupation/${id}` });
  }

  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
  .occupation-info-container
    display flex
    margin-top 30px
    .left
      flex 5
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
          position absolute
          top -56px
          right 0
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
          width 160px
</style>
