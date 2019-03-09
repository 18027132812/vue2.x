<template>
  <div class="enter-two-wrap">
    入驻第二步2
    <Button @click="_toPage('/main/merchant/merchant-enter/three')">下一步</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "enter-two",
    components: {

    },
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {
      _toPage (str) {
        this.$router.push({
          path: `${str}`
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .enter-two-wrap {

  }
</style>
