import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:''
  },
  mutations: {
    addUserName(state,payload){
      state.userName=payload
      console.log(state.userName)
    },
    removeUserName(state){
      state.userName=''
    }
  },
  actions: {
  },
  modules: {
  }
})
