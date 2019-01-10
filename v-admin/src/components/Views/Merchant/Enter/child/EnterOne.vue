<template>
  <div class="enter-one-wrap">
    入驻第一步123
    <Button @click="_toPage('/main/merchant/merchant-enter/two')">下一步</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "enter-one",
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
  .enter-one-wrap {

  }
</style>
