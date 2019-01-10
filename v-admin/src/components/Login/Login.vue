<template>
  <div class="login-wrap">
    <l-r-header :headerText="headerText" @jump="_jump"></l-r-header>
    <div class="login-content-wrap">
      <div class="login-width">
        <div class="login-info" v-show="pcCode">
          <i class="code-icon" @click="_jumpCode"></i>
          <span class="title">账户登录</span>
          <div class="login-on"  v-show="!jigsawHide">
            <div class="user-info-wrap" >
              <div class="user-info">
                <span>账户：</span>
                <input class="user-name" v-model="userName" placeholder="请输入用户名/邮箱/手机号码"></input>
              </div>
              <div class="user-info">
                <span>密码：</span>
                <input class="user-name" v-model="password" placeholder="请输入密码" type="password"></input>
              </div>
            </div>
            <div class="login-bottom">
              <span class="login-button" @click="_loginBtn">登录</span>
              <div class="button-bottom">
                <Checkbox class="keep" v-model="single">保存登录信息</Checkbox>
                <span class="forget" @click="_jumpForget">忘记密码?</span>
              </div>
            </div>
          </div>

          <div class="container" v-show="jigsawHide">
            <i class="ivu-icon ivu-icon-ios-close" @click="jigsawShow"></i>
            <span class="finish-text">完成拼图验证</span>
            <div id="captcha"></div>
            <div id="msg" v-text="successText"></div>
          </div>
        </div>

        <div class="login-info" v-show="!pcCode">
          <i class="pc-icon" @click="_jumpPC"></i>
          <span class="title">扫码登录</span>
          <div class="code-content">
            <img v-lazy="">
            <div class="text">
              <i class="left-icon"></i>
              <div class="right">
                <span>请使用微信扫描二维码</span>
                <span class="blue">扫一扫登录</span>
              </div>
            </div>
            <span class="pass-button" @click="_jumpPC">密码登录</span>
          </div>
        </div>
      </div>
    </div>
    <l-r-footer></l-r-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import { vJigsaw } from "./jigsaw";
  import LRHeader from "./base/LR-header";
  import LRFooter from "./base/LR-footer";
  export default {
    name: "login",
    components: {
      LRFooter,
      LRHeader
    },
    data () {
      return {
        successText: null,
        headerText: '注册',
        userName:'',
        password:'',
        single: false,
        jigsawHide: false,
        pcCode: true
      }
    },
    mounted () {
      let _self = this;
      vJigsaw({
        el: document.getElementById('captcha'),
        onSuccess: function() {
          _self.successText = '登录成功！';
          setTimeout(() => {
           _self.$router.push('/main')
          }, 1000)
        },
        onFail: function () {
          _self.successText = '验证失败！';
          console.log('onFail');
          setTimeout(() => {
            _self.successText = null;
          }, 1050)
        },
        onRefresh: function () {
          _self.successText = null;
          console.log('onRefresh')
        }
      })
    },
    methods: {
      _jump () {
        this.$router.push({path:'register'})
      },
      _loginBtn () {
        let _self = this
        if(_self.userName === ''){
          _self.$Message.error('请输入用户名');
        }else if(_self.password === ''){
          _self.$Message.error('请输入密码');
        }else{
          if(!!window.ActiveXObject || "ActiveXObject" in window){
            _self.$router.push({path:'main'})
          }else{
            _self.jigsawHide = true
          }
        }
      },
      jigsawShow () {
        this.jigsawHide = false
      },
      _jumpCode () {
        this.pcCode = false
      },
      _jumpPC () {
        this.pcCode = true
      },
      _jumpForget(){
        this.$router.push({path:'forget'})
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .login-wrap {
    .login-content-wrap{
      width: 100%;
      height: 600px;
      background: url("icon/bg@2x.png") center no-repeat;
      background-size: 1920px 600px;
      .login-width{
        width: 1200px;
        height: 600px;
        margin: 0 auto;
        position: relative;
        .login-info{
          width: 400px;
          height: 426px;
          background: @bg-color;
          border-radius: 20px;
          position: absolute;
          right: 0;
          top: 87px;
          .code-icon{
            display: block;
            width: 50px;
            height: 52px;
            background: url("icon/Group@2x.png") center no-repeat;
            background-size: 50px 52px;
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
          }
          .title{
            display: block;
            padding: 35px 0 40px;
            font-size: @font-xx;
            color: @text;
            line-height: @font-xx;
            text-align: center;
          }
          .login-on{
            .user-info-wrap{
              padding: 0 30px;
              .user-info{
                padding-bottom: 10px;
                span{
                  display: block;
                  font-size: @font-m;
                  line-height: 34px;
                  padding-left: 24px;
                }
                .user-name{
                  width: 100%;
                  height: 44px;
                  padding: 0 24px;
                  border-radius: 22px;
                  border: none;
                  background: #EFF0F4;
                  font-size: @font-s;
                  color: @text;
                  &:focus{
                    outline: none;
                    background: @bg-color;
                    box-shadow: 0 7px 16px 0 rgba(3,9,44,0.18);
                  }
                }
              }
            }
            .login-bottom{
              padding: 0 25px;
              .login-button{
                display: block;
                width: 100%;
                height: 48px;
                background: @color;
                border-radius: 24px;
                font-size: @font-x;
                color: @bg-color;
                line-height: 48px;
                text-align: center;
                cursor: pointer;
                margin-top: 30px;
              }
              .button-bottom{
                padding: 15px 20px 0;
                .keep{
                  font-size: @font-m;
                  color: @text-ss;
                }
                .forget{
                  float: right;
                  font-size: @font-m;
                  color: @text-ss;
                  cursor: pointer;
                }
              }
            }
          }

          .pc-icon{
            display: block;
            width: 50px;
            height: 52px;
            background: url("icon/Grouppc@2x.png") center no-repeat;
            background-size: 50px 52px;
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
          }
          .code-content{
            width: 200px;
            margin: 0 auto;
            img{
              display: block;
              width: 200px;
              height: 200px;
            }
            .text{
              margin-top: 20px;
              .left-icon{
                display: inline-block;
                width: 33px;
                height: 31px;
                background: url("icon/Shape@2x.png") center no-repeat;
                background-size: 76px 72px;
                margin-left: 12px;
              }
              .right{
                display: inline-block;
                margin-left: 10px;
                span{
                  display: block;
                  font-size: @font-m;
                  color: @text;
                  line-height: 18px;
                  &.blue{
                    color: @color;
                  }
                }
              }
            }
            .pass-button{
              display: block;
              font-size: @font-m;
              color: @text-s;
              text-align: center;
              padding-top: 30px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .container {
      width: 340px;
      padding: 20px 15px 0;
      background: @bg-color;
      box-shadow:0 0 6px 0 rgba(0,0,0,0.18);
      border-radius: 10px;
      position: absolute;
      left: 50%;
      margin-left: -170px;
      top: 100px;
      .ivu-icon{
        font-size: 28px;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }
      .finish-text{
        display: block;
        font-size: @font-l;
        color: @text-s;
        line-height: @font-l;
        margin-bottom: 15px;
      }
      #msg {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
</style>
<style>
  @import "./jigsaw.less";
</style>
