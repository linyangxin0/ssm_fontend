<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>广告内容：</span></td>
        <td>
          <input type="text" placeholder="请输入歌曲名称" class="add-input" v-model="addContext">
        </td>
      </tr>

      <tr>
        <td><span>请选择日期：</span></td>
        <td>
          <input type="date" class="add-input" v-model="addGetDate">
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

  import {addAdvertisement} from "../../../network/advertisement";

  export default {
    name: "addAdvertisement",
    data(){
      return{
        addContext:'',
        addGetDate:Date,
      }
    },
    methods:{
      clickAddSong(){
        addAdvertisement(this.addContext,this.addGetDate).then(res=>{
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
