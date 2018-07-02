<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
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
    data: function () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',//定义底部样式
          loop:true                        //设置是否可循环
        },
        swiperList: [
          {
            id: '0001',
            url: 'http://m.elongstatic.com/promotions/wireless/uploadImages/images/152601257966674.jpg'
          },
          {
            id: '0002',
            url: 'http://m.elongstatic.com/promotions/wireless/uploadImages/images/152939183000057.jpg'
          },
          {
            id: '0003',
            url: 'http://m.elongstatic.com/promotions/wireless/uploadImages/images/152963114101403.jpg'
          },
          {
            id: '0004',
            url: 'http://m.elongstatic.com/promotions/wireless/uploadImages/images/153006414328573.jpg'
          }
        ]
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
