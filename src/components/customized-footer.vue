<template>
  <div class="footer">
    <template v-if="!showSimple">
      <div class="appendix">
        <div>
          <span class="title">银领人才网</span>
          <div class="content">
            <p>静安区江静安区江静安区江静安区江静安区江静安区江静安区江静安区江静安区江</p>
          </div>
        </div>
        <div>
          <span class="title">联系方式</span>
          <div class="content">
            <ul>
              <li>邮编：200436</li>
              <li>联系电话：021-56057115</li>
              <li>邮箱：Nicole.yin@aliyun.com</li>
              <li>地址：上海市静安区江场西路299弄15号1428室</li>
            </ul>
          </div>
        </div>
        <div>
          <span class="title">使用与帮助</span>
          <div class="content">
            <ul>
              <li>企业介绍</li>
              <li>投诉建议</li>
              <li>用户协议</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright full">
        <p>Copyright © 2019 (银领人才网) All Right Reserved | 沪ICP备xxxxxxx号-1</p>
      </div>
    </template>
    <div class="copyright" v-else>
      <p>Copyright © 2019 (银领人才网) All Right Reserved | 沪ICP备xxxxxxx号-1</p>
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
    width 100%
    background-color #16376e
    .appendix
      display flex
      width 1280px
      margin auto
      color white
      padding 40px 0
      flex-direction row
      justify-content space-around
      div
        text-align left
        span.title
          font-size 16px
          font-weight 500
        .content
          opacity .5
          font-size 14px
          p
            max-width 350px
          ul
            list-style-type none
            padding 0
            text-align left
            li
              margin 10px 0
    .copyright
      font-size 14px
      color #999
      padding 10px 0
      margin auto
      background-color #f0f0f0
      &.full
        background-color #16376e
        color white
        opacity .5
</style>
