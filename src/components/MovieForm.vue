
<template>
  <v-card
    class="mx-auto pb-5 overflow-y-auto"
    max-width="300"
    max-height ="100vh"
    tile
    flat
  >
  <v-card-title class=align-baseline>Add Movie</v-card-title>
  <v-card-text class="pb-0">
    <v-text-field
      v-model="movieDetail.name"
      outlined
      dense
      chips
      small-chips
      label="Name"
    ></v-text-field>
    <v-text-field
      v-model="movieDetail.director"
      outlined
      dense
      chips
      small-chips
      label="Director"
    ></v-text-field>
    <v-select
      v-model="movieDetail.rating"
      :items="[1,2,3,4,5]"
      label="Rating"
      dense
      outlined
    ></v-select>    
    <v-card-actions class="justify-end">
      <v-btn
        text
        color="#90a4ae"
        @click="clear"
      >
      Cancel
      </v-btn>
      <v-btn
        text
        color="teal accent-4"
        @click="add"
      >
      Add Movie
      </v-btn>
    </v-card-actions>
  </v-card-text>
  </v-card>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    components: {
      
    },
    data: () => ({
      movieDetail: {
        name: '',
        director: '',
        rating: ''
      }
    }),
    methods: {
      clear(){
        this.movieDetail.name = ''
      },
      add(){
        this.postMovie({
          name: this.movieDetail.name,
          director: this.movieDetail.director,
          rating: this.movieDetail.rating
        })
        console.log(this.movieDetail)
      },
      ...mapActions(['postMovie'])
    }
  }
</script>