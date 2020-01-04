<template>
  <div class="future">
    <el-carousel height="570px" class="carousel" :interval="3000" arrow="always">
      <el-carousel-item v-for="item in futures" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';


@Component({
  components: {},
})
export default class Future extends Vue {
  futures: any = [
    require('@/assets/images/future1.png'),
    require('@/assets/images/future2.png'),
    require('@/assets/images/future3.png'),
    require('@/assets/images/future4.png'),
    require('@/assets/images/future5.png'),
    require('@/assets/images/future6.png'),
    require('@/assets/images/future7.png'),
  ]
}
</script>

<style lang="stylus" scoped>
  .future
    flex 1
    display flex
    align-items center
    justify-content center
    .carousel
      flex 1
      img
        width 1280px
  
</style>
