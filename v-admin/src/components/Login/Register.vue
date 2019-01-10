<template>
  <div class="register-wrap">
    <l-r-header :headerText="headerText" @jump="_jumpLogin"></l-r-header>
    <div class="register-content">
      <div class="register-width">
        <div class="register-info">
          <span class="title">账户注册</span>
          <div class="register-vessel">
            <div class="user-register">
              <span>手机号码：</span>
              <input class="user-input" v-model="userName" placeholder="请输入手机号码"></input>
              <span class="gain-code" :class="{activeCode: gainInCode}" @click="_gainInCode">{{gainInText}}</span>
            </div>
            <div class="user-register">
              <span>验证码：</span>
              <input class="user-input" v-model="idCode" placeholder="请输入验证码"></input>
            </div>
            <div class="user-register">
              <span>密码：</span>
              <input class="user-input" v-model="password" placeholder="请输入密码"></input>
            </div>
          </div>
          <div class="register-bottom">
            <span class="register-button" @click="_registerBtn">注册</span>
            <Checkbox class="protect" v-model="single">我已阅读并接受版权说明和隐私保护条款</Checkbox>
          </div>
        </div>
      </div>
    </div>
    <l-r-footer></l-r-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import LRHeader from "./base/LR-header";
  import LRFooter from "./base/LR-footer";
  import { tick } from "../../common/js/v";
  export default {
    name: "register",
    components: {
      LRFooter,
      LRHeader
    },
    data () {
      return {
        headerText:'登录',
        gainInText:'获取验证码',
        userName:'',
        idCode: '',
        password:'',
        single: true,
        gainInCode: false,
        gainActive: true
      }
    },
    mounted () {

    },
    methods: {
      _gainInCode () {
        let _self = this
        if(_self.gainActive){
          _self.gainInCode = true;
          _self.gainInText = '60S后重新获取';
          tick(60, (i) => {
            _self.gainActive = false;
            if(i){
              _self.gainInText = i + 'S后重新获取';
            }else{
              _self.gainInCode = false;
              _self.gainActive = true;
              _self.gainInText = '获取验证码';
            }
          })
        }
      },
      _jumpLogin () {
        this.$router.push({path:'login'})
      },
      _registerBtn () {
        let _self = this
        if(_self.userName === ''){
          _self.$Message.error('请输入用户名');
        }else if(_self.idCode === ''){
          _self.$Message.error('请输入验证码');
        }else if(_self.password === ''){
          _self.$Message.error('请输入密码');
        }else {
          _self.$router.push({path:'login'})
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .register-wrap {
    width: 100%;
    .register-content{
      width: 100%;
      height: 600px;
      background: url("icon/bg@2x.png") center no-repeat;
      background-size: 1920px 600px ;
      .register-width{
        width: 1200px;
        height: 600px;
        margin: 0 auto;
        position: relative;
        .register-info{
          width: 400px;
          height: 476px;
          background: @bg-color;
          border-radius: 20px;
          position: absolute;
          right:0;
          top: 50%;
          margin-top: -228px;
          .title{
            display: block;
            padding: 35px 0 30px;
            font-size: @font-xx;
            color: @text;
            line-height: @font-xx;
            text-align: center;
          }
          .register-vessel{
            padding: 0 30px;
            .user-register{
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
                &.activeCode{
                  color: @text-ss;
                }
              }
            }
          }
          .register-bottom{
            padding: 25px 25px 0;
            .register-button{
              display: block;
              width: 100%;
              height: 48px;
              background: @color;
              font-size: @font-x;
              line-height: 48px;
              text-align: center;
              color: @bg-color;
              border-radius: 24px;
              cursor: pointer;
            }
            .protect{
              font-size: @font-m;
              color: @text-ss;
              line-height: @font-m;
              padding-top: 15px;
              padding-left: 20px;
            }
          }
        }
      }
    }
  }
</style>
