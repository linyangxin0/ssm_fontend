import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home');
const advertisement=()=>import('../views/advertisement/advertisement');
const device=()=>import('../views/device/device');
const deviceSong=()=>import('../views/deviceSong/deviceSong');
const role=()=>import('../views/role/role');

const song=()=>import('../views/song/song');
const addSong=()=>import('../views/song/childViews/addSong');
const editSong=()=>import('../views/song/childViews/editSong');

const songList=()=>import('../views/songList/songList');
const songListShow=()=>import('../views/songList/childViews/songListShow');


const user=()=>import('../views/user/user');



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
      path:'/device',
      component:device
    },{
      path:'/deviceSong' ,
      component:deviceSong
    },{
      path:'/role' ,
      component:role
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
      path:'/user',
      component:user
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
