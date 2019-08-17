<template>
  <div class="talent-downloaded">
    <board class="board" title="平台人才库">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <div class="fields">
            <el-form-item label="求职意向">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="简历完整度">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">50%</el-option>
                <el-option value="2">100%</el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">投递本公司</el-checkbox>
            </el-form-item>
          </div>
          <div class="fields">
            <el-form-item label="性别">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">男</el-option>
                <el-option value="2">女</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">18-25</el-option>
                <el-option value="2">25-30</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学历">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">本科</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="毕业院校">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">上海交大</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="现居地">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">18-25</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作年限">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">1-10</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="海外工作经历">
              <el-select v-model="value" placeholder="请选择">
                <el-option value="1">有</el-option>
                <el-option value="1">无</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司名称">
              <el-autocomplete
                v-model="filters.occupationName"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
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
            <el-form-item>
              <el-button @click="onSearch">重置</el-button>
              <el-button type="primary main" @click="onSearch">查询</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table
        @selection-change="handleExportResumes"
        :data="tableData">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          width="60"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="name"
          width="50"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="address"
          width="50"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="address"
          width="80"
          label="工作年限">
        </el-table-column>
        <el-table-column
          prop="address"
          width="105"
          label="海外工作经历">
        </el-table-column>
        <el-table-column
          prop="address"
          label="现居地">
        </el-table-column>
        <el-table-column
          prop="address"
          width="60"
          label="学历">
        </el-table-column>
        <el-table-column
          prop="address"
          label="毕业院校">
        </el-table-column>
        <el-table-column
          prop="address"
          label="求职意向">
        </el-table-column>
        <el-table-column
          prop="address"
          label="是否投递本公司">
        </el-table-column>
        <el-table-column
          prop="address"
          label="简历完整度">
        </el-table-column>
        <el-table-column
          class="operations"
          label="操作">
          <template>
            <el-button type="text" size="small" @click="inspectResumeDetail">查看</el-button>
            <el-button type="text" size="small">收藏</el-button>
            <el-button type="text" size="small">下载</el-button>
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

@Component({
  components: {
    Board,
  },
})
export default class OccupationInfo extends Vue {
  filters: object = {
    occupationName: ''
  };

  tableData: any = [{
    address: 'f饭饭'
  }];

  activedTabName: string = 'online';

  data: any = [];

  onSearch() {}

  mounted() {
  }

  handleExportResumes() {}

  inspectResumeDetail() {
    this.$router.push({ path: '/resume/talent/1' });
  }
}
</script>

<style lang="stylus" scoped>
  .talent-downloaded
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .filters
        margin 20px 0
        .form
          display flex
          flex-direction column
          .fields
            text-align left 
          .operations
            text-align right 
      .pagination
        margin-top 15px
        text-align right 
</style>

<style lang="stylus">
  .talent-downloaded
    .fields
      .el-form-item__content
        width 150px

</style>


