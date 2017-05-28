<template>
  <main class="o-wrapper c-actors-view-screen u-py4">
    <div class="o-hero">
      <div class="o-hero__body">
        <header class="o-media c-actors-view-screen__heading">
          <div class="o-media__left u-mr3">
            <img
              class="c-actors-view-screen__image"
              :src="actor.imageUrl"
              :alt="actor.fullName"
              :title="actor.fullName"
            />
          </div>
          <div class="o-media__body">
            <h1 class="c-actors-view-screen__title">{{actor.fullName}}</h1>

            <p class="u-mt0 u-mb2">
              <span class="u-black">Gender:</span>
              {{gender}}
            </p>
            <p class="u-mt0 u-mb4">
              <span class="u-black">Birth date:</span>
              {{actor.birthDate | formatDate}}
            </p>

            <button
              class="c-button c-button--primary u-mb2"
              type="button"
              @click="handleEditClick"
            >
              Edit actor
            </button>
            <button
              class="c-button c-button--primary u-mb2"
              type="button"
              @click="handleDeleteClick"
            >
              Delete actor
            </button>
          </div>
        </header>

        <!-- ACTORS -->
        <h2>Movies</h2>
        <ul class="o-grid u-list-reset o-grid--gutter-3">
          <li
            v-for="movie in actor.movies"
            class="o-grid__item u-12/12 u-6/12@mobile u-3/12@tablet u-2/12@laptop"
          >
            <movie-card
              :movie="movie"
            />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        actor: 'getActor'
      }),

      gender () {
        if (this.actor.gender === 1) {
          return 'male'
        }
        if (this.actor.gender === 2) {
          return 'female'
        }

        return 'not known'
      }
    },
    watch: {
      '$route' () {
        this.validateActor()
      }
    },
    mounted () {
      this.validateActor()
    },
    methods: {
      ...mapActions([
        'updateRecord',
        'createRecord',
        'deleteRecord',
        'toggleDialog',
        'updateActorInForm'
      ]),

      validateActor () {
        // redirect 404 if actor doesn't exist
        if (!this.actor) {
          this.$router.replace('/404')
        }
      },

      handleEditClick () {
        this.toggleDialog({dialog: 'actor', value: true})
        this.updateActorInForm({
          ...this.actor,
          movies: this.actor.movies.map(m => m.id)
        })
      },
      handleDeleteClick () {
        this.deleteRecord({
          resourceType: 'actors',
          id: this.actor.id
        })

        this.$router.push({name: 'AppHome'})
      }
    }
  }
</script>

<style lang="scss">
</style>
