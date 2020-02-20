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
    getMovie(){
      axios.get('http://localhost:3000/movies').then(res =>{
        console.log(res.data)
      })
    }
  },
  modules: {
  }
})
