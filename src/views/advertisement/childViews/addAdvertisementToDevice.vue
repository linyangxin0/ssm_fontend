<template>
  <div class="list-content">
    <div v-if="deviceList.length==0" class="none-content">
      <span class="none-text">无可推送设备，或该广告已推送给所有设备.</span>
    </div>
    <table v-if="deviceList.length!=0">
      <tr>
        <th>序号</th>
        <th>设备名称</th>
        <th>设备类型</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in deviceList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td v-if="item.type==0">Android设备</td>
        <td v-if="item.type!=0">开发板设备</td>
        <td>
          <button class="list-btn-add" @click="addAdvertisementTo(item.id)">添加推送</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {findDeviceNotIn,addAdvertisementToDevice} from "../../../network/advertisement";

  export default {
    name: "addAdvertisementToDevice",
    data(){
      return{
        deviceList:[],
        advertisementId:0
      }
    },
    created() {
      this.advertisementId=this.$route.params.id
      this._findDeviceNotIn()
    },
    methods:{
      _findDeviceNotIn(){
        findDeviceNotIn(this.advertisementId).then(res=>{
          this.deviceList=res
        })
      },
      addAdvertisementTo(id){
        addAdvertisementToDevice(this.advertisementId,id).then(res=>{
          alert('添加推送成功')
          this._findDeviceNotIn()
        })
      }
    }
  }
</script>

<style scoped>
  table{
    width: 100%;
  }

  tr{
    display: flex;

    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d3d3d3;
  }
  th,td{
    flex: 1;
    text-align: left;
  }

  .text-red{
    color: red;
  }

  .none-content{
    width: 500px;
    height: 100px;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto;
  }

  .none-text{
    font-size: 25px;
  }

  .list-btn{
    width: 60px;
    height: 30px;

    border-radius: 5px;
    border: 1px solid #707070;
    background-color: #fff;
    margin-right: 20px;
  }

  .list-btn-add{
    width: 90px;
    height: 30px;

    border-radius: 5px;
    border: 1px solid #707070;
    background-color: #fff;
    margin-right: 20px;
  }
</style>
