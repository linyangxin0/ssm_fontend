<template>
  <div>
    <table>
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>描述</th>
        <th>歌手</th>
        <th>更新时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in songList">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.info}}</td>
        <td>{{item.author}}</td>
        <td>{{item.updateTime|showDate}}</td>
        <td v-if="item.status!=1">设计中</td>
        <td v-if="item.status==1" class="text-red">发布</td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import {formatDate} from "@/common/utils";

export default {
    name: "SongList",
    filters:{
      showDate:function (value) {
        let date = new Date(value);
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    props:{
      songList:{
        type:Array,
        default(){
          return[]
        }
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

</style>
