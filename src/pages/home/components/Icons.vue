<template>
  <div class="icons">
    <swiper>
      <swiper-slide :options="swiperOption" v-for="(item,index) in pages" :key="index">
        <div class="icon" v-for="icon in item">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl"/>
          </div>
          <p class="icon-title" v-text="icon.title"></p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
  export default {
    name: "icons",
    props:{
      iconlist:{
        type:Array
      }
    },
    data: function () {
      return {
        swiperOption:{
          autopaly:false
        }
      }
    },
    computed:{
      pages:function(){
        let pages =[]
        for(let index = 0; index<this.iconlist.length;index++){
          if(index%8 ==0){
            pages[Math.floor(index/8)] =[]
          }
          pages[Math.floor(index/8)].push(this.iconlist[index])
        }
        return pages
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';
  .icons {
    width: 100%;
    height: 0px;
    padding-bottom: 50%;
    .icon {
      position: relative;
      overflow: hidden; //子div宽度
      width: 25%;
      height: 0px;
      padding-bottom: 25%;
      float: left;
      .icon-img {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 1.3rem;
        padding: 0.4rem;
      }
      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
      .icon-title {
        margin: 0 auto;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1.3rem;
        line-height: 1.3rem;
        text-align: center;
        @include ellipsis;
      }
    }
  }
</style>
