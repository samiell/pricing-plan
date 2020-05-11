<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <v-img
          alt="Nocturnals Inc"
          class="shrink mr-2"
          contain 
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <span class="headline font-weight-bold">Nocturnal Inc</span>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Index';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
