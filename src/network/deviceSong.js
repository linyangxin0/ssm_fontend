import {request} from "./request";

export function  deviceFindAll() {
  return request({
    url:'/device/findAll.do'
  })
}

export function  findSongListNotIn(deviceId) {
  return request({
    url:'/device/findSongListNotIn.do',
    params:{
      deviceId
    }
  })
}

export function  addSongList(songListId,deviceId) {
  return request({
    url:'/device/addSongList.do',
    params:{
      songListId,deviceId
    }
  })
}

export function  findSongListIn(deviceId) {
  return request({
    url:'/device/findSongListIn.do',
    params:{
      deviceId
    }
  })
}

export function  cancelSongList(songListId,deviceId) {
  return request({
    url:'/device/cancelSongList.do',
    params:{
      songListId,deviceId
    }
  })
}



