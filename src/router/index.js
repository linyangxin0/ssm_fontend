import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home');
const login=()=>import('../views/login/login');


const advertisement=()=>import('../views/advertisement/advertisement');
const addAdvertisement=()=>import('../views/advertisement/childViews/addAdvertisement');
const addAdvertisementToDevice=()=>import('../views/advertisement/childViews/addAdvertisementToDevice');
const editAdvertisement=()=>import('../views/advertisement/childViews/editAdvertisement');



const device=()=>import('../views/device/device');
const addDevice=()=>import('../views/device/childViews/addDevice');
const editDevice=()=>import('../views/device/childViews/editDevice');

const deviceSong=()=>import('../views/deviceSong/deviceSong');
const deviceSongShow=()=>import('../views/deviceSong/childViews/deviceSongShow');
const addDeviceSong=()=>import('../views/deviceSong/childViews/addDeviceSong');

const role=()=>import('../views/role/role');
const delUserFromRole=()=>import('../views/role/childViews/delUserFromRole');

const song=()=>import('../views/song/song');
const addSong=()=>import('../views/song/childViews/addSong');
const editSong=()=>import('../views/song/childViews/editSong');

const songList=()=>import('../views/songList/songList');
const songListShow=()=>import('../views/songList/childViews/songListShow');
const addSongToSongList=()=>import('../views/songList/childViews/addSongToSongList');
const addSongList=()=>import('../views/songList/childViews/addSongList');

const user=()=>import('../views/user/user');
const addUser=()=>import('../views/user/childViews/addUser');
const addRoleToUser=()=>import('../views/user/childViews/addRoleToUser');
const editUser=()=>import('../views/user/childViews/editUser');

const notFound=()=>import('../views/404/404');


Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

  const routes = [
    {
      path:'/',
      component:Home,
      meta:{
        showTab:true
      }
    },{
      path: '/home',
      component:Home,
      meta:{
        showTab:true
      },
    },{
      path: '/login',
      component:login
    },{
      path: '/404',
      component:notFound
    },{
      path:'/advertisement',
      component:advertisement,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/advertisement/addAdvertisement',
      component:addAdvertisement,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/advertisement/addAdvertisementToDevice/:id',
      component:addAdvertisementToDevice,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/advertisement/editAdvertisement/:id',
      component:editAdvertisement,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/device',
      component:device,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/device/addDevice',
      component:addDevice,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/device/editDevice/:id',
      component:editDevice,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/deviceSong' ,
      component:deviceSong,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/deviceSong/addDeviceSong/:id' ,
      component:deviceSongShow,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/deviceSong/deviceSongShow/:id' ,
      component:addDeviceSong,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/role' ,
      component:role,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/role/delUserFromRole/:id' ,
      component:delUserFromRole,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/song',
      component:song,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    }, {
      path:'/song/addSong',
      component:addSong,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/song/editSong/:id',
      component:editSong,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/songList',
      component:songList,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/songList/songListShow/:id',
      component:songListShow,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/songList/addSongToSongList/:id',
      component:addSongToSongList,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/songList/addSongList',
      component:addSongList,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/user',
      component:user,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/user/addUser',
      component:addUser,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/user/addRoleToUser/:id',
      component:addRoleToUser,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    },{
      path:'/user/editUser/:id',
      component:editUser,
      meta:{
        showTab:true,
        requiresAuth:true
      }
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
