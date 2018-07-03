<template>
    <div class="city-header">
      <div class="city-title">
        选择城市
      </div>
      <div class="city-back">
        <router-link to="/">
          <div class="iconfont">&#xe779;</div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';
  .city-header{
    line-height:$lineHeight;
    text-align: center;
    display:flex;
    .city-back{
      position:absolute;
      width:4rem;
    }
    .city-title{
      background-color: $bgColor;
      width:100%;
    }
  }
</style>
