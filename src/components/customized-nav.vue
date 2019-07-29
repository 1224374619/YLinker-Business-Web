<template>
  <nav>
      <div class="nav-body">
        <img @click="gotoHomeUI" :src="require('../assets/images/logo.png')" />
        <div class="menu">
          <div class="group" v-if="!ctlHideMenus">
            <router-link to="/">首页</router-link>
            <router-link to="/occupations">职位</router-link>
            <router-link to="/resumes">简历</router-link>
            <router-link to="/contact-us">联系我们</router-link>
          </div>
          <div class="btn-set" v-if="!hasLogin">
            <button @click="gotoLoginUI">登录</button>
            <button @click="gotoRegisterUI">注册</button>
          </div>
          <div class="user-operations" v-else>
            <el-dropdown placement="bottom-start" @command="dealMenuClick">
              <img :src="placeholder" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>我的简历</el-dropdown-item>
                <el-dropdown-item>账号设置</el-dropdown-item>
                <el-dropdown-item divided command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { RootState } from '@/store/root-states';

@Component({
  props: {
    ctlHideMenus: {
      type: Boolean,
      default: false,
    },
  },
  computed: mapState({
    hasLogin(state: RootState) {
      return state.hasLogin;
    },
  }),
})
export default class CustomizedNav extends Vue {
  gotoHomeUI() {
    this.$router.push({ path: '/' });
  }

  gotoLoginUI() {
    this.$router.push({ path: 'login' });
  }

  gotoRegisterUI() {
    this.$router.push({ path: 'register' });
  }
}
</script>

<style lang="stylus" scoped>
  nav
      z-index 100
      background-color #1f368d
      box-shadow 0px 1px 9px #ccc
      width 100%
      position fixed
      top 0
      display flex
      flex-direction row
      height 70px
      align-content center
      align-items center
      .nav-body
        display flex
        flex-direction row
        align-items center
        margin auto
        width 1280px
        min-width 1024px
        height 100%
        img
          height 40
          margin 0 20px
          cursor pointer
        .menu
          display flex
          flex 1
          height 100%
          justify-content flex-end
          align-items center
          .group
            display flex
            height 100%
            flex 1
            margin 0 50px
            a
              width 100px
              color white
              text-decoration none
              display flex
              align-items center
              justify-content center
              &.router-link-active
                color #6EC5D2
                border-bottom solid 3px #6EC5D2
          .user-operations
            cursor pointer
            img
              width 50px
              height 50px
              border-radius 50%
          .btn-set
            margin 0 15px
            button
              cursor pointer
              font-size 15px
              background none
              border none
              padding 0 13px
              border-right solid 1px lightgrey
              color white
              &:last-child
                border none
</style>
