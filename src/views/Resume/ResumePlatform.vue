<template>
  <div class="resume-platform">
    <board class="board" title="平台人才库" desc="当前仅支持在线简历">
      <div class="filters">
        <el-form :inline="true" :model="filters" class="form">
          <div class="fields">
            <el-form-item label="年龄">
              <el-input class="mini" v-model.number="filters.ageMin"></el-input> <span>&nbsp;至&nbsp;</span>
              <el-input class="mini" v-model.number="filters.ageMax"></el-input>
            </el-form-item>
            <el-form-item label="最高学历">
              <el-select v-model="filters.degreeMin" placeholder="请选择最低学历">
                <el-option :value="item.code" v-for="(item) in options.eduDegree" :key="'degree_' + item.code" :label="item.tag"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作年限">
              <el-select v-model="filters.workAgeRange" placeholder="请选择工作年限" @change="syncWorkingAge">
                <el-option :value="[item.min, item.max]" v-for="(item) in options.workAgeRange" :key="'workAge_' + item.code" :label="item.tag"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="fields">
            <el-form-item label="意向城市">
              <district class="inline-top-item" placeholder="请选择工作地址" v-model="filters.targetCitys" @input="syncSelectedDistrict" />
            </el-form-item>
            <el-form-item label="企业行业">
              <el-cascader
              :options="industryTypes"
              v-model="filters.industry"
              class="inline-top-item"
              placeholder="请选择所属行业">
            </el-cascader>
            </el-form-item>
            <el-form-item label="职位类型">
              <el-select v-model="filters.jobType" class="inline-top-item" placeholder="请选择工作性质">
                <el-option  :value="item.code" v-for="(item) in options.jobType" :key="'jobType_' + item.code" :label="item.tag"></el-option>
              </el-select>
            </el-form-item>
            <div class="operations">
              <el-form-item>
                <el-button @click="resetFilters">重置</el-button>
                <el-button type="primary main" @click="doSearch">查询</el-button>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <el-table
        @selection-change="handleExportResumes"
        current-row-key="id"
        :data="tableData">
        <table-empty-placeholder slot="empty"/>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          width="100"
          prop="fullName"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="sex"
          width="80"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="age"
          width="80"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="residence"
          label="现居地">
        </el-table-column>
        <el-table-column
          prop="topDegree"
          width="100"
          label="最高学历">
        </el-table-column>
        <el-table-column
          prop="targetPosition"
          label="意向职位">
        </el-table-column>
        <el-table-column
          class="operations"
          width="60"
          label="操作">
           <template slot-scope="scope">
            <el-button type="text" size="small" @click="inspectResumeDetail(scope.row.id)">查看</el-button>
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
        :page-size="paginations.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';
import TableEmptyPlaceholder from 'components/table-empty-placeholder.vue';
import { mapState } from 'vuex';
import { RootState } from '@/store/root-states';
import District from 'components/district.vue';
import dayjs from 'dayjs';
import {
  cascaderFormatter,
  inspectLabel,
  findLabel,
  appendParent,
} from '@/utils/transformer';
import { 
  getTalentResumeDetail,
  getTalentResumes
} from '@/apis/resume';

const DEFAULT_INDEX = 0;
const filtersProto = {
  ageMin: '',
  ageMax: '',
  degreeMin: '',
  workAgeRange: '',
  targetCitys: [],
  industry: [],
  jobType: '',
  workYear: '',
  workAddress: {
    province: '',
    county: ''
  }
};

@Component({
  components: {
    Board,
    TableEmptyPlaceholder,
    District
  },
  computed: mapState({
    enterpriseTypes(state: RootState) {
      return cascaderFormatter(state.constants.enterpriseForm);
    },
    industryTypes(state: RootState) {
      return cascaderFormatter(state.constants.industryTypes);
    },
    options(state: RootState) {
      return state.constants.options;
    },
    districts(state: RootState) {
      return state.constants.districts;
    },
  }),
})
export default class ResumePlatform extends Vue {
  
  filters: object = {
    ...filtersProto,
  };

  resetFilters() {
    this.filters = {
      ...filtersProto,
    }
  }

  total: number = 0;

  paginations: object = {
    pageSize: 10,
    pageNum: 1,
  }

  tableData: any = [];

  syncWorkingAge([min, max] : number[]) {
    (this.filters as any).workYear = max - min;
  }

  syncSelectedDistrict(value: any[]) {
    (this.filters as any).workAddress.province = value[DEFAULT_INDEX];
    if (value.length > 1) {
      (this.filters as any).workAddress.county = value[DEFAULT_INDEX + 1];
    }
  }

  handleExportResumes() {}

  inspectResumeDetail(id) {
    this.$router.push({ path: `/resume/talent/${id}` });
  }

  handleSizeChange(pageSize: number) {
    this.doSearch({ pageSize });
  }

  handleCurrentChange(pageNum: number) {
    this.doSearch({ pageNum });
  }

  async doSearch(option = {}) {
    this.paginations = {
      ...this.paginations,
      ...option,
    };

    const _t = {};
    for (let key in this.filters) {
      if ((Array.isArray(this.filters[key]) && this.filters[key].length > 0) || 
        (!Array.isArray(this.filters[key]) && this.filters[key])) {
        _t[key] = this.filters[key];
      }
    }
    const payload: any = {
      ...this.paginations,
      ..._t,
    };
    const res = (await getTalentResumes(payload)).data;
    this.tableData = res.list;
    this.total = res.total;
  }

  async created() {
    this.doSearch();
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
          .inline-top-item
            width 200px
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
