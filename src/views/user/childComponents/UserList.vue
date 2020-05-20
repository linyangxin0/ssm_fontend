<template>
  <div class="list-content">
    <div v-if="userList.length==0" class="none-content">
      <span class="none-text">无可匹配项,请检查是否输入正确关键词.</span>
    </div>
    <table v-if="userList.length!=0">
      <tr>
        <th>序号</th>
        <th>用户名</th>
        <th>状态</th>
        <th v-if="$store.state.isAdmin">操作</th>
      </tr>
      <tr v-for="item in userList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td v-if="item.status!=1" class="text-red">未激活</td>
        <td v-if="item.status==1">激活</td>
        <td v-if="$store.state.isAdmin">
          <button class="list-btn" @click="editUser(item.id)">编辑</button>
          <button class="list-btn-add" @click="addRoleToUser(item.id)">添加角色</button>
          <button class="list-btn" @click="delUser(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "UserList",
    props:{
      userList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      delUser(id){
        this.$emit("delUser",id)
      },
      editUser(id){
        this.$router.push('/user/editUser/'+id)
      },
      addRoleToUser(id){
        this.$router.push('/user/addRoleToUser/'+id)
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
