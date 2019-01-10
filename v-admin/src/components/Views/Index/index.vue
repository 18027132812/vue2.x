<template>
  <div class="index-wrap">
    <div class="index-list">
      <div class="index-title">供应商信息</div>
      <div class="top-img-wrap">
        <div class="img-wrap">
          <img v-lazy="">
        </div>
        <div class="top-text-wrap">
          <p>互联商家后台管理中心</p>
          <div class="span-wrap">
            <span>用户名：谭卉辅</span>
            <span>店铺名称：中小企业综合服务平台</span>
            <span>管理权限：管理员</span>
            <span>最后登录时间：：2018-12-28 09:59</span>
          </div>
        </div>
      </div>
      <div class="count-number-wrap">
        <div class="number-wrap pink">
          <p>￥836.62</p>
          <span>应结算金额</span>
        </div>
        <div class="number-wrap yellow">
          <p>￥9,372.37</p>
          <span>总销售金额</span>
        </div>
        <div class="number-wrap blue">
          <p>￥521.00</p>
          <span>总订单佣金</span>
        </div>
        <div class="number-wrap green">
          <p>￥136.73</p>
          <span>总退单金额</span>
        </div>
      </div>
    </div>
    <div class="index-list">
      <div class="index-title">概况</div>
      <index-list :data="data1"></index-list>
    </div>
    <div class="index-list">
      <div class="index-title">代理交易订单（最近一个月）</div>
      <index-list :data="data2"></index-list>
    </div>
    <div class="index-list">
      <div class="index-title">代理批发订单（最近一个月）</div>
      <index-list :data="data3"></index-list>
    </div>

    <div class="index-list">
      <div class="tab-nav-wrap">
        <span
          v-for="(item, index) in navTab"
          :key="index"
          :class="{'active': item.active}"
          v-html="item.name"
          @click.stop.prevent="_tabClick(index)"></span>
      </div>
      <div class="goods-list-wrap">
        <div class="goods-title-wrap">
          <div class="item-wrap">
            <div class="list-item big">商品名称</div>
            <div class="list-item">商品排名</div>
            <div class="list-item">商品销量</div>
          </div>
        </div>
        <div class="list-wrap">
          <div class="item-wrap" v-for="(item, index) in 10">
            <div class="list-item big">
              <img v-lazy="">
              <p>超薄创意 吸顶灯客厅灯长方形大气现代简约LED主卧室灯餐厅灯具 特别提醒 三色调 光和高亮款不支持手机控制</p>
            </div>
            <div class="list-item">
              <span>{{index + 1}}</span>
            </div>
            <div class="list-item">
              <span>9372</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import IndexList from "./element/IndexList";
  export default {
    name: "index",
    components: {
      IndexList
    },
    data () {
      return {
        data1: [
          {
            title: '新增留言',
            number: 0
          },
          {
            title: '出售中的商品',
            number: 8374
          },
          {
            title: '仓库中的商品',
            number: 234
          }
        ],
        data2: [
          {
            title: '待付款',
            number: 0
          },
          {
            title: '待发货',
            number: 384
          },
          {
            title: '待收货',
            number: 0
          },
          {
            title: '待评价',
            number: 3
          },
          {
            title: '退款/售后',
            number: 1
          },
          {
            title: '交易完成',
            number: 2032
          },
          {
            title: '关闭订单',
            number: 6
          }
        ],
        data3: [
          {
            title: '待付款',
            number: 3
          },
          {
            title: '待发货',
            number: 13
          },
          {
            title: '待收货',
            number: 6
          },
          {
            title: '待评价',
            number: 28
          },
          {
            title: '退款/售后',
            number: 4
          },
          {
            title: '交易完成',
            number: 73
          },
          {
            title: '关闭订单',
            number: 18
          }
        ],
        navTab: [
          {
            name: '商品销量排行',
            active: true
          },
          {
            name: '商品批发排行',
            active: false
          },
          {
            name: '商品销量',
            active: false
          }
        ],
        canClick: true
      }
    },
    mounted () {

    },
    methods: {
      _tabClick (it) {
        this.navTab.forEach((item, index) => {
          index === it ? item.active = true : item.active = false;
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../common/css/index";
  .index-wrap {
    .index-list {
      padding: 20px 30px;
      background-color: @bg-color;
      border-radius: 5px;
      margin-bottom: 10px;
      font-size: 0;
      .index-title {
        padding-bottom: 8px;
        font-size: @font-l;
        color: @text;
        font-weight: 500;
        padding-left: 5px;
        border-bottom: 1px solid @border-color;
      }
      .top-img-wrap {
        padding: 20px;
        .img-wrap, .top-text-wrap {
          display: inline-block;
          vertical-align: middle;
        }
        .img-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .top-text-wrap {
          width: calc(100% - 80px);
          padding: 0 10px;
          p {
            font-size: @font-x;
            color: @text;
            font-weight: 500;
          }
          .span-wrap {
            padding-top: 10px;
            span {
              display: inline-block;
              width: 25%;
              font-size: @font-m;
              color: @text-ss;
            }
          }
        }
      }
      .count-number-wrap {
        .number-wrap {
          display: inline-block;
          vertical-align: middle;
          padding: 30px;
          width: 24%;
          margin-right: 1.333%;
          border-radius: 10px;
          color: @bg-color;
          text-align: center;
          p {
            font-size: @font-lg;
            font-weight: 500;
            margin-bottom: 5px;
          }
          span {
            font-size: @font-m;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
          }
          &.pink {
            background: linear-gradient(180deg, rgb(255, 141, 198) 0%, rgb(255, 104, 142) 100%);
            box-shadow: 0 0 14px 0 rgba(255, 75, 118, 0.3);
          }
          &.yellow {
            background: linear-gradient(180deg, rgb(255, 209, 119) 0%, rgb(255, 120, 127) 100%);
            box-shadow: 0 0 14px 0 rgba(253, 100, 90, 0.3);
          }
          &.blue {
            background: linear-gradient(180deg, rgb(120, 182, 255) 0%, rgb(156, 115, 235) 100%);
            box-shadow: 0 0 14px 0 rgba(135, 99, 250, 0.3);
          }
          &.green {
            background: linear-gradient(180deg, rgb(90, 231, 205) 0%, rgb(68, 180, 237) 100%);
            box-shadow: 0 0 14px 0 rgba(72, 188, 238, 0.3);
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .tab-nav-wrap {
        border-bottom: 1px solid @border-color;
        span {
          display: inline-block;
          padding: 10px 2px 3px;
          font-size: @font-l;
          border-bottom: 2px solid transparent;
          margin-right: 50px;
          user-select: none;
          cursor: pointer;
          &.active {
            border-color: @color;
          }
        }
      }
      .goods-list-wrap {
        margin-top: 20px;
        border: 1px solid @border-color;
        .item-wrap {
          font-size: 0;
          .list-item {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            width: 20%;
            &.big {
              width: 60%;
              text-align: left;
            }
          }
        }
        .goods-title-wrap {
          .item-wrap {
            .list-item {
              height: 38px;
              line-height: 38px;
              background-color: #f4f4f4;
              font-size: @font-l;
              color: @text-s;
              &.big {
                width: 60%;
                padding-left: 18%;
              }
            }
          }
        }
        .list-wrap {
          .item-wrap {
            .list-item {
              padding: 10px;
              span {
                color: @text-s;
                font-size: @font-l;
              }
              &.big {
                img, p {
                  display: inline-block;
                  vertical-align: middle;
                }
                img {
                  width: 70px;
                  height: 70px;
                }
                p {
                  font-size: @font-l;
                  width: calc(100% - 70px);
                  padding: 0 10px;
                }
              }
            }
            &:nth-child(2n) {
              background-color: #F6F7F9;
            }
          }
        }
      }
    }
  }
</style>
