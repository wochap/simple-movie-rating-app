<template>
  <button
    class="o-button c-movie-card-placeholder"
    aria-label="Create movie"
    title="Create movie"
    @click="openMovieDialog"
  >
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <path d="M64 36.51h-27.49v27.49h-9.020v-27.49h-27.49v-9.020h27.49v-27.49h9.020v27.49h27.49v9.020z"></path>
    </svg>
  </button>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    methods: {
      ...mapActions(['toggleDialog', 'updateMovieInForm']),

      openMovieDialog () {
        this.toggleDialog({dialog: 'movie', value: true})
        this.updateMovieInForm(null)
      }
    }
  }
</script>

<style lang="css">
</style>
