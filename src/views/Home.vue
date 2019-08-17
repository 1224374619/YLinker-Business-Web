<template>
  <div class="home">
    <div @click="redirectToResume">简历管理</div>
    <div @click="redirectToOccupation">职位管理</div>
    <div @click="redirectToEnterprise">企业中心</div>
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
export default class Home extends Vue {
  redirectToResume() {
    this.$router.push({ path: '/resume' });
  }

  redirectToOccupation() {
    this.$router.push({ path: '/occupation' });
  }

  redirectToEnterprise() {
    this.$router.push({ path: '/enterprise' });
  }
}
</script>

<style lang="stylus" scoped>
  .home
    display flex
    justify-content left 
    padding 0 200px
    div
      width 200px
      height 200px
      background-color rgba(0, 0, 0, .6)
      display flex
      justify-content center
      align-items center
      font-size 25px
      cursor pointer
      margin 35px
      transition all 0.5s
      box-shadow 0px 1px 6px 0px rgba(22,28,39,0.50)
      color white
      &:hover
        opacity 0.8
</style>
