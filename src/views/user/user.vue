<template>
  <div class="content">
    <user-top-bar @searchUser="searchUser" @findAll="findAll"/>
    <user-list :user-list="userList" @delUser="delUser"/>
  </div>
</template>

<script>

  import {userFindAll,userSearch,delUserById} from "../../network/user";

  import UserTopBar from "./childComponents/userTopBar";
  import UserList from "./childComponents/UserList";
  export default {
    name: "user",
    components: {UserList, UserTopBar},
    data(){
      return{
        userList:[]
      }
    },
    created() {
      this._userFindAll()
    },
    methods:{
      _userFindAll(){
        userFindAll().then(res=>{
          this.userList=res
        })
      },
      searchUser(searchText){
        userSearch(searchText).then(res=>{
          this.userList=res
        })
      },
      findAll(){
        this._userFindAll()
      },
      delUser(id){
        delUserById(id).then(res=>{
          this._userFindAll()
          alert('删除成功')
        })
      },
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>
