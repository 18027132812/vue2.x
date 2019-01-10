<template>
  <div class="v-top-wrap">
    <Affix>
      <div class="top-wrap">
        <div class="logo-wrap" @click.stop.prevent="_toPage('/main')">
          <img v-lazy="logoUrl">
        </div>
        <div class="nav-wrap" ref="vNav">
          <div class="nav-list-wrap">
            <span
              v-for="(item, index) in navData"
              :key="index"
              :class="{'active': item.active}"
              v-text="item.navName"
              v-if="index <= 9"
              @click="_topNavClick(index)">
            </span>
          </div>
          <Poptip trigger="hover" width="80">
            <div class="more-icon-wrap">
              <Icon class="nav-more" type="ios-keypad" v-if="navData.length > 9"/>
            </div>
            <div class="more-nav-wrap" slot="content">
              <ul>
                <li
                  v-for="(item, index) in navData"
                  :class="{'active': item.active}"
                  v-text="item.navName"
                  v-if="index > 9"
                  @click="_topNavClick(index)">
                </li>
              </ul>
            </div>
          </Poptip>
        </div>
        <div class="user-wrap">
          <img v-lazy="">
          <div class="user-text-wrap">
            <p>商家后台管理中心</p>
            <span @click="_doLoginOut">退出</span>
          </div>
        </div>
      </div>
    </Affix>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "v-top",
    props: {
      navData: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      _topNavClick (it, bol) {
        let _self = this;
        _self.navData.forEach((item, index) => {
          if (it === index) {
            item.active = true;
            _self.leftData = item.child;
            if (item.child.length) {
              if (!bol) {
                _self.openName = ['1'];
                _self.activeName = '1-1';
                _self._toPage(item.child[0].child[0].url);
              }
              _self.$nextTick(()=> {
                _self.$refs.vmenu.updateOpened();
                _self.$refs.vmenu.updateActiveName();
              });
            }
          } else {
            item.active = false;
          }
        });
        if (!it) {
          _self._toPage('/main');
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .v-top-wrap {
    .top-wrap {
      background-color: @color;
      font-size: 0;
      cursor: pointer;
      user-select: none;
      .logo-wrap, .nav-wrap, .user-wrap {
        display: inline-block;
        vertical-align: middle;
        padding: 0 10px;
        height: 50px;
        overflow: hidden;
      }
      .logo-wrap {
        img {
          width: auto;
          height: 35px;
          margin-top: 8px;
        }
      }
      .nav-wrap {
        width: calc(100% - 360px);
        height: 50px;
        padding: 0 20px;
        text-align: right;
        .nav-list-wrap {
          display: inline-block;
          vertical-align: middle;
          height: 50px;
          font-size: 0;
          overflow: hidden;
          span {
            display: inline-block;
            width: 90px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: @bg-color;
            font-size: @font-l;
            &.active {
              background-color: #0c6ddc;
            }
            &:hover {
              background-color: #87aeda;
            }
          }
        }
        .more-icon-wrap {
          display: inline-block;
          padding-left: 20px;
          vertical-align: middle;
          .nav-more {
            font-size: @font-big;
            color: @bg-color;
            transition: all 0.2s;
            &:hover {
              color: @text-error;
            }
          }
        }
        .more-nav-wrap {
          ul {
            li {
              line-height: 35px;
              cursor: pointer;
              border-bottom: 1px solid @border-color;
              &.active {
                background-color: #0c6ddc;
                color: @bg-color;
              }
              &:hover {
                background-color: #87aeda;
              }
              &:last-child {
                border-bottom-width: 0;
              }
            }
          }
        }
      }
      .user-wrap {
        width: 200px;
        font-size: 0;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          overflow: hidden;
          cursor: auto;
          vertical-align: middle;
          margin-top: 8px;
        }
        .user-text-wrap {
          display: inline-block;
          vertical-align: middle;
          margin-top: 8px;
          width: calc(100% - 35px);
          padding-left: 10px;
          color: @bg-color;
          p {
            font-size: @font-m;
            cursor: auto;
          }
          span {
            font-size: @font;
            &:hover {
              color: @text-error;
            }
          }
        }
      }
    }
  }
</style>
