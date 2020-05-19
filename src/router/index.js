import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home');
const advertisement=()=>import('../views/advertisement/advertisement');
const addAdvertisement=()=>import('../views/advertisement/childViews/addAdvertisement');


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




Vue.use(VueRouter);

  const routes = [
    {
      path:'/',
      component:Home
    },{
      path: '/home',
      component:Home
    },{
      path:'/advertisement',
      component:advertisement
    },{
      path:'/advertisement/addAdvertisement',
      component:addAdvertisement
    },{
      path:'/device',
      component:device
    },{
      path:'/device/addDevice',
      component:addDevice
    },{
      path:'/device/editDevice/:id',
      component:editDevice
    },{
      path:'/deviceSong' ,
      component:deviceSong
    },{
      path:'/deviceSong/addDeviceSong/:id' ,
      component:deviceSongShow
    },{
      path:'/deviceSong/deviceSongShow/:id' ,
      component:addDeviceSong
    },{
      path:'/role' ,
      component:role
    },{
      path:'/role/delUserFromRole/:id' ,
      component:delUserFromRole
    },{
      path:'/song',
      component:song
    }, {
      path:'/song/addSong',
      component:addSong
    },{
      path:'/song/editSong/:id',
      component:editSong
    },{
      path:'/songList',
      component:songList
    },{
      path:'/songList/songListShow/:id',
      component:songListShow
    },{
      path:'/songList/addSongToSongList/:id',
      component:addSongToSongList
    },{
      path:'/songList/addSongList',
      component:addSongList
    },{
      path:'/user',
      component:user
    },{
      path:'/user/addUser',
      component:addUser
    },{
      path:'/user/addRoleToUser/:id',
      component:addRoleToUser
    },{
      path:'/user/editUser/:id',
      component:editUser
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
