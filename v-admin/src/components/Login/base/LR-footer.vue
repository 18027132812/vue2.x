<template>
  <div class="lr-footer-wrap">
    <div class="footer-content">
      <span>关于我们</span>|
      <span>联系我们</span>|
      <span>人才招聘</span>|
      <span>商家入驻</span>|
      <span>广告服务</span>|
      <span>友情链接</span>|
      <span>销售联盟</span>
    </div>
    <p class="foot-text"> Copyright © 2004-2018 Oskyseed.icould 版权所有</p>
  </div>
</template>

<script>
  export default {
    name: "LR-footer"
  }
</script>

<style scoped lang="less">
  @import "../../../../src/common/css/index";
  .lr-footer-wrap{
    width: 100%;
    padding: 50px 0;
    .footer-content{
      text-align: center;
      font-size: @font-m;
      color: @text;
      line-height: 26px;
      span{
        padding: 0 15px;
      }
    }
    .foot-text{
      display: block;
      font-size: @font-m;
      color: @text;
      line-height: 26px;
      text-align: center;
    }
  }
</style>
