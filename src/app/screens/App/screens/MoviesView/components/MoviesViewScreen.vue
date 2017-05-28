<template>
  <article class="c-movies-view-screen u-pb4">
    <div
      class="c-movies-view-screen__cover u-mb4"
      :style="{backgroundImage: `url(${movie.coverImageUrl})`}"
      aria-hidden="true"
    />
    <div class="o-wrapper">
      <!-- MOVIE INFO -->
      <div class="o-media u-mx-auto" style="max-width: 625px;">
        <div class="o-media__left u-mr3">
          <img
            class="c-movies-view-screen__image"
            :src="movie.imageUrl"
            :alt="movie.name"
          />
        </div>
        <div class="o-media__body">
          <h1 class="c-movies-view-screen__title">{{movie.name}}</h1>
          <div class="u-flex">
            <p class="c-movies-view-screen__rating u-mr4">
              <span>{{movie.rating | formatRating}}</span>
              Ratings
            </p>
            <p class="c-movies-view-screen__rating-select">
              <select
                class="u-block"
                :value="movie.rating"
                @input="handleRatingSelectInput"
              >
                <option>{{movie.rating}}</option>
                <option
                  v-for="n in [1,2,3,4,5,6,7,8,9,10]"
                  :value="n"
                >
                    {{n}}
                </option>
              </select>
              Grade now
            </p>
          </div>

          <ul class="u-list-reset">
            <li
              v-for="genre in movie.genre.split(',')"
              class="u-inline-block u-mr2 u-mb2"
            >
              <span class="c-chip">{{genre}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- ACTORS -->
      <h2>The cast</h2>
      <ul class="o-grid u-list-reset o-grid--gutter-3">
        <li
          v-for="actor in movie.actors"
          class="o-grid__item u-12/12 u-6/12@mobile u-3/12@tablet u-2/12@laptop"
        >
          <router-link
            :to="{name: 'ActorsView', params: {id: actor.id, slug: actor.slug}}"
          >
            <img
              class="u-circle u-object-cover"
              :src="actor.imageUrl"
              :alt="actor.fullName"
              :title="actor.fullName"
              height="150"
              width="150"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        movie: 'getMovie'
      })
    },
    mounted () {
      this.validateMovie()
    },
    watch: {
      '$route' () {
        this.validateMovie()
      }
    },
    methods: {
      ...mapActions(['rateMovie']),

      handleRatingSelectInput (event) {
        this.rateMovie({
          movieId: this.movie.id,
          rating: parseFloat(event.target.value)
        })
      },

      validateMovie () {
        if (!this.movie) {
          this.$router.replace('/404')
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
