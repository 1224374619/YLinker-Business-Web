<template>
  <div class="occupation">
    <el-container>
      <el-aside width="177px">
        <el-menu
          :router="true"
          @select="toggleActivedMenu"
          :default-active="activedMenu"
          class="el-menu">
          <template v-for="(route, index) in subRoutes">
            <el-menu-item :index="route.path" :key="index" v-if="!route.children">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ route.label }}</span>
            </el-menu-item>
            <el-submenu :index="route.label" :key="index" v-else>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ route.label }}</span>
              </template>
              <el-menu-item-group>
                <template v-for="(route, index) in route.children">
                  <el-menu-item :index="`${route.path}`" :key="index">{{ route.label }}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </template>
          </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>您的位置：简历管理</el-breadcrumb-item>
          <template v-for="(route, index) in subRoutes">
            <el-breadcrumb-item :key="index" :to="{ path: route.path }" v-if="currentRoute.includes(route.path)">{{ route.label }}</el-breadcrumb-item>
            <template v-for="(subRoute, subIndex) in route.children">
              <el-breadcrumb-item :key="index + subIndex" :to="{ path: subRoute.path }" v-if="currentRoute === subRoute.path">{{ subRoute.label }}</el-breadcrumb-item>  
            </template>
          </template>
        </el-breadcrumb>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

declare type routeTypeAdvanced = {
  path?: string,
  label: string,
  children?: {
    path: string,
    label: string,
  }[],
};

const subRoutes: routeTypeAdvanced[] = [{
  path: '/resume/info',
  label: '简历总览',
}, {
  path: '/resume/blacklist',
  label: '黑名单',
}, {
  path: '/resume/talent',
  label: '企业人才库',
  children: [{
    path: '/resume/talent/info',
    label: '详情',
  },{
    path: '/resume/talent/collection',
    label: '收藏夹',
  }, {
    path: '/resume/talent/downloaded',
    label: '已下载简历',
  }]
},];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Enterprise extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/resume/info';

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
  .occupation
    margin-bottom 10px
    aside
      background-color white
      margin-right 10px
      ul
        text-align left 
    main
      background-color white
      
</style>

<style lang="stylus">
  .occupation
    li.el-menu-item.is-active
      border-left solid 3px #1f368d
      background-color rgba(31, 54, 141, 0.15);
    .el-menu
      border none
</style>
