import {request} from "./request";

export function  songListFindAll() {
  return request({
    url:'/songList/findAll.do'
  })
}

export function  findSongListsSong(id) {
  return request({
    url:'/songList/findSongListsSong.do',
    params:{
      id
    }
  })
}

export function  delSongFromSongList(songId,songListId) {
  return request({
    url:'/songList/delSongFromSongList.do',
    params:{
      songId,
      songListId
    }
  })
}

export function  delSongList(id) {
  return request({
    url:'/songList/delSongList.do',
    params:{
      id
    }
  })
}


export function  findSongNotIn(id) {
  return request({
    url:'/songList/findSongNotIn.do',
    params:{
      id
    }
  })
}

export function  addSongToSongList(songId,songListId) {
  return request({
    url:'/songList/addSongToSongList.do',
    params:{
      songId,songListId
    }
  })
}


export function  findSongListByName(searchText) {
  return request({
    url:'/songList/findSongListByName.do',
    params:{
      searchText
    }
  })
}


export function  addSongList(name) {
  return request({
    url:'/songList/addSongList.do',
    params:{
      name
    }
  })
}




