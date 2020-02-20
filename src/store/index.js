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
    },
    addMovie(state, movie){
      state.movies.push(movie)
    }
  },
  actions: {
    getMovie({ commit }){
      axios.get('http://localhost:3000/movies').then(res =>{
        commit('setMovie', res.data)
      })
    },
    postMovie({ commit }, movie){
      axios.post('http://localhost:3000/movies',movie).then(()=>{
        commit('addMovie',movie)
      })
    }
  },
  getters:{
    movies: state => state.movies
  },
  modules: {

  }
})
