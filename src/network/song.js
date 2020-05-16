import {request} from "./request";

export function  songFindAll() {
  return request({
    url:'/song/findAll.do'
  })
}
