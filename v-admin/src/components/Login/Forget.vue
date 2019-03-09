<template>
  <div class="forget-wrap">
    <l-r-header :headerText="headerText" @jump="_jumpLogin"></l-r-header>
    <div class="forget-content">
      <div class="forget-width">
        <div class="forget-info" v-if="nextHide">
          <span class="title">密码找回—验证身份</span>

          <div class="forget-vessel">
            <div class="user-forget">
              <span>手机号码：</span>
              <input class="user-input" v-model="userName" placeholder="请输入手机号码"></input>
              <span class="gain-code" :class="{gray: activeCode}" @click.stop="_gainInCode">{{gainInText}}</span>
            </div>
            <div class="user-forget">
              <span>验证码：</span>
              <input class="user-input" v-model="idCode" placeholder="请输入验证码"></input>
              <p class="text"></p>
            </div>
          </div>
          <div class="forget-bottom">
            <span class="next-button" @click="_nextBtn">下一步</span>
          </div>
        </div>

        <div class="forget-info" v-else>
          <span class="title">密码找回—验证身份</span>
          <div class="forget-vessel">
            <div class="user-forget">
              <span>密码：</span>
              <input class="user-input" v-model="password" placeholder="请输入新的登录密码"></input>
            </div>
            <div class="user-forget">
              <span>重复密码：</span>
              <input class="user-input" v-model="againPassword" placeholder="请两次输入新的登录密码"></input>
              <p class="text">6-18个字符，请以字母开头加数字或下划线的组合，不能单独使用数字、字母或下划线</p>
            </div>
          </div>
          <div class="forget-bottom">
            <span class="next-button" @click="_sureBtn">确定</span>
          </div>
        </div>
      </div>
    </div>
    <l-r-footer></l-r-footer>
  </div>
</template>

<script>
  import LRHeader from "./base/LR-header";
  import LRFooter from "./base/LR-footer";
  import { tick } from "../../common/js/v";
  export default {
    name: "forget",
    components: {LRFooter, LRHeader},
    data () {
      return {
        headerText: '登录',
        gainInText: '获取验证码',
        userName:'',
        idCode:'',
        password:'',
        againPassword:'',
        nextHide: true,
        activeCode: false,
        activeSure: true
      }
    },
    mounted () {

    },
    methods:{
      _jumpLogin () {
        let _self = this
        _self.$router.push({path:'login'})
      },
      _gainInCode () {
        let _self = this;
        if(_self.activeSure){
          _self.activeCode = true;
          _self.gainInText = '60S后重新获取';
          tick(60, (i) => {
            _self.activeSure = false;
            _self.gainInText = i + 'S后重新获取';
            if (i) {
              _self.gainInText = i + 'S后重新获取';
            } else {
              _self.gainInText = '获取验证码';
              _self.activeSure = true;
              _self.activeCode = false;
            }
          });
        }
      },
      _nextBtn () {
        let _self = this
        if(_self.userName === ''){
          _self.$Message.error('请输入用户名');
        }else if(_self.idCode === ''){
          _self.$Message.error('请输入验证码');
        }else{
          _self.nextHide = false
        }
      },
      _sureBtn () {
        let _self = this
        if(_self.password === ''){
          _self.$Message.error('请输入密码');
        }else if(_self.againPassword !== _self.password){
          _self.$Message.error('两次输入的密码不一致');
        }else{
          _self.$router.push({path:'login'})
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .forget-wrap{
    .forget-content{
      width: 100%;
      height: 600px;
      background: url("icon/bg@2x.png") center no-repeat;
      background-size: 1920px 600px ;
      .forget-width{
        width: 1200px;
        height: 600px;
        margin: 0 auto;
        position: relative;
        .forget-info{
          width: 400px;
          height: 426px;
          background: @bg-color;
          border-radius: 20px;
          position: absolute;
          right:0;
          top: 50%;
          margin-top: -213px;
          .title{
            display: block;
            padding: 35px 0 30px;
            font-size: @font-xx;
            color: @text;
            line-height: @font-xx;
            text-align: center;
          }
          .forget-vessel{
            padding: 0 30px;
            .user-forget{
              position: relative;
              padding-bottom: 10px;
              span{
                display: block;
                padding-left: 24px;
                font-size: @font-m;
                color: @text-s;
                line-height: 34px;
              }
              .user-input{
                width: 100%;
                height: 44px;
                padding: 0 24px;
                background: #EFF0F4;
                border-radius: 25px;
                border: none;
                font-size: @font-s;
                color: @text;
                &:focus{
                  outline: none;
                  background: @bg-color;
                  box-shadow: 0 7px 16px 0 rgba(3,9,44,0.18);
                }
              }
              .gain-code{
                font-size: @font-s;
                color: @color;
                line-height: 44px;
                position: absolute;
                right: 24px;
                top: 34px;
                cursor: pointer;
                &.gray{
                  color: @text-ss;
                }
              }
              .text{
                display: block;
                height: 38px;
                margin-top: 15px;
                padding: 0 24px;
                font-size: @font-m;
                line-height: 19px;
              }
            }
          }
          .forget-bottom{
            padding: 10px 25px 0;
            .next-button{
              display: block;
              width: 100%;
              height: 48px;
              background: @color;
              font-size: @font-x;
              color: @bg-color;
              border-radius: 24px;
              text-align: center;
              line-height: 48px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
