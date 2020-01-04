<template>
  <div class="contact-us-container">
    <div class="body">
      <h1>公司介绍</h1>
      <div class="content">
        <div class="block">
          <h4>公司简介</h4>
          <p>上海银领网络科技有限公司致力于开发“银领人才”（现代高技能人才）招聘的专业网站。在5G时代到来之际，银领人才网依托互联网PC+移动端以及AI人工智能和大数据打造全新的，属于5G时代的专业招聘网站，为“既动手又动脑”的银领人才求职提供多维度、精准化的招聘服务，为中国智能制造、制造业强国提供高技能人才的支撑。</p>
          <p>我们坚持以技术为先导、以人力资源服务为载体、以三方共赢为目的的指导方针，为企业引进专业技术人才，力争在招聘服务行业开创全方位技术人才培养、招聘服务的新篇章、为国家技术工匠的招聘与储备提供便利条件。强化服务意识，提供一流的、最完善的服务。</p>
          <p>我们拥有人性化、制度化、规范化、流程化、标准化的先进管理。</p>
          <p>我们拥有众多素质高、技术好、业务强的人才和员工队伍。</p>
          <p>我们拥有自主品牌的产品和自主产品的研发队伍。</p>
          <p>我们有让银领人才真正实现“一技在手、工作我有。”的坚定目标！</p>
        </div>
        <div class="block">
          <h4>网站简介</h4>
          <p>银领人才网是上海银领网络科技有限公司旗下的致力于“银领人才”（现代高技能人才）招聘的专业网站。在5G时代到来之际，银领人才网依托互联网PC+移动端以及AI人工智能和大数据打造全新的、属于5G时代的专业招聘网站，为“既动手又动脑”的银领人才的求职提供多维度、精准化的招聘服务，为中国智能制造，制造业强国提供高技能人才的支撑！让银领人才真正实现“一技在手、工作我有！”。</p>
        </div>
        <!--
        <div class="block">
          <h4>公司风采</h4>
          <p class="album">
          </p>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ContactUs extends Vue {
  mounted() {
    // loading init info;
  }
}
</script>

<style lang="stylus" scoped>
  .contact-us-container
    display flex
    flex-direction column
    .nav
      position relative
      flex 0 0 70px
    .body
      flex 1
      text-align left
      position relative
      background-color white
      h1
        font-size 20px
        text-align left
        margin 30px 0px 10px
      .content
        padding 0 30px
        .block
          margin 20px 0
          text-indent 2em
          .album
            display flex
            justify-content space-around
            align-items center
            img
              width 200px
</style>
