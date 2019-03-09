<template>
  <div class="release-main-wrap">
    商品发布
    <Button @click="_toPage('/main/goods/release/send')">下一步</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "release-main",
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
        });
      }
    }
  }
</script>

<style scoped lang="less">

</style>
