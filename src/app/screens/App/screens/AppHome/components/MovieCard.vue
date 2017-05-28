<template>
  <div class="c-movie-card">
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
  export default {
    props: {
      id: String,
      imageUrl: String,
      name: String,
      slug: String,
      rating: Number
    }
  }
</script>

<style lang="css">
</style>
