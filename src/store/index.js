import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    LOGOUT(state) {
      state.user = null
      localStorage.removeItem('user')
    }
  },
  actions: {
    register({commit}, credentials) {
      return EventService.signUp(credentials).then(({data}) => {
        console.log(data)
        commit('SET_USER_DATA', data)
      })
    },
    logout({commit}) {
      commit('LOGOUT')
    }
  },
  modules: {
  }
})
