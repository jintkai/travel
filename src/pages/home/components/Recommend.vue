<template>
  <div>
    <div class="recommend">
      推荐热线
    </div>
    <div>
      <router-link class="item" v-for="(item ,index) in list" :key="index" to="/detail/001" tag="div">
        <img class="item-img"
             :src="item.imgUrl"/>
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    data(){
      return {
        list:[
          {
            title:'北京出发-跟团游 【亲子品质优选】日本本州7日游丨双古都+迪士尼、富士急/环球影城双乐园嗨翻天',
            desc:'北京出发-跟团游 【亲子品质优选】日本本州7日游丨双古都+迪士尼、富士急/环球影城双乐园嗨翻天',
            imgUrl:'https://img1.qunarzz.com/p/tts4/1803/e8/d06efc00533e2802.jpg_r_640x420x90_9d95bdcf.jpg'
          },
          {
            title:'这个是标题',
            desc:'北京出发-跟团游 【亲子品质优选】日本本州7日游丨双古都+迪士尼、富士急/环球影城双乐园嗨翻天',
            imgUrl:'https://img1.qunarzz.com/p/tts2/1803/2f/80131e5732519e02.jpg_r_640x420x90_5b5dcb85.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';
  .recommend {
    background-color: #eee;
    line-height: 2.5rem;
    font-size: 1rem;
  }

  .item {
    overflow: hidden;
    display: flex;
    border-bottom:1px solid #eee;
    padding:0.2rem;
    .item-img {
      width: 6rem;
      height: 6rem;
    }
    .item-content {
      padding:0 0.5rem;
      min-width:0;
      .item-title{
        line-height:1.5rem;
        @include ellipsis;
      }
      .item-desc{
        color:#ccc;
        line-height:1.5rem;
        padding:0.2rem 0rem;
        @include ellipsis;
      }
      .item-button{
        background-color: bisque;
        line-height:1.5rem;
        border-radius:0.2rem;
      }
    }
  }
</style>
