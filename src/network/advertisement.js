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


export function  addAdvertisement(context,getDate) {
  return request({
    url:'/advertisement/addAdvertisement.do',
    params:{
      context,getDate
    }
  })
}

export function  delAdvertisementById(id) {
  return request({
    url:'/advertisement/delAdvertisementById.do',
    params:{
      id
    }
  })
}
