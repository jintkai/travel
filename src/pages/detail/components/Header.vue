<template>
  <div class="detail-header">
    <div class="detail-header-top" v-show="showTop" :style="opacityStyle">
      <router-link class="detail-back" tag="div" to="/">
        <div class="iconfont">&#xe779;</div>
      </router-link>
      <div class="detail-title" >
        景点详情
      </div>
    </div>

    <router-link class="header-abs" v-show="!showTop" tag="div" to="/">
      <div class="iconfont">&#xe779;</div>
    </router-link>

  </div>

</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        showTop: false,
        opacityStyle:{
          opacity:0
        }
      }
    },
    methods: {
      srollEvent() {
        let srollTop = document.documentElement.scrollTop
        if (srollTop > 40) {
          this.showTop = true
          if(srollTop>140){
            this.opacityStyle={
              opacity:1
            }
          }else{
            let opacity = srollTop/140
            this.opacityStyle={
              opacity
            }
          }
        } else {
          this.showTop = false
        }

      }
    },
    mounted: function () {
      window.addEventListener("scroll", this.srollEvent)
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .detail-header {
    .detail-header-top {
      z-index: 2;
      position: fixed;
      left:0;
      right:0;
      display: flex;
      line-height: $lineHeight;
      height: $lineHeight;
      background-color: $bgColor;
      text-align: center;
      .detail-back {
        float: left;
      }
      .detail-title {
        flex: 1;
      }
    }

    .header-abs {
      z-index: 2;
      position: absolute;
      top: 0.5rem;
      left: 0.3rem;
      background-color: rgba(0,0,0,0.7);
      height: 2rem;
      width: 2rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        color: #eee;
      }
    }
  }

</style>
