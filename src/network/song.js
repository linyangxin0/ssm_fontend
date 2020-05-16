import {request} from "./request";

export function  songFindAll() {
  return request({
    url:'/song/findAll.do'
  })
}

export function  songSearch(searchText) {
  return request({
    url:'/song/search.do',
    params:{
      searchText
    }
  })
}
