import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countr:1000
  },
  mutations: {
    add(state,play){
		const {n,text}=play
      state.countr+=text
	  console.log(play);
    },
	aoo(state,a){
		 state.countr+=a
	}
  },
  actions: {
	  acc(context,a){
		  setTimeout(()=>{
			  context.commit('aoo',a)
		  },3000)
	  }
  },
  modules: {
  }
})
