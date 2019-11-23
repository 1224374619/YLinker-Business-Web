<template>
  <div class="resume-platform">
    <board class="board" title="平台人才库" desc="暂不支持搜索及下载附件简历">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <div class="fields">
            <el-form-item label="年龄">
              <el-input class="mini" v-model="input"></el-input> <span>&nbsp;至&nbsp;</span>
              <el-input class="mini" v-model="input"></el-input>
            </el-form-item>
            <el-form-item label="最高学历">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">本科</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作年限">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-10</el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="fields">
            <el-form-item label="意向城市">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">上海</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="企业行业">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-10</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位类型">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
            <div class="operations">
              <el-form-item>
                <el-button @click="onSearch">重置</el-button>
                <el-button type="primary main" @click="onSearch">查询</el-button>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <el-table
        @selection-change="handleExportResumes"
        :data="tableData">
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
          label="性别">
        </el-table-column>
        <el-table-column
          prop="address"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="address"
          label="现居地">
        </el-table-column>
        <el-table-column
          prop="address"
          label="最高学历">
        </el-table-column>
        <el-table-column
          prop="address"
          label="意向职位">
        </el-table-column>
        <el-table-column
          class="operations"
          width="60"
          label="操作">
          <template>
            <el-button type="text" size="small" @click="inspectResumeDetail">查看</el-button>
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

@Component({
  components: {
    Board,
    TableEmptyPlaceholder,
  },
})
export default class ResumePlatform extends Vue {
  filters: object = {
    occupationName: '',
  };

  tableData: any = [{
    address: 'f饭',
  }];

  activedTabName: string = 'online';

  data: any = [];

  onSearch() {}

  mounted() {
  }

  handleExportResumes() {}

  inspectResumeDetail() {
    this.$router.push({ path: '/resume/1' });
  }
}
</script>

<style lang="stylus" scoped>
  .resume-platform
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .filters .form
        margin 5px 10px 20px
        display flex
        flex-direction column
        .fields
          display flex
          text-align left
        .operations
          text-align center
      .pagination
        margin-top 15px
        text-align right
</style>

<style lang="stylus">
  .resume-platform
    .fields
      .el-form-item
        margin-right 10px
</style>
