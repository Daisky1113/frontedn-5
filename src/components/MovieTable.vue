<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">name</th>
          <th class="text-left">director</th>
          <th class="text-left">rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td>{{ movie.name }}</td>
          <td>{{ movie.director }}</td>
          <td>{{ movie.rating }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    props: {
      movies: Array
    },
  }
</script>