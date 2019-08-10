<template>
  <div class="occupation">
    <el-container>
      <el-aside width="177px">
        <el-menu
          :router="true"
          @select="toggleActivedMenu"
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
          <el-breadcrumb-item>您的位置：岗位管理</el-breadcrumb-item>
          <template v-for="(route, index) in subRoutes">
            <el-breadcrumb-item :key="index" :to="{ path: route.path }" v-if="currentRoute === route.path">{{ route.label }}</el-breadcrumb-item>
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

declare type routeType = {
  path: string,
  label: string
};

const subRoutes: routeType[] = [{
  path: '/occupation/info',
  label: '岗位总览',
}, {
  path: '/occupation/add',
  label: '新增岗位',
}];

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class Enterprise extends Vue {
  currentRoute: string = '';

  activedMenu: string = '/occupation/info';

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
