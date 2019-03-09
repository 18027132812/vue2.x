<template>
  <div class="index-list-wrap">
    <div class="list-item" v-for="(items, index) in data" :key="index">
      <p>{{items.title}}</p>
      <span :class="{'color-s': items.number === 0}">{{items.number}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../common/css/index";
  .index-list-wrap {
    font-size: 0;
    .list-item {
      display: inline-block;
      vertical-align: middle;
      width: 14.285%;
      text-align: center;
      padding: 30px 0;
      p {
        font-size: @font-x;
        font-weight: 500;
        color: @text-s;
        margin-bottom: 10px;
      }
      span {
        color: @text-error;
        font-weight: 800;
        font-size: @font-s;
        &.color-s {
          color: @text-ss;
        }
      }
    }
  }
</style>
