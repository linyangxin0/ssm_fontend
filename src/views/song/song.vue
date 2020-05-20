<template>
  <div class="content">
    <song-top-bar @searchSong="searchSong" @findAll="findAll"/>
    <song-list :song-list="songsList"
               @delSong="delSong" @editSong="editSong"/>
  </div>
</template>

<script>
  import SongTopBar from "./childComponents/SongTopBar";
  import SongList from "./childComponents/SongList";
  import {songFindAll,songSearch,delASong} from "../../network/song";

  export default {
    name: "song",
    components: {SongList, SongTopBar},
    data(){
      return{
        songsList:[],
        theEditSong:{}
      }
    },
    created() {
      //请求歌曲数据
      this._songFindAll()
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
      },
      delSong(e){
        delASong(e).then(res=>{
          this._songFindAll()
        })
      },
      editSong(e){
        this.theEditSong=e
        console.log(e)
        console.log(e.id)
        this.$router.push('/song/editSong/'+e.id)
      },
      _songFindAll(){
        songFindAll().then(res=>{
          this.songsList=res
          console.log(res)
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
