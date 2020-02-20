<template>
<v-row>
  <v-col cols="3">
    <MovieForm/>
  </v-col>
  <v-col cols="9">
    <MovieTable/>
  </v-col>
</v-row>
</template>
<script>
import MovieForm from '../components/MovieForm.vue'
import MovieTable from '../components/MovieTable.vue'
export default{
  name: 'MovieVue',
  components: {
    MovieForm,
    MovieTable,
  }
}
</script>