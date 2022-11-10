import { createStore } from 'vuex'

export default createStore({
  state: {
    viewsColor:false
  },
  getters: {
  },
  mutations: {
    changeViewsColor(state,num){
      if(num==0){
        state.viewsColor = false
      }else{
        state.viewsColor = true
      }
    },
    // getBoolean(state,num){
    //   state.viewsColor = num
    // }
  },
  actions: {
  
  },
  modules: {
  }
})
