<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" @click="clickLetter(key)">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: {
        type: Object
      }
    },
    methods:{
      clickLetter(e){
        this.$emit("changeLetter",e)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variables';

  .list {
    color: $bgColor;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1rem;
    text-align: center;
    .item {
      line-height: 1.2rem;
    }
  }
</style>
