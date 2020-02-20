<template>
<v-row>
  <v-col cols="3">
    <MovieForm/>
  </v-col>
  <v-col cols="9">
    <MovieTable :movies ="movies"/>
  </v-col>
</v-row>
</template>
<script>
import MovieForm from '../components/MovieForm.vue'
import MovieTable from '../components/MovieTable.vue'

import { mapActions, mapGetters } from 'vuex'
export default{
  name: 'MovieVue',
  components: {
    MovieForm,
    MovieTable,
  },
  mounted(){
    this.getMovie()
  },
  computed:{
    ...mapGetters(['movies'])
  },
  methods:{
    ...mapActions(['getMovie'])
  }
}
</script>