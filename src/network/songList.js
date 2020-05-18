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



