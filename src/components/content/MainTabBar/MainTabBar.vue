<template>
  <div class="content">
    <tab-bar :titles="titles"
             :small-title="smallTitle"
             :path-str="pathStr">

    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {TabBarItem, TabBar},
    data(){
      return{
        titles:['音乐管理', '用户管理','设备管理'],
        smallTitle:[
          ['歌单','设备音乐管理'],
          ['用户管理','角色管理'],
          ['设备详情','设备广告']
        ],
        pathStr: [
          ['/song','/deviceSong'],
          ['/user','/role'],
          ['/device','/advertisement']
        ]

      }
    }
  }
</script>

<style scoped>
  .content{
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;

    width: 15%;

    color: #707070;
  }
</style>
