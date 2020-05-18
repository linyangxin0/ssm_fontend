<template>
  <div class="list-content">
    <div v-if="songList.length==0" class="none-content">
      <span class="none-text">该设备还未被推送任何歌曲.</span>
    </div>
    <table v-if="songList.length!=0">
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in songList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>
          <button class="list-btn" @click="cancelSongList(item.id)">取消推送</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "addDeviceSongList",
    props:{
      songList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      cancelSongList(id){
        this.$emit("cancelSongList",id)
      },
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
