<template>
  <div class="o-wrapper u-py4">
    <h2 class="u-hide">Movies</h2>
    <ul class="o-grid o-grid--gutter-3 u-list-reset o-grid--stretch">
      <li
        class="o-grid__item u-12/12 u-6/12@mobile u-4/12@tablet u-2/12@laptop"
      >
        <movie-card-placeholder />
      </li>
      <li
        v-for="movie in movies"
        :key="movie.id"
        class="o-grid__item u-12/12 u-6/12@mobile u-4/12@tablet u-2/12@laptop"
      >
        <movie-card :movie="movie" with-delete with-update />
      </li>
    </ul>
  </div>
</template>

<script>
  import MovieCardPlaceholder from './MovieCardPlaceholder'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      MovieCardPlaceholder
    },
    computed: {
      ...mapGetters({
        movies: 'getMoviesByDateDesc'
      })
    }
  }
</script>

<style lang="scss">
</style>
