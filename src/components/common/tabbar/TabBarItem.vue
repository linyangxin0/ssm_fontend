<template>
  <div class="tab-bar-item-content">
    <div class="title">
      <img src="~assets/img/title-icon.png" class="title-img">
      <span class="title-text">{{title}}</span>
    </div>
<!--    :path="pathStr[index]"-->
    <div v-if="isActive">
      <div v-for="(item,index) in smallTitles" class="small-title">
        <router-link :to="pathStr[index]" class="router-dec">
          <img src="~assets/img/small-title-icon.png" class="small-title-img">
          <span class="small-title-text">{{item}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      title:'',
      smallTitles:{
        default(){
          return[];
        }
      },
      isActive:false,
      pathStr:{
        default(){
          return[];
        }
      }
    },
    computed:{

    },
    methods:{
    }
  }
</script>

<style scoped>
  .tab-bar-item-content{
    margin-top: 5px;
    padding-top: 5px;
  }

  .title{
    margin-bottom: 10px;
    cursor: pointer;
  }

  .title-img{
    width: 14px;
    height: 14px;
  }

  .small-title-img{
    position: relative;
    top: 5px;

    width: 20px;
    height: 20px;
  }

  .title-text{
    margin-left: 20px;
  }

  .small-title{
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
  }

  .small-title-text{
    margin-left: 10px;
  }

  .router-dec{
    text-decoration: none;
    color: #707070;
  }
</style>
