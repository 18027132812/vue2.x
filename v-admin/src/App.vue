<template>
  <div id="app">
    <router-view></router-view>
    <BackTop :height="200" :bottom="10" :right="20">
      <div class="top-top">
        <Icon type="ios-arrow-up"></Icon>
        <p>Top</p>
      </div>
    </BackTop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "./common/css/index";
  #app {
    width: 100%;
    min-width: 1200px;
    height: 100%;
    .ivu-affix {
      z-index: 999;
    }
    .top-top {
      padding: 5px 10px;
      background: @bg-color;
      color: @bg-color;
      text-align: center;
      border-radius: 2px;
      position: relative;
      user-select: none;
      box-shadow: 0 0 10px #dbdbdb;
      i {
        color: @text-s;
        padding: 0;
        width: 24px;
        height: 15px;
        vertical-align: top;
      }
      p {
        color: @text-s;
        font-size: @font-l;
      }
    }
  }
</style>
