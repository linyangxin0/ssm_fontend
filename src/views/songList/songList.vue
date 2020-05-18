<template>
  <div class="content">
    <song-list-top-bar/>
    <song-list-list :song-list-list="songListList" @getSongList="getSongList"/>
  </div>
</template>

<script>

  import SongListTopBar from "./childComponents/SongListTopBar";
  import SongListList from "./childComponents/SongListList";

  import {songListFindAll} from "../../network/songList";

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
      }
    }
  }
</script>

<style scoped>

  .content{
    margin: 20px;
  }
</style>
