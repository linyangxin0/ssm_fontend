<template>
  <div class="list-content">
    <div v-if="advertisementList.length==0" class="none-content">
      <span class="none-text">无可匹配项,请检查是否输入正确关键词.</span>
    </div>
    <table v-if="advertisementList.length!=0">
      <tr>
        <th>序号</th>
        <th>广告内容</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in advertisementList">
        <td>{{item.id}}</td>
        <td>{{item.context}}</td>
        <td>{{item.getDate|showDate}}</td>
        <td>
          <button class="list-btn" @click="editUser(item.id)">编辑</button>
          <button class="list-btn-add" @click="addRoleToUser(item.id)">添加角色</button>
          <button class="list-btn" @click="delAdvertisement(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {formatDate} from "@/common/utils";

  export default {
    name: "AdvertisementList",
    props:{
      advertisementList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      delAdvertisement(id){
        this.$emit("delAdvertisement",id)
      },
      editUser(id){
        this.$router.push('/user/editUser/'+id)
      },
      addRoleToUser(id){
        this.$router.push('/user/addRoleToUser/'+id)
      }
    },
    filters:{
      showDate:function (value) {
        let date = new Date(value);
        return formatDate(date, 'yyyy-MM-dd')
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
