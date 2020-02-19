<template>
  <v-row>
    <v-col col="4">
      <LoginForm/>
    </v-col>
  </v-row>
</template>
<script>
  import LoginForm from '../components/LoginForm.vue'
  export default {
    components: {
      LoginForm
    }
  }
</script>