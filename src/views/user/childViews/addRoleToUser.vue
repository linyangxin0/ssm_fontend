<template>
  <div class="list-content">
    <div v-if="roles.length==0" class="none-content">
      <span class="none-text">无可添加角色，或已添加所有角色.</span>
    </div>
    <table v-if="roles.length!=0">
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in roles">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>
          <button class="list-btn" @click="addRole(item.id)">添加角色</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {findRoleNotIn,addRoleToUser} from "../../../network/user";

  export default {
    name: "addRoleToUser",
    data(){
      return{
        userId:0,
        roles:[]
      }
    },
    created() {
      this.userId = this.$route.params.id

      this._findRoleNotIn()
    },
    methods:{
      addRole(id){
        addRoleToUser(this.userId,id).then(res=>{
          alert('添加成功')
          this._findRoleNotIn()
        })
      },
      _findRoleNotIn(){
        findRoleNotIn(this.userId).then(res=>{
          this.roles=res
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
    width: 90px;
    height: 30px;

    border-radius: 5px;
    border: 1px solid #707070;
    background-color: #fff;
    margin-right: 20px;
  }
</style>
