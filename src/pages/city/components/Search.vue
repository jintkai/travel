<template>
  <div>
    <div class="city-search">
      <input placeholder="请输入城市或拼音" type="text" class="search-input" v-model="keyword"/>
    </div>
    <div class="search-list" ref="searchList" v-show="showResultDiv">
      <ul>
        <li v-for="(item ,index) in result" :key="index">{{item}}</li>
        <li v-show="showResult">没有匹配到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "CitySearch",
    props: {
      cities: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        keyword: '',
        searchCitys: [],
        result: []
      }
    },
    computed:{
      showResult(){
        return !this.result.length
      },
      showResultDiv(){
        return this.keyword
      }
    },
    watch: {
      keyword() {
        this.result = []
        if (this.keyword == '')
          return
        for (let item in this.cities) {
          this.cities[item].forEach(city => {
            if (city.name.indexOf(this.keyword) > -1 || city.spell.indexOf(this.keyword) > -1) {
              this.result.push(city.name)
            }
          })
        }
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.searchList)
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .city-search {
    padding: 0.1rem 0.2rem;
    background-color: $bgColor;
    .search-input {
      box-sizing: border-box;
      border: 1px solid #666;
      padding: 0 0.3rem;
      line-height: 1.5rem;
      border-radius: 0.2rem;
      width: 100%;
      color: #666;
      text-align: center;
    }
  }

  .search-list {
    z-index: 1;
    overflow: hidden;
    background-color: #eee;
    position: absolute;
    top: 3.8rem;
    bottom: 0;
    width: 100%;
    padding-left: 0;
    li {
      padding: 0.25rem;
      border-bottom: 1px solid #fff;
    }
  }
</style>
