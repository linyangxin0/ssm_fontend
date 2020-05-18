<template>
  <div class="content">
    <device-top-bar @searchDevice="searchDevice" @findAll="findAll"/>
    <device-list :device-list="deviceList" @delDevice="delDevice"/>
  </div>
</template>

<script>

  import {deviceFindAll,deviceSearch,delDevice} from "../../network/device";

  import DeviceList from "./childComponents/deviceList";
  import DeviceTopBar from "./childComponents/DeviceTopBar";
  export default {
    name: "device",
    components: {DeviceTopBar, DeviceList},
    data(){
      return{
        deviceList:[]
      }
    },
    created() {
      this._deviceFindAll()
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
      delDevice(id){
        delDevice(id).then(res=>{
          alert("删除成功")
          this._deviceFindAll()
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>
