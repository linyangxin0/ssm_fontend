<template>
  <div class="content">
    <device-song-top-bar @searchDevice="searchDevice" @findAll="findAll"/>
    <device-song-list :device-list="deviceList"/>
  </div>
</template>

<script>

  import {deviceFindAll} from "../../network/deviceSong";

  import DeviceSongList from "./childComponents/deviceSongList";
  import DeviceSongTopBar from "./childComponents/deviceSongTopBar";
  import {deviceSearch} from "../../network/device";

  export default {
    name: "deviceSong",
    data(){
      return{
        deviceList:[]
      }
    },
    components: {DeviceSongTopBar, DeviceSongList},
    created() {
      deviceFindAll().then(res=>{
        this.deviceList=res
      })
    },
    methods:{
      _deviceFindAll(){
        deviceFindAll().then(res=>{
          this.deviceList=res
        })
      },
      searchDevice(searchText){
        deviceSearch(searchText).then(res=>{
          this.deviceList=res
        })
      },
      findAll(){
        this._deviceFindAll()
      },
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>
