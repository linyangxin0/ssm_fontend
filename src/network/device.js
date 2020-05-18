import {request} from "./request";

export function  deviceFindAll() {
  return request({
    url:'/device/findAll.do'
  })
}


export function  deviceSearch(searchText) {
  return request({
    url:'/device/findDeviceByName.do',
    params:{
      searchText
    }
  })
}

export function  addDevice(addId,addName,addType,addStatus) {
  return request({
    url:'/device/addDevice.do',
    params:{
      addId,addName,addType,addStatus
    }
  })
}

export function  delDevice(id) {
  return request({
    url:'/device/delDevice.do',
    params:{
      id
    }
  })
}


export function  findDeviceById(id) {
  return request({
    url:'/device/findDeviceById.do',
    params:{
      id
    }
  })
}

export function  editDevice(addId,addName,addType,addStatus) {
  return request({
    url:'/device/editDevice.do',
    params:{
      addId,addName,addType,addStatus
    }
  })
}
