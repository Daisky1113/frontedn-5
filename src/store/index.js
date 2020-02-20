import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovie(state, movies){
      state.movies = movies
    }
  },
  actions: {
    getMovie({ commit }){
      axios.get('http://localhost:3000/movies').then(res =>{
        commit('setMovie', res.data)
      })
    }
  },
  getters:{
    movies: state => state.movies
  },
  modules: {

  }
})
