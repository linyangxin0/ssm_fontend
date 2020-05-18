import {request} from "./request";

export function  userFindAll() {
  return request({
    url:'/user/findAll.do'
  })
}

export function  userSearch(searchText) {
  return request({
    url:'/user/findUserByName.do',
    params:{
      searchText
    }
  })
}

//未完成优化，为解决bug
export function  addUser(name,status) {
  return request({
    url:'/user/addUser.do',
    // method:'POST',
    // headers:{'Content-Type':'application/x-www-form-urlencoded'},
    params: {
      name,status
    }
  })
}

export function  delUserById(id) {
  return request({
    url:'/user/delUserById.do',
    params:{
      id
    }
  })
}

export function  findRoleNotIn(id) {
  return request({
    url:'/user/findRoleNotIn.do',
    params:{
      id
    }
  })
}

export function  addRoleToUser(userId,roleId) {
  return request({
    url:'/user/addRoleToUser.do',
    params:{
      userId,roleId
    }
  })
}

export function  findUserById(id) {
  return request({
    url:'/user/findUserById.do',
    params:{
      id
    }
  })
}

export function  updateUser(id,name,status) {
  return request({
    url:'/user/updateUser.do',
    params:{
      id,name,status
    }
  })
}


