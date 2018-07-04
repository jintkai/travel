<template>
  <div class="detail">
    <detail-header></detail-header>
    <div class="detail-img" @click="handleImgClick">
      <img class='img' src="https://img1.qunarzz.com/p/tts8/1806/57/af7911219f377202.jpg_r_640x420x90_f48022a6.jpg"/>
      <div class="img-content">
        <div class="img-title">北京出发-跟团游</div>
        <div class="img-number"><div class="iconfont img-icon">&#xe716;</div><div>80</div></div>
      </div>
    </div>
    <div style="height:50rem;">
      这个是内容
    </div>
    <gallary v-show="showGallary" @imgClick="handleImgClick" :list="list"></gallary>
  </div>
</template>

<script>
  import Gallary from '@/common/gallary/Gallary'
  import DetailHeader from './components/Header'
  export default {
    name: "Detail",
    data:function(){
      return {
        showGallary:false,
        list:[
          {
            url:'https://img1.qunarzz.com/p/tts8/1806/57/af7911219f377202.jpg_r_1280x840x90_922aee0f.jpg'
          },
          {
            url:"https://img1.qunarzz.com/p/tts7/1806/3c/1aac36735857d102.jpg_r_1280x840x90_19145356.jpg"
          }
        ]
      }
    },
    components:{
      Gallary:Gallary,
      DetailHeader
    },
    methods:{
      handleImgClick(){
        this.showGallary = !this.showGallary;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .detail {
    .detail-img {
      position:relative;
      overflow: hidden;
      height: 0;
      padding-bottom: 50%;
      width: 100%;
      .img {
        width: 100%;
      }

      .img-content{
        position:absolute;
        bottom:0;
        display: flex;
        width:100%;
        justify-content: space-around;
        align-items:center;
        color:#fff;
        background: linear-gradient(rgba(255,255,255,0.0),rgba(0,0,0,0.8));
        .img-title{
          flex:1;
          line-height:1.5rem;
          height:1.5rem;
          padding:0 0.2rem;
        }
        .img-number{
          display:flex;
          line-height:1.0rem;
          height:1.0rem;
          padding:0rem 1rem;
        }
        .img-icon{
          font-size:1.5rem;
        }
      }
    }
  }
</style>
