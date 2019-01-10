<template>
  <div class="enter-three-wrap">
    入驻第三步3
    <Button @click="_toPage('/main/merchant/merchant-enter/four')">下一步</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "enter-three",
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
  .enter-three-wrap {

  }
</style>
