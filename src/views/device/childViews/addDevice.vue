<template>
  <div class="add-content">
    <table class="add-table">

      <tr>
        <td ><span>设备MAC码：</span></td>
        <td>
          <input type="text" placeholder="请输入设备MAC码" class="add-input" v-model="addId">
        </td>
      </tr>

      <tr>
        <td ><span>设备名称：</span></td>
        <td>
          <input type="text" placeholder="请输入设备名称" class="add-input" v-model="addName">
        </td>
      </tr>

      <tr>
        <td><span>请选择类型：</span></td>
        <td>
          <select class="add-input" v-model="addType">
            <option value="0">Android手机端</option>
            <option value="1">开发板设备</option>
          </select>
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <select class="add-input" v-model="addStatus">
            <option value="0">离线</option>
            <option value="1">在线</option>
          </select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <button class="add-btn" @click="clickAddDevice">确定</button>
        </td>
        <td class="btn-center">
          <button class="add-btn"  @click="backClick">取消</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {addDevice} from "../../../network/device";

  export default {
    name: "addDevice",
    data(){
      return{
        addId:'',
        addName:'',
        addType:0,
        addStatus:0
      }
    },
    methods:{
      clickAddDevice(){
        addDevice(this.addId,this.addName,this.addType,this.addStatus).then(res=>{
            alert('添加成功');
            this.$router.back();
        })
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .add-content{
    width: 600px;
    height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  .add-table{
    width: 600px;
    height: 400px;
  }

  .add-input{
    padding-left: 20px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #d3d3d3;
  }

  .btn-center{
    text-align: center;
  }

  .add-btn{
    width: 80px;
    height: 40px;

    border-radius: 2px;
    border: none;
    background-color: #d3d3d3;
  }
</style>
