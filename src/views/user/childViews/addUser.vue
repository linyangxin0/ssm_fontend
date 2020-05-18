<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>账户名：</span></td>
        <td>
          <input type="text" placeholder="请输入账户名称" class="add-input" v-model="addName">
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <select class="add-input" v-model="addStatus">
            <option value="0">未激活</option>
            <option value="1">激活</option>
          </select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <button class="add-btn" @click="clickAddUser">确定</button>
        </td>
        <td class="btn-center">
          <button class="add-btn"  @click="backClick">取消</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {addUser} from "../../../network/user";

  export default {
    name: "addUser",
    data(){
      return{
        addName:'',
        addStatus:0
      }
    },
    methods:{
      clickAddUser(){
        addUser(this.addName,this.addStatus).then(res=>{
          alert('添加成功，默认密码为“123”')
          this.$router.back()
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
    height: 250px;
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
