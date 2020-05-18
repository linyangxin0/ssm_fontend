<template>
  <div class="list-content">
    <div v-if="songListList.length==0" class="none-content">
      <span class="none-text">无可匹配项,请检查是否输入正确关键词.</span>
    </div>
    <table v-if="songListList.length!=0">
      <tr>
        <th>序号</th>
        <th>歌单名称</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in songListList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>
          <button class="list-btn" @click="getSongList(item.id)">查看</button>
          <button class="list-btn" @click="editSongList(item)">编辑</button>
          <button class="list-btn" @click="delSongList(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "SongListList",
    filters:{
      showDate:function (value) {
        let date = new Date(value);
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    props:{
      songListList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      getSongList(id){
        this.$emit("getSongList",id)
      },
      editSongList(id){
        this.$emit("editSongList",id)
      },
      delSongList(id){
        this.$emit("delSongList",id)
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
