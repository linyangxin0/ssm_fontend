import {request} from "./request";

export function  roleFindAll() {
  return request({
    url:'/role/findAll.do'
  })
}


export function  findUserByRoleId(id) {
  return request({
    url:'/role/findUserByRoleId.do',
    params:{
      id
    }
  })
}

export function  delUserFromRole(userId,roleId) {
  return request({
    url:'/role/delUserFromRole.do',
    params:{
      userId,roleId
    }
  })
}
