<template>
  <div class="edit-content">
    <table class="edit-table">

      <tr>
        <td ><span>ID：</span></td>
        <td>
          <input type="text" class="edit-input" v-model="editId" disabled>
        </td>
      </tr>

      <tr>
        <td ><span>歌曲名称：</span></td>
        <td>
          <input type="text" placeholder="请输入歌曲名称" class="edit-input" v-model="editName">
        </td>
      </tr>

      <tr>
        <td><span>请选择设备类型：</span></td>
        <td>
          <select class="edit-input" v-model="editType">
            <option value="0">Android设备</option>
            <option value="1">开发板设备</option>
          </select>
        </td>
      </tr>

      <tr>
        <td><span>请选择设备状态：</span></td>
        <td>
          <select class="edit-input" v-model="editStatus">
            <option value="0">离线</option>
            <option value="1">在线</option>
          </select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <button class="edit-btn" @click="clickEditDevice">确定</button>
        </td>
        <td class="btn-center">
          <button class="edit-btn"  @click="backClick">取消</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {findDeviceById,editDevice} from "../../../network/device";

  export default {
    name: "editDevice",
    data(){
      return{
        editId:0,
        editName:'',
        editType:0,
        editStatus:0
      }
    },
    props:{
      song:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      clickEditDevice(){
        editDevice(this.editId,this.editName,this.editType,this.editStatus).then(res=>{
          alert('编辑成功')
          this.$router.back()
        })
      },
      backClick(){
        this.$router.back()
      }
    },
    created() {
      this.editId=this.$route.params.id
      findDeviceById(this.editId).then(res=>{
        //进入界面时，填入信息
        this.editName=res.name
        this.editType=res.type
        this.editStatus=res.status
      })
    }
  }
</script>

<style scoped>
  .edit-content{
    width: 600px;
    height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  .edit-table{
    width: 600px;
    height: 400px;
  }

  .edit-input{
    padding-left: 20px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #d3d3d3;
  }

  .btn-center{
    text-align: center;
  }

  .edit-btn{
    width: 80px;
    height: 40px;

    border-radius: 2px;
    border: none;
    background-color: #d3d3d3;
  }
</style>
