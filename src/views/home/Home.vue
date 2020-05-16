<template>
  <div>
    123
  </div>
</template>

<script>
  import {songFindAll} from "../../network/song";


  export default {
    name: "home",
    data(){
      return{
        songsList:[]
      }
    },
    created() {
      songFindAll().then(res=>{
        console.log(res)
        this.songsList=res
      })
    }
  }
</script>

<style scoped>

</style>
