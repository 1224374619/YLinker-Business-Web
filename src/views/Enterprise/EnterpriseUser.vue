<template>
  <div class="enterprise-user">
    <el-dialog width="450px" center title="新增用户" :visible.sync="addUserDialogVisible">
      <el-form :model="addUserForm" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="addUserForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addUserForm.tel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-radio v-model="radio" label="1">管理员</el-radio>
          <el-radio v-model="radio" label="2">普通用户</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserDialogVisible = false">取消</el-button>
        <el-button type="primary main" @click="doConfirmAddUser">确定</el-button>
      </div>
    </el-dialog>
    <board class="board" title="用户列表">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form" label-width="120px">
          <div class="fields">
            <el-form-item label="用户姓名/手机号">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
          </div>
          <div class="operations">
            <el-button @click="addUserDialogVisible = true">新增</el-button>
            <el-button type="primary main" @click="onSearch">查询</el-button>
          </div>
        </el-form>
      </div>
      <el-table
        :data="onlineTableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          prop="date"
          width="80"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="name"
          width="120"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="address"
          width="100"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="address"
          label="权限">
        </el-table-column>
        <el-table-column
          prop="address"
          label="注册时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
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
    TableEmptyPlaceholder
  },
})
export default class EnterpriseUser extends Vue {
  filters: object = {
    occupationName: ''
  };

  addUserForm: object = {
    username: '',
    tel: '',
    role: ''
  };

  addUserDialogVisible: boolean = false;

  onlineTableData: any = [];

  activedTabName: string = 'online';

  data: any = [];

  onSearch() {}

  doConfirmAddUser() {}

  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-user
    display flex
    margin-top 30px
    .board
      width 100%
      padding-bottom 30px
      .filters .form
        margin 5px 10px 20px
        display flex
        justify-content space-between
        .operations
          text-align right 
      .pagination
        margin-top 15px
        text-align right 

</style>
