<template>
  <div class="edit-content">
    <table class="edit-table">

      <tr>
        <td ><span>ID：</span></td>
        <td>
          <input type="text" placeholder="请输入歌曲名称" class="edit-input" v-model="editId" disabled>
        </td>
      </tr>

      <tr>
        <td ><span>歌曲名称：</span></td>
        <td>
          <input type="text" placeholder="请输入歌曲名称" class="edit-input" v-model="editName">
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <select class="edit-input" v-model="editStatus">
            <option value="0">未激活</option>
            <option value="1">激活</option>
          </select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <button class="edit-btn" @click="clickEditUser">确定</button>
        </td>
        <td class="btn-center">
          <button class="edit-btn"  @click="backClick">取消</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {findUserById,updateUser} from "../../../network/user";

  export default {
    name: "editUser",
    data(){
      return{
        roleId:0,
        role:{},
        editId:0,
        editName:'',
        editStatus:0
      }
    },
    created() {
      this.roleId=this.$route.params.id

      findUserById(this.roleId).then(res=>{
        this.role=res
        this.editId=this.role.id
        this.editName=this.role.name
        this.editStatus=this.role.status
      })
    },
    methods:{
      backClick(){
        this.$router.back()
      },
      clickEditUser(){
        updateUser(this.editId,this.editName,this.editStatus).then(res=>{
          alert('编辑成功')
          this.backClick()
        })
      }
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
