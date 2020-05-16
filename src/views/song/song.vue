<template>
  <div class="content">
    <song-top-bar/>
    <song-list :song-list="songsList"/>
  </div>
</template>

<script>
  import SongTopBar from "./childComponents/SongTopBar";
  import SongList from "./childComponents/SongList";
  import {songFindAll} from "../../network/song";
  export default {
    name: "song",
    components: {SongList, SongTopBar},
    data(){
      return{
        songsList:[]
      }
    },
    created() {
      songFindAll().then(res=>{
        this.songsList=res
      })
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>
