<template>
  <div class="content">
    <song-list-top-bar @searchSongList="searchSongList" @findAllSongList="findAllSongList"/>
    <song-list-list :song-list-list="songListList"
                    @getSongList="getSongList"
                    @delSongList="delSongList"/>
  </div>
</template>

<script>

  import SongListTopBar from "./childComponents/SongListTopBar";
  import SongListList from "./childComponents/SongListList";

  import {songListFindAll,delSongList,findSongListByName} from "../../network/songList";

  export default {
    name: "songList",
    components: {SongListTopBar, SongListList},
    data(){
      return{
        songListList:[]
      }
    },
    created() {
      this._songListFindAll()
    },
    methods:{
      _songListFindAll(){
        songListFindAll().then(res=>{
          this.songListList=res
        })
      },
      getSongList(id){
        this.$router.push('/songList/songListShow/'+id)
      },
      delSongList(id){
        delSongList(id).then(res=>{
          alert('删除成功')
          this._songListFindAll()
        })
      },
      searchSongList(searchText){
        findSongListByName(searchText).then(res=>{
          this.songListList=res
        })
      },
      findAllSongList(){
        this._songListFindAll()
      }
    }

  }
</script>

<style scoped>

  .content{
    margin: 20px;
  }
</style>
