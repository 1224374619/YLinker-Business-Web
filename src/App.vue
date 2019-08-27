<template>
  <div id="app">
    <customized-nav class="nav"/>
    <div :class="{ 'full-screen': isFullScreen, 'default-bg': isDefaultBg, 'main-container': true }">
      <router-view />
    </div>
    <customized-footer :showSimple="isSimpleFooter" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';

@Component({
  components: {
    CustomizedFooter,
    CustomizedNav,
  },
})
export default class App extends Vue {
  isFullScreen: boolean = false;

  isSimpleFooter: boolean = false;

  isDefaultBg: boolean = false;

  updated() {
    if (this.$route.name) {
      this.isFullScreen = [
        // entering full screen;
        'login',
        'register',
        'reset-password',
        'reset-result',
        'user-license',
        'enterprise-info-update-result',
      ].includes(this.$route.name);
      this.isSimpleFooter = !([
        // show full footers;
        'home'
      ].includes(this.$route.name));
      this.isDefaultBg = [
        // show full footers;
        'login',
        'register',
        'reset-password',
        'reset-result',
        'user-license',
        'enterprise-info-update-result',
      ].includes(this.$route.name);
    }
  }
}
</script>


<style lang="stylus">
@font-face {
  font-family: 'customized-icon';
  src: url('//at.alicdn.com/t/font_1370686_niq5z8fr8to.eot');
  src: url('//at.alicdn.com/t/font_1370686_niq5z8fr8to.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1370686_niq5z8fr8to.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1370686_niq5z8fr8to.woff') format('woff'),
  url('//at.alicdn.com/t/font_1370686_niq5z8fr8to.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1370686_niq5z8fr8to.svg#iconfont') format('svg');
}

.icon {
  font-family: "customized-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin 0 5px
}

html, body
  margin 0
  height 100%
  font-family PingFang SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif
  background-color #f0f0f0
#app
  height 100%
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  display flex
  flex-direction column
  .nav
    position relative
    flex 0 0 70px
  .main-container
    flex 1
    position relative
    background-color #f0f0f0
    justify-content space-between
    width 1280px
    display flex
    margin-left auto 
    margin-right auto
    flex-direction column
  .full-screen
    width 100%
  .default-bg
    background url('assets/images/background.jpg')
.el-tooltip
  span
    border-radius 50%
    background-color #000
    color #fff
    display inline-block
    width 15px
    height 15px
    cursor pointer
    font-size 12px
    text-align center
    line-height 15px
button.main
  background-color #ff7152 !important
  border none
  color white !important
  &:hover
    opacity .9
button.el-button--text
  color #ff7152 !important
  &:hover
    opacity .9
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li
  background-color white
  border 0.7px solid rgba(0,0,0,0.15)
.el-table th>.cell
  font-size 13px
.upload
  .el-upload 
    border 1px dashed #d9d9d9
    border-radius 6px
    cursor pointer
    position relative
    overflow hidden
    height 100px
    width 100px
    display flex
    justify-content center
    align-items center
  .el-upload:hover
    border-color #409EFF
.mini.el-input
  width 60px
</style>


