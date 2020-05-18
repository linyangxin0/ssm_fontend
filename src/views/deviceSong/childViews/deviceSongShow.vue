<template>
  <div>
    <device-song-show-list :song-list="songLists" @addSongList="addSongList"/>
  </div>
</template>

<script>
  import {findSongListNotIn,addSongList} from "../../../network/deviceSong";

  import DeviceSongShowList from "../childComponents/deviceSongShowList";
  export default {
    name: "deviceSongShow",
    components: {DeviceSongShowList},
    data(){
      return{
        deviceId:'',
        songLists:[]
      }
    },
    created() {
      this.deviceId = this.$route.params.id
      this._findSongListNotIn()
    },
    methods:{
      addSongList(songListId){
        addSongList(songListId,this.deviceId).then(res=>{
          alert('添加成功')
          this._findSongListNotIn()
        })
      },
      _findSongListNotIn(){
        findSongListNotIn(this.deviceId).then(res=>{
          this.songLists=res
        })
      }
    }
  }
</script>

<style scoped>

</style>
