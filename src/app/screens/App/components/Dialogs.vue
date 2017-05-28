<template>
  <div>
    <!-- MOVIES -->
    <vue-dialog
      :value="isMovieOpen"
      @input="handleMovieDialogInput"
    >
      <form @submit.prevent="handleMovieFormSubmit">
        <form-control-text
          label="Name"
          placeholder="Titanic"
          v-model="movieForm.name"
        />
        <form-control-text
          label="Release year"
          placeholder="1994"
          v-model.number="movieForm.releaseYear"
        />
        <form-control-text
          label="Gross income"
          placeholder="99999"
          v-model.number="movieForm.grossIncome"
        />
        <form-field label="Actors" id="actors">
          <div class="c-form-control c-form-control--select">
            <select
              id="actors"
              v-model="movieForm.actors"
              multiple
              class="c-form-control__input"
            >
              <option
                v-for="actor in actors"
                :value="actor.id"
              >
                {{actor.fullName}}
              </option>
            </select>
            <i class="c-form-control__icon u-hide@laptop">▼</i>
          </div>
        </form-field>
        <form-control-text
          label="Director Name"
          placeholder="James Cameron"
          v-model="movieForm.directorName"
        />
        <form-control-text
          label="Genre"
          placeholder="Multiple, comma separated"
          v-model="movieForm.genre"
        />
        <form-control-text
          label="Image url"
          placeholder="https://..."
          v-model="movieForm.imageUrl"
        />
        <form-control-text
          label="Cover image url"
          placeholder="https://..."
          v-model="movieForm.coverImageUrl"
        />
        <div class="u-right-align">
          <button type="submit" class="o-button c-button c-button--primary u-mt2">{{movieSubmitBtnLabel}}</button>
        </div>
      </form>
    </vue-dialog>

    <!-- ACTORS -->
    <vue-dialog
      :value="isActorOpen"
      @input="handleActorDialogInput"
    >
      <form @submit.prevent="handleActorFormSubmit">
        <form-control-text
          label="First name"
          placeholder="Leonardo"
          v-model="actorForm.firstName"
        />
        <form-control-text
          label="Last name"
          placeholder="DiCaprio"
          v-model.number="actorForm.lastName"
        />
        <form-field label="Gender">
          <label class="c-form-control c-form-control--radio">
            <input
              class="c-form-control__input"
              name="radio"
              type="radio"
              value="1"
              v-model="actorForm.gender"
            />
            <span class="c-form-control__label">Male</span>
          </label>
          <label class="c-form-control c-form-control--radio">
            <input
              class="c-form-control__input"
              name="radio"
              type="radio"
              value="2"
              v-model="actorForm.gender"
            />
            <span class="c-form-control__label">Female</span>
          </label>
        </form-field>
        <form-field label="Birth date" id="birthDate">
          <div class="c-form-control c-form-control--select">
            <input
              class="c-form-control__input"
              type="date"
              placeholder="Select his birth date"
              id="birthDate"
              v-model="actorForm.birthDate"
            />
          </div>
        </form-field>
        <form-field label="Movies" id="movies">
          <div class="c-form-control c-form-control--select">
            <select
              id="movies"
              v-model="actorForm.movies"
              multiple
              class="c-form-control__input"
            >
              <option
                v-for="movie in movies"
                :value="movie.id"
              >
                {{movie.name}}
              </option>
            </select>
            <i class="c-form-control__icon u-hide@laptop">▼</i>
          </div>
        </form-field>
        <form-control-text
          label="Image url"
          placeholder="https://..."
          v-model="actorForm.imageUrl"
        />
        <div class="u-right-align">
          <button type="submit" class="o-button c-button c-button--primary u-mt2">{{actorSubmitBtnLabel}}</button>
        </div>
      </form>
    </vue-dialog>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  const initialMovieForm = {
    name: '',
    releaseYear: '',
    grossIncome: '',
    actors: [],
    directorName: '',
    rating: 0,
    genre: '',
    imageUrl: '',
    coverImageUrl: ''
  }

  const initialActorForm = {
    firstName: '',
    lastName: '',
    gender: 1,
    birthDate: new Date(),
    movies: [],
    imageUrl: ''
  }

  export default {
    data () {
      return {
        movieForm: initialMovieForm,
        actorForm: initialActorForm
      }
    },
    computed: {
      ...mapGetters({
        isMovieOpen: 'getMovieDialogValue',
        isActorOpen: 'getActorDialogValue',
        actors: 'getActors',
        movies: 'getMovies'
      }),
      movieInForm () {
        return this.$store.state.movieInForm
      },
      actorInForm () {
        return this.$store.state.actorInForm
      },

      movieSubmitBtnLabel () {
        return this.movieInForm ? 'Update movie' : 'Create movie'
      },
      actorSubmitBtnLabel () {
        return this.actorInForm ? 'Update actor' : 'Create actor'
      }
    },
    watch: {
      movieInForm (value) {
        if (value) {
          this.fillMovieForm()
        } else {
          this.clearMovieForm()
        }
      },
      actorInForm (value) {
        if (value) {
          this.fillActorForm()
        } else {
          this.clearActorForm()
        }
      }
    },
    methods: {
      ...mapActions([
        'toggleDialog',
        'createRecord',
        'updateRecord'
      ]),

      handleMovieDialogInput (value) {
        this.toggleDialog({dialog: 'movie', value})
      },
      handleActorDialogInput (value) {
        this.toggleDialog({dialog: 'actor', value})
      },

      fillMovieForm () {
        this.movieForm = {...this.movieInForm}
      },
      clearMovieForm () {
        this.movieForm = initialMovieForm
      },

      fillActorForm () {
        this.actorForm = {
          ...this.actorInForm,
          birthDate: formatDateForInput(this.actorInForm.birthDate)
        }
      },
      clearActorForm () {
        this.actorForm = initialActorForm
      },

      handleMovieFormSubmit (event) {
        // TODO: validate movieForm

        if (this.movieInForm) {
          // update movie
          this.updateRecord({
            resourceType: 'movies',
            record: {
              ...this.movieInForm,
              ...this.movieForm
            }
          })
        } else {
          // create movie
          this.createRecord({
            resourceType: 'movies',
            record: this.movieForm
          })
        }

        // close dialog
        this.handleMovieDialogInput(false)

        // go to movie screen
        // this.$router.push({name: 'MovieScreen', {
        //   id:
        // }})
      },
      handleActorFormSubmit (event) {
        // TODO: validate actorForm

        if (this.actorInForm) {
          // update actor
          this.updateRecord({
            resourceType: 'actors',
            record: {
              ...this.actorInForm,
              ...this.actorForm
            }
          })
        } else {
          // create actor
          this.createRecord({
            resourceType: 'actors',
            record: this.actorForm
          })
        }

        // close dialog
        this.handleActorDialogInput(false)

        // go to movie screen
        // this.$router.push({name: 'MovieScreen', {
        //   id:
        // }})
      }
    }
  }

  function formatDateForInput (date) {
    return (new Date(date)).toISOString().substring(0, 10)
  }
</script>

<style lang="css">
</style>
