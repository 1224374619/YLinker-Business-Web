<template>
  <div class="account">
    <customized-nav class="nav"/>
    <div class="body">
      <el-container>
        <el-aside width="200px">
          <el-menu
            @select="toggleActivedMenu"
            :router="true"
            :default-active="activedMenu"
            class="el-menu">
            <el-menu-item :index="route.path" v-for="(route, index) in subRoutes" :key="index">
                <i :class="route.icon"></i>
                <span slot="title">{{ route.label }}</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>您的位置：账号管理</el-breadcrumb-item>
            <template v-for="(route, index) in subRoutes">
              <el-breadcrumb-item :key="index" :to="{ path: route.path }" v-if="currentRoute === route.path">{{ route.label }}</el-breadcrumb-item>
            </template>
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
  icon: string,
  path: string,
  label: string
};

const subRoutes: routeType[] = [{
  icon: 'el-icon-info',
  path: '/account/basic',
  label: '基本信息',
}, {
  icon: 'el-icon-refresh',
  path: '/account/reset-password',
  label: '重置密码',
}];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Account extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/account/basic';

  subRoutes = subRoutes;
  
  syncRoute(source: string) {
    this.currentRoute = source;
    this.activedMenu = this.currentRoute;
  }

  mounted() {
    // init state;
    this.syncRoute(this.$route.path);
  }

  updated() {
    // update state;
    this.syncRoute(this.$route.path);
  }

  toggleActivedMenu(e: string) {
    this.syncRoute(e);
  }
}
</script>

<style lang="stylus" scoped>
  .account
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
        padding 30px 40px
</style>

<style lang="stylus">
  .enterprise
    li.is-active
      border-right solid 3px #1f368d
    .el-menu
      border none
</style>
