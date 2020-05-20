<template>
  <div class="content">
    <div v-if="$store.state.userName==''" class="top">
      <span>请登录系统,</span>
      <router-link to="/login" class="router-click ">
        <span>点击登录</span>
      </router-link>
    </div>
    <div v-if="$store.state.userName!=''" class="top">
      <span>欢迎,{{$store.state.userName}}</span>
      <button @click="logoutBtn" class="logout-btn">退出登录</button>
    </div>
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
          ['歌曲','歌单管理','设备音乐管理'],
          ['用户管理','角色管理'],
          ['设备详情','设备广告']
        ],
        pathStr: [
          ['/song','/songList','/deviceSong'],
          ['/user','/role'],
          ['/device','/advertisement']
        ]
      }
    },
    methods:{
      logoutBtn(){
        localStorage.clear()
        this.$store.commit("removeUserName")
        this.$router.push('/login')
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

  .top{
    position: relative;
    left: 30px;
    margin-top: 30px;
  }

  .router-click{
    text-decoration: none;
    color: #ff7f7d;
  }

  .logout-btn{
    border-radius: 3px;
    border: 1.5px #c7c7c7 solid;
    background-color: #fff;
  }


</style>
