<template>
  <div>
    <song-list-show-list :song-list="songs" @delSongFromSongList="delSongFromSongList"/>
  </div>
</template>

<script>

  import {findSongListsSong,delSongFromSongList} from "../../../network/songList";
  import SongListShowList from "../childComponents/songListShowList";

  export default {
    name: "songListShow",
    components: {SongListShowList},
    data(){
      return{
        id:0,
        songs:[]
      }
    },
    created() {
      this.id=this.$route.params.id

      //获取歌单歌曲
      this._findSongListsSong()
    },
    methods:{
      delSongFromSongList(id){
        delSongFromSongList(id,this.id).then(res=>{
          //刷新页面信息
          this._findSongListsSong(this.id)
        })
      },
      _findSongListsSong(){
        findSongListsSong(this.id).then(res=>{
          this.songs=res
        })
      }
    }
  }
</script>

<style scoped>

</style>
