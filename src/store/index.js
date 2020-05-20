import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'',
    isAdmin:false
  },
  mutations: {
    addUserName(state,payload){
      state.userName=payload
    },
    removeUserName(state){
      state.userName=''
    },
    changeIsAdmin(state,payload){
      state.isAdmin=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
