<template>
  <div>
    <div class="city-list" ref="wrapper">
      <div>
        <div>
          <div class="city-listtitle">
            我的城市
          </div>
          <div class="city-items">
            <div class="city-item">
              <div>{{this.$store.state.city}}</div>
            </div>
          </div>
          <div class="city-listtitle">
            热门城市
          </div>
          <div class="city-items">
            <div class="city-item" v-for="city in hotCities" :key="city.id" @click="changeCity(city.name)">
              <div>{{city.name}}</div>
            </div>
          </div>
        </div>

        <div v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="city-listtitle">
            {{key}}
          </div>
          <div class="citys" >
            <div class="item"  v-for="city in item" :key="city.id" @click="changeCity(city.name)">
              {{city.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Citylist",
    props: {
      cities: {
        type: Object
      },
      hotCities: {
        type: Array
      },
      letter:{
        type:String
      }
    },
    watch:{
      letter(){
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    },
    methods:{
      changeCity(city){
        this.$store.dispatch('changeCity',city)
        this.$router.push({path:"/"})
      }
    },
    mounted: function () {
      console.log(this.$refs.wrapper)
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped lang="scss">
  .city-list {
    overflow: hidden;
    position: absolute;
    top: 3.8rem;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .city-listtitle {
    background-color: #eee;
    line-height: 1.5rem;
    padding: 0.1rem 0.2rem;
    clear: both;
  }

  .city-items {
    padding: 0 1rem 0 0.1rem;

  }

  .city-item {
    box-sizing: border-box;
    float: left;
    width: 33.3%;
    text-align: center;
    line-height: 1.3rem;
    div {
      border: 1px solid #ccc;
      margin: 0.2rem 0.5rem;
      color: #ccc;
      border-radius: 0.2rem;
    }
  }

  .citys {
    padding: 0.1rem 0rem;
    .item {
      overflow: hidden;
      border: 1px solid #eee;
      padding: 0.1rem;
      line-height: 1.2rem;
      height: 1.2rem;
      color: #ccc;
    }
  }
</style>
