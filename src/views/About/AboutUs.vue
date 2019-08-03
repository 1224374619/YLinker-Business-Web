<template>
  <div class="contact-us-container">
    <div class="body">
      <h1>公司介绍</h1>
      <div class="block">
        <h4>公司简介</h4>
        <p>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</p>
      </div>
      <div class="block">
        <h4>发展现状</h4>
        <p>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</p>
      </div>
      <div class="block">
        <h4>公司风采</h4>
        <p class="album">
          <img :src="require('../../assets/images/company1.jpg')" />
          <img :src="require('../../assets/images/company1.jpg')" />
          <img :src="require('../../assets/images/company1.jpg')" />
        </p>
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
      .block
        margin 50px 0
        .album
          display flex
          justify-content space-around
          align-items center
</style>
