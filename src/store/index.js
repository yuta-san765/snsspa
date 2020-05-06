import Vue from 'vue';
import Vuex from 'vuex';
import {apiClientWithToken, EventService} from '../services/EventService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      state.user = data;
      localStorage.setItem('user', JSON.stringify(data));
      apiClientWithToken.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`
    },
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  actions: {
    register({ commit }, credentials) {
      return EventService.signUp(credentials).then(({ data }) => {
        console.log(data);
        commit('SET_USER_DATA', data);
      });
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
    signIn({commit}, credentials) {
      return EventService.signIn(credentials).then(({data}) => {
        console.log(data)
        commit('SET_USER_DATA', data)
      })
    },
  },
  modules: {
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
});
