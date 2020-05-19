<template>
  <div class="content">
    <advertisement-top-bar @searchAdvertisement="searchAdvertisement" @findAll="findAll"/>
    <advertisement-list :advertisement-list="advertisementList"/>
  </div>
</template>

<script>
  import {advertisementFindAll,advertisementSearch} from "../../network/advertisement";

  import AdvertisementList from "./childComponents/AdvertisementList";
  import AdvertisementTopBar from "./childComponents/advertisementTopBar";
  export default {
    name: "advertisement",
    components: {AdvertisementTopBar, AdvertisementList},
    data(){
      return{
        advertisementList:[]
      }
    },
    created() {
      this._advertisementFindAll()
    },
    methods:{
      _advertisementFindAll(){
        advertisementFindAll().then(res=>{
          this.advertisementList=res
        })
      },
      searchAdvertisement(searchText){
        advertisementSearch(searchText).then(res=>{
          this.advertisementList=res
        })
      },
      findAll(){
        this._advertisementFindAll()
      }
    }
  }
</script>

<style scoped>

  .content{
    margin: 20px;
  }
</style>
