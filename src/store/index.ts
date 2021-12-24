import { createStore } from "vuex";

const store = {
  count: 1
}

export default createStore({
  state(){
    return store
  },
  mutations: {
    add(state:any, payload){
      state.count += payload
    }
  },
  actions: {

  },
  getters: {

  }
})
