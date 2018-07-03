<template>
  <div>
    <swiper :options="swiperOption" class="swiper" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.url" class="item"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      swiperList:{
        type:Array
      }
    },
    computed:{
      showSwiper:function(){
        return this.swiperList.length
      }
    },
    data: function () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',//定义底部样式
          loop:true                        //设置是否可循环
        }
      }
    }
  }
</script>

<style lang="scss">
  .swiper{
    .swiper-pagination-bullet-active{
      background:#fff;
    }
  }
</style>
<style scoped lang="scss">
  .swiper {
    background-color: #ccc;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 30%;
    .item {
      width: 100%;
    }
    .swiper-pagination {
    }
  }

</style>
