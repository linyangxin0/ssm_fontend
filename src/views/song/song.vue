<template>
  <div class="content">
    <song-top-bar @searchSong="searchSong" @findAll="findAll"/>
    <song-list :song-list="songsList"/>
  </div>
</template>

<script>
  import SongTopBar from "./childComponents/SongTopBar";
  import SongList from "./childComponents/SongList";
  import {songFindAll,songSearch} from "../../network/song";
  export default {
    name: "song",
    components: {SongList, SongTopBar},
    data(){
      return{
        songsList:[]
      }
    },
    created() {
      //请求歌曲数据
      songFindAll().then(res=>{
        this.songsList=res
      })
    },
    methods:{
      //请求搜索歌曲数据
      searchSong(searchText){
        songSearch(searchText).then(res=>{
          this.songsList=res
        })
      },
      findAll(){
        //请求歌曲数据
        songFindAll().then(res=>{
          this.songsList=res
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
