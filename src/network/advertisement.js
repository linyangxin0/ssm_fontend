import {request} from "./request";

export function  advertisementFindAll() {
  return request({
    url:'/advertisement/findAll.do'
  })
}


export function  advertisementSearch(searchText) {
  return request({
    url:'/advertisement/findAdvertisementByName.do',
    params:{
      searchText
    }
  })
}
