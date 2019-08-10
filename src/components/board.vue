<template>
  <div class="board">
    <div class="header">
      {{ title }}
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  props: {
    title: {
      type: String,
      default: '看板',
    },
  },
})
export default class Board extends Vue {
}
</script>

<style lang="stylus" scoped>
.board
  display flex
  border-radius 4px
  flex-direction column
  box-shadow 0px 1px 6px 0px rgba(22,28,39,0.20)
  margin 20px 0
  .header
    height 50px
    background-color #f1f7ff
    display flex
    justify-content flex-start
    align-items center
    padding 0 20px
    color #1f368d
    font-size 16px
  .body
    padding 10px
</style>
