<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @changeLetter="changeLetter"></city-alphabet>
  </div>
</template>

<script>

  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'
  export default {
    name: "city",
    components: {
      CityHeader:()=>import('./components/Header'),
      CitySearch,
      CityList,
      CityAlphabet
    },
    data(){
      return {
        cities:{},
        hotCities:[],
        letter:''
      }
    },
    mounted:function(){
      axios({
        method:'get',
        url:'/api/city.json'
      }).then(res=>{
        if(res.data.code !='200'){

        }else{
          this.cities = res.data.data.cities
          this.hotCities = res.data.data.hotCities
        }
      }).catch(error=>{

      })
    },
    methods:{
      changeLetter(letter){
        this.letter = letter
      }
    }
  }
</script>

<style scoped>

</style>
