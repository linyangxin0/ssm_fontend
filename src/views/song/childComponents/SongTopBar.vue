<template>
  <div class="bar-content">
    <input type="text" class="search-input" placeholder="请输入搜索内容">
    <button class="search-btn">搜索</button>
    <button class="all-btn">全部</button>
    <button class="btn">新增歌曲</button>
  </div>
</template>

<script>
  export default {
    name: "SongTopBar"
  }
</script>

<style scoped>
  .bar-content{
    height: 60px;
  }

  .search-input{
    height: 30px;
    border-radius: 5px;
    border: 1.5px #adadad solid;
    padding-left: 20px;
  }

  .search-btn{
    margin-left: 30px;
    border-radius: 5px;
    height: 35px;
    width: 60px;
    background-color: #c8c8c8;
    border: none;
    cursor: pointer;
  }

  .all-btn{
    margin-left: 30px;
    border-radius: 5px;
    height: 35px;
    width: 60px;
    background-color: #ececec;
    border: 1px #c8c8c8 solid;
    cursor: pointer;
  }

  .btn{
    float: right;
    margin-right: 30px;

    height: 35px;
    width: 100px;
    border-radius: 5px;
    border: 1px #c8c8c8 solid;
    background-color: #fff;
    cursor: pointer;
  }


</style>
