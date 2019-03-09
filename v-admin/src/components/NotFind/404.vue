<template>
  <div class="not-find-wrap">
    <section class="error-container">
      <span>4</span>
      <span><span class="screen-reader-text">0</span></span>
      <span>4</span>
    </section>
    <div class="go-back-wrap">
      <Button type="info" @click.stop.prevent="_toIndex">返回首页</Button>
      <Button type="warning" @click.stop.prevent="_goBack">返回上一页</Button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      _toIndex () {
        this.$router.push('/');
      },
      _goBack () {
        this.$router.back();
      }
    }
  }
</script>

<style scoped lang="less">
  .not-find-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #416475;
    user-select: none;
    .error-container {
      text-align: center;
      font-size: 180px;
      font-family: 'Catamaran', sans-serif;
      font-weight: 800;
      margin: 20px 15px;
      >span {
        display: inline-block;
        line-height: 0.7;
        position: relative;
        color: #FFB485;
        vertical-align: middle;
        &:nth-of-type(1) {
          color: #D1F2A5;
          animation: colordancing 4s infinite;
        }
        &:nth-of-type(3) {
          color: #F56991;
          animation: colordancing2 4s infinite;
        }
        &:nth-of-type(2) {
          width: 120px;
          height: 120px;
          border-radius: 999px;
        }
        &:nth-of-type(2):before, &:nth-of-type(2):after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 999px;
          box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
          inset 0 30px 0 rgba(239, 250, 180, 0.4),
            inset -30px 0 0 rgba(255, 196, 140, 0.4),
          inset 0 -30px 0 rgba(245, 105, 145, 0.4);
          animation: shadowsdancing 4s infinite;
        }
        &:nth-of-type(2):before {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
      .screen-reader-text {
        position: absolute;
        top: -9999em;
        left: -9999em;
      }
    }
    .go-back-wrap {
      padding: 20px;
      text-align: center;
    }

    @keyframes shadowsdancing {
      0% {
        box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
        inset 0 30px 0 rgba(239, 250, 180, 0.4),
          inset -30px 0 0 rgba(255, 196, 140, 0.4),
        inset 0 -30px 0 rgba(245, 105, 145, 0.4);
      }

      25% {
        box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
        inset 0 30px 0 rgba(209, 242, 165, 0.4),
          inset -30px 0 0 rgba(239, 250, 180, 0.4),
        inset 0 -30px 0 rgba(255, 196, 140, 0.4);
      }

      50% {
        box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
        inset 0 30px 0 rgba(245, 105, 145, 0.4),
          inset -30px 0 0 rgba(209, 242, 165, 0.4),
        inset 0 -30px 0 rgba(239, 250, 180, 0.4);
      }

      75% {
        box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
        inset 0 30px 0 rgba(255, 196, 140, 0.4),
          inset -30px 0 0 rgba(245, 105, 145, 0.4),
        inset 0 -30px 0 rgba(209, 242, 165, 0.4);
      }

      100% {
        box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
        inset 0 30px 0 rgba(239, 250, 180, 0.4),
          inset -30px 0 0 rgba(255, 196, 140, 0.4),
        inset 0 -30px 0 rgba(245, 105, 145, 0.4);
      }
    }

    @keyframes colordancing {
      0% {
        color: #D1F2A5;
      }

      25% {
        color: #F56991;
      }

      50% {
        color: #FFC48C;
      }

      75% {
        color: #EFFAB4;
      }

      100% {
        color: #D1F2A5;
      }
    }

    @keyframes colordancing2 {
      0% {
        color: #FFC48C;
      }

      25% {
        color: #EFFAB4;
      }

      50% {
        color: #D1F2A5;
      }

      75% {
        color: #F56991;
      }

      100% {
        color: #FFC48C;
      }
    }
  }
</style>
