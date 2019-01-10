<template>
  <div class="lr-header-wrap">
    <div class="conent-wrap">
      <div class="Logo-icon">
        <img src="../../../../src/components/Login/icon/logo@2x.png">
      </div>
      <div class="right-text">还没有账号，<span @click="_jumpLink">马上{{headerText}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LR-header",
    props:{
      headerText: {
        type: String,
        default: ''
      }
    },
    methods: {
      _jumpLink(){
        this.$emit('jump')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../src/common/css/index";
  .lr-header-wrap{
    width: 100%;
    .conent-wrap{
      width: 1200px;
      height: 80px;
      margin: 0 auto;
      .Logo-icon{
        float: left;
        width:240px;
        height: 64px;
        img{
          width: 100%;
        }
      }
      .right-text{
        float: right;
        font-size: @font-s;
        color: @text;
        line-height: 80px;
        span{
          color: @color;
          cursor: pointer;
        }
      }
    }
  }
</style>
