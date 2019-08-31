<template>
  <div class="occupation-recycle-container">
    <board class="list" title="职位列表">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <el-form-item label="招聘职位">
            <el-autocomplete
              v-model="filters.occupationName"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="删除时间">
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
          <el-form-item>
            <el-button @click="onSearch">重置</el-button>
            <el-button type="primary main" @click="onSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="onlineTableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          prop="date"
          label="职位名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="工作性质">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地区">
        </el-table-column>
        <el-table-column
          prop="address"
          label="删除时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="负责 HR">
        </el-table-column>
        <el-table-column
          prop="address"
          label="剩余天数">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">上线</el-button>
            <el-button type="text" size="small">永久删除</el-button>
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
    </board>
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
export default class OccupationreCycle extends Vue {
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
 
  onlineTableData: any = [];

  activedTabName: string = 'online';

  data: any = [];

  querySearchAsync() {}

  onSearch() {}

  mounted() {

  }
}
</script>

<style lang="stylus" scoped>
  .occupation-recycle-container
    display flex
    margin-top 30px
    .list
      text-align left
      padding-bottom 30px
      position relative
      width 100%
      .filters .form
        margin 5px 10px 20px
        .operations
          text-align right  
</style>
<style lang="stylus">
  .occupation-recycle-container
    .el-form-item
      margin-right 20px
      .el-form-item__content 
        text-align left
        .el-input, .el-select, .el-cascader
          width 150px
</style>
