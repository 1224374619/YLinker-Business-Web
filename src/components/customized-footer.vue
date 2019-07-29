<template>
  <div class="footer">
    <div class="appendix" v-if="!showSimple">
      <div>
        <span>友情链接</span>
        <ul>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
        </ul>
      </div>
      <div>
        <span>企业服务</span>
        <ul>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
        </ul>
      </div>
      <div>
        <span>关于我们</span>
        <ul>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
        </ul>
      </div>
      <div>
        <span>联系我们</span>
        <ul>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
          <li>占位字符</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>©2019 银领人才网 | 沪ICP备xxxxxxx号-1</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    showSimple: {
      type: Boolean,
      default: false,
    },
  },
})
export default class CustomizedFooter extends Vue {}
</script>

<style lang="stylus" scoped>
  .footer
    background-color #f0f0f0
    .appendix
      display flex
      width 1280px
      margin auto
      padding 70px 150px 20px
      flex-direction row
      align-items center
      justify-content space-between
      div
        span
          font-size 20px
          font-weight 500
        ul
          list-style-type none
          padding 0
          text-align left
          li
            margin 10px 0
            font-size 16px
            color #666
    .copyright
      font-size 12px
      color #999
      padding 10px 0
</style>
