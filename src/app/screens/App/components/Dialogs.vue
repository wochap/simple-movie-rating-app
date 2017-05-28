<template>
  <div>
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

  export default {
    data () {
      return {
        movieForm: initialMovieForm,
        autorForm: {}
      }
    },
    computed: {
      ...mapGetters({
        isMovieOpen: 'getMovieDialogValue',
        isActorOpen: 'getActorDialogValue',
        actors: 'getActors'
      }),
      movieInForm () {
        return this.$store.state.movieInForm
      },
      actorInForm () {
        return this.$store.state.actorInForm
      },

      movieSubmitBtnLabel () {
        return this.movieInForm ? 'Update movie' : 'Create movie'
      }
    },
    watch: {
      movieInForm (value) {
        if (value) {
          this.fillMovieForm()
        } else {
          this.clearMovieForm()
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

      fillMovieForm () {
        this.movieForm = {...this.movieInForm}
      },
      clearMovieForm () {
        this.movieForm = initialMovieForm
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
      }
    }
  }
</script>

<style lang="css">
</style>
