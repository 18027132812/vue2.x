<template>
  <div class="index">
    <v-wrap>
      <router-view></router-view>
    </v-wrap>
  </div>
</template>

<script type="text/ecmascript-6">
  import VWrap from "../../element/VWrap/VWrap";
  export default {
    components: {
      VWrap
    }
  }
</script>

<style scoped lang="less">
  .index {
    width: 100%;
    height: 100%;
  }
</style>
