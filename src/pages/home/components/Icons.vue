<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="item in pages">
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
    data: function () {
      return {
        iconlist:[
          {
            title:'景点',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          },
          {  title:'火车票',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          },
          {  title:'机票',
            imgUrl:'https://pic5.40017.cn/02/001/5f/ab/rBLkCFqozNqAJqPYAAAFlYq1v7A413.png'
          },
          {  title:'酒店住宿',
            imgUrl:'https://pic5.40017.cn/01/000/5f/a5/rBLkBVqozNqAGbVbAAADpuwJ0xY082.png'
          },
          {  title:'景点门票',
            imgUrl:'https://pic5.40017.cn/02/001/5f/ab/rBLkCFqozNqAF4UUAAAFH-2jq70957.png'
          },
          {  title:'景点',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          },
          {  title:'景点',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          },
          {  title:'景点',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          },
          {  title:'景点景点景点',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          },
          {  title:'景点',
            imgUrl:'https://pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png'
          }
        ]
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
