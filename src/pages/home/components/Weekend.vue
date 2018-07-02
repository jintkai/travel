<template>
  <div>
    <div class="weekend">
      周末去哪儿
    </div>
    <div>
      <div class="item" v-for="(item ,index) in list" :key="index">
        <div class="item-img-div">
          <img class="item-img"
               :src="item.imgUrl"/>
        </div>
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "weekend",
    data() {
      return {
        list: [
          {
            title: '北京出发-跟团游 【亲子品质优选】日本本州7日游丨双古都+迪士尼、富士急/环球影城双乐园嗨翻天',
            desc: '北京出发-跟团游 【亲子品质优选】日本本州7日游丨双古都+迪士尼、富士急/环球影城双乐园嗨翻天',
            imgUrl: 'https://img1.qunarzz.com/p/tts4/1803/e8/d06efc00533e2802.jpg_r_640x420x90_9d95bdcf.jpg'
          },
          {
            title: '这个是标题',
            desc: '北京出发-跟团游 【亲子品质优选】日本本州7日游丨双古都+迪士尼、富士急/环球影城双乐园嗨翻天',
            imgUrl: 'https://img1.qunarzz.com/p/tts2/1803/2f/80131e5732519e02.jpg_r_640x420x90_5b5dcb85.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .weekend {
    background-color: #eee;
    line-height: 2.5rem;
    font-size: 1rem;
  }

  .item {
    overflow: hidden;
    border-bottom: 1px solid #eee;
    padding: 0.2rem;
    .item-img-div {
      background-color: #eee;
      height: 0px;
      overflow:hidden;
      width:100%;
      padding-bottom: 60%;
    }
    .item-img {
      width: 100%;

    }
    .item-content {
      .item-title {
        line-height: 1.5rem;
        @include ellipsis;
      }
      .item-desc {
        color: #ccc;
        line-height: 1.5rem;
        padding: 0.2rem 0rem;
        @include ellipsis;
      }
    }
  }
</style>
