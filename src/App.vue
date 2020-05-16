<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/MainTabBar/MainTabBar";
  export default {
    components: {MainTabBar}
  }
</script>


<style>
  @import "./assets/css/base.css";

  .content{
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    width: 85%;
  }

</style>

