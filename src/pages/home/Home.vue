<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
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
  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSwiper,
      Icons,
      Recommend,
      Weekend
    }
  }
</script>

<style scoped>

</style>
