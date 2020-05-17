<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>歌曲名称：</span></td>
        <td>
          <input type="text" placeholder="请输入歌曲名称" class="add-input" v-model="addName">
        </td>
      </tr>

      <tr>
        <td><span>歌曲描述：</span></td>
        <td>
          <input type="text" placeholder="请输入歌曲描述" class="add-input" v-model="addInfo">
        </td>
      </tr>

      <tr>
        <td><span>作者：</span></td>
        <td>
          <input type="text" placeholder="请输入作者" class="add-input" v-model="addAuthor">
        </td>
      </tr>

      <tr>
        <td><span>请选择日期：</span></td>
        <td>
          <input type="date" class="add-input" v-model="addUpdateTime">
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <select class="add-input" v-model="addStatus">
            <option value="0">设计中</option>
            <option value="1">发布</option>
          </select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <button class="add-btn" @click="clickAddSong">确定</button>
        </td>
        <td class="btn-center">
          <button class="add-btn"  @click="backClick">取消</button>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
  import {addSong} from "../../../network/song";

  export default {
    name: "addSong",
    data(){
      return{
        addName:'',
        addInfo:'',
        addAuthor:'',
        addUpdateTime:Date,
        addStatus:0
      }
    },
    methods:{
      clickAddSong(){
        // let song=this.$qs.stringify({
        //   name:this.addName,
        //   info:this.addInfo,
        //   author:this.addAuthor,
        //   updateTime:this.addUpdateTime,
        //   status:this.addStatus
        // })

        // let song={
        //   'name':this.addName,
        //   'info':this.addInfo,
        //   'author':this.addAuthor,
        //   'updateTime':this.addUpdateTime,
        //   'status':this.addStatus
        // }
        addSong(this.addName,this.addInfo,this.addAuthor,this.addUpdateTime,this.addStatus).then(res=>{
          alert('添加成功')
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
    height: 400px;
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
