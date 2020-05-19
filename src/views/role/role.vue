<template>
  <div class="content">
    <role-list :role-list="roleList"/>
  </div>
</template>

<script>

  import {roleFindAll} from "../../network/Role";

  import RoleTopBar from "./childComponents/RoleTopBar";
  import RoleList from "./childComponents/RoleList";
  export default {
    name: "role",
    components: {RoleList, RoleTopBar},
    data(){
      return{
        roleList:[]
      }
    },
    created() {
      this._roleFindAll()
    },
    methods:{
      _roleFindAll(){
        roleFindAll().then(res=>{
          this.roleList=res
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>
