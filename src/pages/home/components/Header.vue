<template>
  <div class="header">
    <div class="header-left"><div class="iconfont">&#xe779;</div></div>
    <div class="header-input">
      <span class="iconfont">&#xe752;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        {{this.$store.state.city}}
        <span class="iconfont">&#xe771;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="scss" scoped>
  @import '~@/assets/style/variables';

  .header {
    display: flex;
    background-color: $bgColor;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    .header-left {
      float: right;
      width: 4rem;
    }

    .header-input {
      background-color: #fff;
      margin: 0.1rem;
      line-height: 2.8rem;
      height: 2.8rem;
      width: 100%;
      border-radius: 0.3rem;
      text-align: left;
    }
    .header-right {
      float: right;
      width: 5rem;
    }
  }

</style>
