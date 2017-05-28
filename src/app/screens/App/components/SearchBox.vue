<template>
  <div
    ref="searchBox"
    @click.stop="clearSearchString"
    class="c-search-box"
  >
    <select
      class="c-search-box__select"
      slot="prepend"
      :value="searchType"
      @input="handleSearchTypeInput"
    >
      <option value="MOVIES">Movies</option>
      <option value="ACTORS">Actors</option>
    </select>

    <input
      class="c-search-box__input"
      @input="handleAutocompleteInput"
      :value="searchQuery"
      type="search"
      :placeholder="searchInputPlaceholder"
    />

    <ul v-if="searchQuery.length > 0" class="c-search-box__results u-list-reset">
      <p
        v-if="searchBoxResult.length === 0"
        class="u-m0 u-py3 u-center"
      >
        There's no result for "{{searchQuery}}". Try something else :)
      </p>

      <li
        v-for="result in searchBoxResult"
        :key="result.id"
        class="c-search-box__result"
        @click="navigateTo(result)"
      >
        <result-label
          v-bind="result"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import slugify from 'slugify'

  export default {
    computed: {
      ...mapGetters({
        searchQuery: 'getSearchQuery',
        searchType: 'getSearchType',
        searchBoxResult: 'getSearchBoxResult'
      }),

      searchInputPlaceholder () {
        return this.searchType === 'MOVIES'
          ? 'Titanic, The wolf of wall street, etc'
          : 'Leonardo DiCaprio, Billy Zane, etc'
      }
    },
    mounted () {
      document.addEventListener('click', this.clearSearchString)
      document.addEventListener('keyup', (event) => {
        if (event.keyCode === 27) {
          this.clearSearchString()
        }
      })
    },
    beforeDestroy () {

    },
    methods: {
      ...mapActions([
        'updateSearchQuery',
        'updateSearchType'
      ]),

      handleAutocompleteInput (event) {
        this.updateSearchQuery(event.target.value)
      },
      handleSearchTypeInput (event) {
        this.updateSearchType(event.target.value)
      },
      navigateTo (result) {
        const routeName = this.searchType === 'MOVIES' ? 'MoviesView' : 'ActorsView'

        this.$router.push({
          name: routeName,
          params: {
            slug: slugify(result.title.toLowerCase()),
            id: result.id
          }
        })

        this.updateSearchQuery('')
      },

      clearSearchString () {
        if (this.searchQuery.length > 0) {
          this.updateSearchQuery('')
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
