<template>
  <div class="c-movie-card">
    <button
      v-if="withDelete"
      class="o-button c-movie-card__delete-button"
      @click="onDelete"
      title="Delete movie"
      aria-label="Delete movie"
    >
      x
    </button>

    <router-link
      :to="{name: 'MoviesView', params: {id, slug}}"
      class="c-movie-card__image-link"
      :title="name"
    >
      <img :src="imageUrl" :alt="name" />
    </router-link>

    <h3 class="c-movie-card__name">
      <router-link
        :to="{name: 'MoviesView', params: {id, slug}}"
      >
        {{name}}
      </router-link>
    </h3>
    <p class="c-movie-card__rating">
      Rating: <span>{{rating | formatRating}}</span>
    </p>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      id: String,
      imageUrl: String,
      name: String,
      slug: String,
      rating: Number,
      withDelete: Boolean
    },
    methods: {
      ...mapActions(['deleteRecord']),

      onDelete () {
        this.deleteRecord({
          resourceType: 'movies',
          id: this.id
        })
      }
    }
  }
</script>

<style lang="css">
</style>
