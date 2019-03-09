<template>
  <div class="v-wrap">
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
    <div class="v-content-wrap">
      <div class="left v-content-nav-wrap" v-if="leftData.length">
        <Col span="24">
          <Menu
            style="width: 100%;"
            accordion
            :active-name="activeName"
            :open-names="openName"
            ref="vmenu"
            @on-select="_itemClick">
            <Submenu
              v-for="(items, index) in leftData"
              :key="index"
              :name="items.id">
              <template slot="title">
                <Icon :type="items.icon" />{{items.title}}
              </template>
              <MenuItem
                v-for="(item, it) in items.child"
                :key="it"
                :name="item.id">
                <span style="display: block;">{{item.title}}</span>
              </MenuItem>
            </Submenu>
          </Menu>
        </Col>
      </div>
      <div class="right v-content-text-wrap" :class="_changeNav">
        <slot></slot>
      </div>
    </div>
    <div class="v-footer-wrap">这是页脚</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import navData from './nav';
  export default {
    name: "v-wrap",
    data () {
      return {
        logoUrl: '/static/img/logo.png',
        navData: navData,
        leftData: [],
        showMoreNav: false,
        moreDisabledBol: false,
        openName: ['1'],
        activeName: '1-1'
      }
    },
    computed: {
      _changeNav () {
        let str = '';
        if (this.leftData.length) {
          str = '';
        } else {
          str = 'other';
        }
        return str;
      }
    },
    mounted () {
      this._textRouter()
    },
    methods: {
      _textRouter () {
        let _self = this;
        let _router = this.$route.path;
        _self.navData.forEach((items, index) => {
          if (_router !== '/main') {
            items.active = false;
            items.child.forEach((item) => {
              item.child.forEach((it) => {
                if (it.haveChildPage) {
                  if (_router.indexOf(it.url) !== -1) {
                    _self.openName[0] = item.id;
                    _self.activeName = it.id;
                    _self._topNavClick(index, true);
                    items.active = true;
                  }
                } else {
                  if (it.url === _router) {
                    _self.openName[0] = item.id;
                    _self.activeName = it.id;
                    _self._topNavClick(index, true);
                    items.active = true;
                  }
                }
              })
            })
          } else {
            !index ? items.active = true : items.active = false;
          }
        });
      },
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
      },
      _itemClick(obj) {
        let _self = this;
        _self.activeName = obj;
        _self.leftData.forEach((items) => {
          items.child.forEach((item) => {
            if (item.id === obj) {
              _self._toPage(item.url);
            }
          });
        });
      },
      _toPage (str) {
        this.$router.push(str);
      },
      _doLoginOut () {
        this._toPage('/login');
      }
    },
    watch: {
      '$route' (to, from) {
        this._textRouter();
        // this.navData.forEach((items) => {
        //   if (items.child.length) {
        //
        //   } else {
        //     if (to.path === items.link) {
        //       items.active = true;
        //     } else {
        //       items.active = false;
        //     }
        //   }
        // })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .v-wrap {
    width: 100%;
    height: 100%;
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
    .v-content-wrap {
      min-height: calc(100% - 150px);
      background-color: @bg-color-s;
      font-size: 0;
      display: -moz-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      .left, .right {
        display: inline-block;
        vertical-align: top;
      }
      .left {
        -webkit-flex: 0 0 200px;
        -ms-flex: 0 0 200px;
        flex: 0 0 200px;
        width: 200px;
        background-color: @bg-color;
        cursor: pointer;
        user-select: none;
      }
      .right {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 10px 20px;
        font-size: @font;
        &.other {
          width: 100%;
        }
      }
    }
    .v-footer-wrap {
      background-color: #000;
      color: @bg-color;
      text-align: center;
      line-height: 100px;
    }
  }
</style>

<style lang="less">
  .v-wrap {
    .ivu-poptip-body {
      padding: 0;
      text-align: center;
    }
    .ivu-poptip-popper {
      min-width: 0;
    }
    .ivu-menu-vertical {
      .ivu-menu-item {
        padding: 14px 8px 14px 20px;
      }
    }
    .ivu-menu-vertical {
      .ivu-menu-submenu-title {
        padding: 14px 8px 14px 20px;
      }
    }
  }
</style>
