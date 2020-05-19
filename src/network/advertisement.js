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

export function  findDeviceNotIn(id) {
  return request({
    url:'/advertisement/findDeviceNotIn.do',
    params:{
      id
    }
  })
}

export function  addAdvertisementToDevice(advertisementId,deviceId) {
  return request({
    url:'/advertisement/addAdvertisementToDevice.do',
    params:{
      advertisementId,deviceId
    }
  })
}

export function  findAdvertisementById(id) {
  return request({
    url:'/advertisement/findAdvertisementById.do',
    params:{
      id
    }
  })
}


export function  editAdvertisement(id,context,getDate) {
  return request({
    url:'/advertisement/editAdvertisement.do',
    params:{
      id,context,getDate
    }
  })
}
