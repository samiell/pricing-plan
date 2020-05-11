<template>
  <v-alert
    light
    dismissible
    :icon="icon"
    :value="loading"
    colored-border
    :color="color"
    prominent
    border="left"
    class="text-left"
    close-label="Close Alert"
    elevation="8"
    transition="fade"
  >
    <v-progress-linear 
      absolute 
      bottom 
      :active="loading"
      :indeterminate="loading"
      :color="color"
    >
    </v-progress-linear>
    {{text}}
  </v-alert>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'green darken-3'
    },
    icon: {
      type: String,
      default: 'mdi-check-circle'
    },
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: "Loading ..."
    }
  },

}
</script>

<style>

</style>
