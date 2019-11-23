<template>
  <div class="container">
    <img :src="require('@/assets/images/on-review.png')" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import CustomizedFooter from 'components/customized-footer.vue';
import CustomizedNav from 'components/customized-nav.vue';
import PasswordInput from 'components/password-input.vue';
import { signin, getAccountInfo } from '@/apis/account';
import { getCompanyInfo, getCompanyBriefInfo } from '@/apis/company';
import { SYNC_USER_INFO, UPDATE_LOGIN_STATUS } from '@/store/mutation-types';
import { nonEmptyValidator } from '@/utils/validators';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
  .container
    flex 1
    display flex
    align-items center
    justify-content center
    img
      width 700px
</style>
