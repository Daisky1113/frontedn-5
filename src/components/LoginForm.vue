<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-app-bar
    color="deep-purple accent-4"
    dense
    dark
  >
    <v-toolbar-title>Login</v-toolbar-title>
  </v-app-bar>
    <v-card-text>
      <v-text-field
        label="Outlined"
        placeholder="mail"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="password"
        placeholder="password"
        outlined
        dense
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="pass word"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>   
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        show1: false,
        email: '',
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
      }
    },
  }
</script>