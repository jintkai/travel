<template>
  <div class="city-search">
    <input placeholder="请输入城市" type="text" class="search-input"/>
  </div>
</template>

<script>
  export default {
    name: "CitySearch"
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .city-search {
    padding:0.1rem 0.2rem;
    background-color: $bgColor;
    .search-input {
      box-sizing: border-box;
      border: 1px solid #666;
      padding:0 0.3rem;
      line-height: 1.5rem;
      border-radius: 0.2rem;
      width:100%;
      color:#666;
      text-align:center;
    }
  }
</style>
