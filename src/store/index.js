import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviews: [],
    reviewdetais: [],
    status: false,
  },
  getters: {
    reviews: state => {
      return state.reviews;
    },
    reviewdetais: state => {
      return state.reviewdetais;
    },
    getStatus: state =>{
      return state.status;
    }
  },
  mutations: {
    setReviews(state, payload) {
      state.reviews = payload
    },
    setreviewdetais(state, payload) {
      state.reviewdetais = payload
    },
    loginInfo(state, payload) {
      state.status = payload
    },
  },
  actions: {
    setReviews(contex, payload) {
      contex.commit('setReviews', payload)
    },
    setreviewdetais(contex, payload) {
      contex.commit('setreviewdetais', payload)
    },
    loginInfo(contex, payload) {
      contex.commit('loginInfo', payload)
    },
  },
  modules: {
  }
})
