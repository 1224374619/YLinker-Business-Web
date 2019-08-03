<template>
  <div class="enterprise">
    <customized-nav class="nav"/>
    <div class="body">
      <el-container>
        <el-aside width="200px">
          <el-menu
            :router="true"
            :default-active="activedMenu"
            class="el-menu">
            <el-menu-item :index="route.path" v-for="(route, index) in subRoutes" :key="index">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ route.label }}</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>您的位置：企业中心</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(route, index) in subRoutes" :key="index" :to="{ path: route.path }" v-if="currentRoute === route.path">{{ route.label }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view/>
        </el-main>
      </el-container>
    </div>
    <customized-footer :showSimple="true" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

declare type routeType = {
  path: string,
  label: string
};

const subRoutes: routeType[] = [{
  path: '/enterprise/info',
  label: '信息管理',
}, {
  path: '/enterprise/user',
  label: '用户管理',
}, {
  path: '/enterprise/bill',
  label: '账单管理',
}];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Enterprise extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/enterprise/info';

  subRoutes = subRoutes;

  mounted() {
    this.currentRoute = this.$route.path;
    this.activedMenu = this.currentRoute;
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise
    height 100%
    display flex
    flex-direction column
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      justify-content center
      flex 1
      position relative
      background-color #f0f0f0
      margin auto
      width 1280px
      aside
        background-color white
        margin-right 10px
      main
        background-color white
</style>

<style lang="stylus">
  .enterprise
    li.is-active
      border-right solid 3px #1f368d
    .el-menu
      border none
</style>
