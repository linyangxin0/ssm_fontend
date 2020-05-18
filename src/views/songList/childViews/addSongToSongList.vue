<template>
  <div>
    <add-song-to-song-list-list :song-list="songs" @addSongToSongList="addSongToSongList"/>
  </div>
</template>

<script>

  import {findSongNotIn,addSongToSongList} from "../../../network/songList";
  import AddSongToSongListList from "../childComponents/addSongToSongListList";

  export default {
    name: "addSongToSongList",
    components: {AddSongToSongListList},
    data(){
      return{
        id:0,
        songs:[]
      }
    },
    created() {
      this.id=this.$route.params.id
      //查询未添加到歌单的歌曲
      this._findSongNotIn()
    },
    methods:{
      addSongToSongList(id){
        addSongToSongList(id,this.id).then(res=>{
          this._findSongNotIn()
          alert('添加成功')
        })
      },
      _findSongNotIn(){
        findSongNotIn(this.id).then(res=>{
          this.songs=res
        })
      }
    }
  }
</script>

<style scoped>

</style>
