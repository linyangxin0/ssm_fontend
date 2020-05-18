<template>
  <div>
    <add-device-song-list :song-list="songList" @cancelSongList="cancelSongList"/>
  </div>
</template>

<script>
  import {findSongListIn,cancelSongList} from "../../../network/deviceSong";

  import AddDeviceSongList from "../childComponents/addDeviceSongList";
  export default {
    name: "addDeviceSong",
    components: {AddDeviceSongList},
    data(){
      return{
        deviceId:'',
        songList:[]
      }
    },
    created() {
      this.deviceId=this.$route.params.id
      this._findSongListIn()
    },
    methods:{
      _findSongListIn(){
        findSongListIn(this.deviceId).then(res=>{
          this.songList=res
        })
      },
      cancelSongList(songListId){
        cancelSongList(songListId,this.deviceId).then(res=>{
          alert('取消推送成功')
          this._findSongListIn()
        })
      }
    }
  }
</script>

<style scoped>

</style>
