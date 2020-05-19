<template>
  <div class="list-content">
    <div v-if="userList.length==0" class="none-content">
      <span class="none-text">该角色下还没有用户，请前往用户管理添加.</span>
    </div>
    <table v-if="userList.length!=0">
      <tr>
        <th>序号</th>
        <th>用户名</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in userList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td v-if="item.status!=1" class="text-red">未激活</td>
        <td v-if="item.status==1">激活</td>
        <td>
          <button class="list-btn" @click="delUserFromRole(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "delUserFromRoleList",
    props:{
      userList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      delUserFromRole(id){
        this.$emit("delUserFromRole",id)
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
