<template>
  <div>
    <del-user-from-role-list :user-list="userList" @delUserFromRole="delUserFromRole"/>
  </div>
</template>

<script>
  import {findUserByRoleId,delUserFromRole} from "../../../network/Role";
  import DelUserFromRoleList from "../childComponents/delUserFromRoleList";

  export default {
    name: "delUserFromRole",
    components: {DelUserFromRoleList},
    data(){
      return{
        roleId:0,
        userList:[]
      }
    },
    created() {
      this.roleId=this.$route.params.id

      this._findUserByRoleId()

    },
    methods:{
      delUserFromRole(id){
        delUserFromRole(id,this.roleId).then(res=>{
          alert('操作成功')
          this._findUserByRoleId()
        })
      },
      _findUserByRoleId(){
        findUserByRoleId(this.roleId).then(res=>{
          this.userList=res
        })
      }
    }
  }
</script>

<style scoped>

</style>
