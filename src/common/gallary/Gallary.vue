<template>
  <div class="gallary"  @click="handerImgClick">
    <div class="gallary-item">
      <swiper :options="swiperOption">
        <swiper-slide class="slide" v-for="item ,index in list" :key="index" >
          <img :src="item.url"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>

<script>
  export default {
    name: "gallary",
    props:{
      list:{
        type:Array
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType:'fraction',
          observeParents:true,
          observer:true
        }
      }
    },
    methods:{
      handerImgClick(){
        this.$emit("imgClick")
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .gallary {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    display: flex;
    align-items:center;
    .swiper-container{
      overflow: inherit;
    }
    .gallary-item{
      width:100%;
      background-color: aliceblue;
      padding-bottom: 70%;
      height: 0;
    }
    .slide {
      img {
        width: 100%;
      }
    }

    .swiper-pagination{
      bottom:-6rem;
      color:#fff;
      font-size:1.0rem;
    }

  }
</style>
