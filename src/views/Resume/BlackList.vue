<template>
  <div class="resume-blacklist">
    <board class="board" title="黑名单">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form" label-width="70px">
          <div class="fields">
            <el-form-item label="姓名">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="投递岗位">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">工程师</el-option>
              </el-select>
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
      <el-table
        :data="onlineTableData">
        <el-table-column
          prop="date"
          width="80"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="name"
          width="50"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="address"
          width="80"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="address"
          label="工作年限">
        </el-table-column>
        <el-table-column
          prop="address"
          width="120"
          label="海外工作经历">
        </el-table-column>
        <el-table-column
          prop="address"
          label="现居地">
        </el-table-column>
         <el-table-column
          prop="address"
          label="学历">
        </el-table-column>
         <el-table-column
          prop="address"
          label="投递岗位">
        </el-table-column>
         <el-table-column
          prop="address"
          label="简历状态">
        </el-table-column>
         <el-table-column
          prop="address"
          label="投递时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">移除黑名单</el-button>
          </template>
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
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';

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

  onSearch() {}

  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
  .resume-blacklist
    display flex
    margin-top 20px
    .board
      width 100%
      padding-bottom 30px
      .filters
        margin 20px
        .form
          display flex
          justify-content space-between
      .pagination
        margin-top 15px
        text-align right 

</style>
