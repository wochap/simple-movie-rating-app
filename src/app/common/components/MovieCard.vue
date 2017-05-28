<template>
  <div class="c-movie-card">
    <button
      v-if="withDelete"
      class="o-button c-movie-card__delete-button"
      @click="onDeleteClick"
      title="Delete movie"
      aria-label="Delete movie"
    >
      <i class="u-icon">delete</i>
    </button>
    <button
      v-if="withUpdate"
      class="o-button c-movie-card__update-button"
      @click="onUpdateClick"
      title="Update movie"
      aria-label="Update movie"
    >
      <i class="u-icon">pencil</i>
    </button>

    <router-link
      :to="movieRoute"
      class="c-movie-card__image-link"
      :title="movie.name"
    >
      <img :src="movie.imageUrl" :alt="movie.name" />
    </router-link>

    <h3 class="c-movie-card__name">
      <router-link
        :to="movieRoute"
      >
        {{movie.name}}
      </router-link>
    </h3>
    <p class="c-movie-card__rating">
      Rating: <span>{{movie.rating | formatRating}}</span>
    </p>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      movie: Object,
      withDelete: {
        type: Boolean,
        default: false
      },
      withUpdate: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      movieRoute () {
        const {id, slug} = this.movie

        return {
          name: 'MoviesView',
          params: {id, slug}
        }
      }
    },
    methods: {
      ...mapActions([
        'deleteRecord',
        'toggleDialog',
        'updateMovieInForm'
      ]),

      onDeleteClick () {
        this.deleteRecord({
          resourceType: 'movies',
          id: this.movie.id
        })
      },
      onUpdateClick () {
        this.toggleDialog({dialog: 'movie', value: true})
        this.updateMovieInForm(this.movie)
      }
    }
  }
</script>

<style lang="css">
</style>
