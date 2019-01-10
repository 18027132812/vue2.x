<template>
  <div class="enter-four-wrap">
    入驻第四步4
    <Button @click="_toPage('/main/merchant/merchant-enter/five')">下一步</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "enter-four",
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
  .enter-four-wrap {

  }
</style>
