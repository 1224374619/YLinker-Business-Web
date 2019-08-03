<template>
  <div class="enterprise-register-result-container">
    <customized-nav class="nav"/>
    <div class="body">
      <div class="container">
        <i class="el-icon-success"></i>
        <p>注册成功</p>
        <span>即将跳转至企业信息页</span>
      </div>
    </div>
    <customized-footer :showSimple="true" />
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
export default class EnterpriseRegisterResult extends Vue {
  mounted() {
    // redirect to enterprise info page;

  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-register-result-container
    height 100%
    display flex
    flex-direction column
    .nav
      position relative
      flex 0 0 70px
    .body
      display flex
      align-items center
      justify-content center
      flex 1
      position relative
      .container
        padding 40px
        width 370px
        height 160px
        background-color white
        box-shadow 0px 2px 2px rgba(0,0,0,.1)
        border-radius 3px
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        i
          color #7ED321
          font-size 60px
        p
          font-size 20px
        span
          font-size 14px
          color grey
</style>
