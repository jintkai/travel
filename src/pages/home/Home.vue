<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons :iconlist="iconlist"></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import Icons from './components/Icons'
  import Recommend from './components/Recommend'
  import Weekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSwiper,
      Icons,
      Recommend,
      Weekend
    },
    data: function () {
      return {
        city: '',
        swiperList: [],
        iconlist: []
      }
    },
    mounted: function () {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        axios({
          url: "/api/index.json",
          method: 'get'
        }).then(res => {
          if (res.data.code != '200') {

          } else {
            let data = res.data.data

            this.city = data.city
            this.swiperList = data.swiperList
            this.iconlist = data.iconlist
          }
        }).catch(error => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
