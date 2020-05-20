<template>
  <div class="list-content">
    <div v-if="deviceList.length==0" class="none-content">
      <span class="none-text">无可匹配项,请检查是否输入正确关键词.</span>
    </div>
    <table v-if="deviceList.length!=0">
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>设备类型</th>
        <th>当前状态</th>
        <th v-if="$store.state.isAdmin">操作</th>
      </tr>
      <tr v-for="item in deviceList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td v-if="item.type==0">Android设备</td>
        <td v-if="item.type!=0">开发板设备</td>
        <td v-if="item.status==0">离线</td>
        <td v-if="item.status!=0">在线</td>
        <td v-if="$store.state.isAdmin">
          <button class="list-btn" @click="editSong(item.id)">编辑</button>
          <button class="list-btn" @click="delDevice(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "deviceList",
    filters:{
      showDate:function (value) {
        let date = new Date(value);
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    props:{
      deviceList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      delDevice(id){
        this.$emit("delDevice",id)
      },
      editSong(id){
        this.$router.push("/device/editDevice/"+id)
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

</style>
