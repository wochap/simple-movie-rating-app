/* @flow */

import type {
  Actor,
  Movie,
  OptimisticActors,
  OptimisticMovies,
  State,
  Search
} from './flowTypes'

/**
 * MUTATIONS TYPES
 */
const SET_ACTORS = 'SET_ACTORS'
const SET_ACTORS_SUCCESS = 'SET_ACTORS_SUCCESS'
const SET_ACTORS_REJECTED = 'SET_ACTORS_REJECTED'
const CREATE_ACTOR = 'CREATE_ACTOR'
const CREATE_ACTOR_SUCCESS = 'CREATE_ACTOR_SUCCESS'
const CREATE_ACTOR_REJECTED = 'CREATE_ACTOR_REJECTED'
const UPDATE_ACTOR = 'UPDATE_ACTOR'
const UPDATE_ACTOR_SUCCESS = 'UPDATE_ACTOR_SUCCESS'
const UPDATE_ACTOR_REJECTED = 'UPDATE_ACTOR_REJECTED'
const DELETE_ACTOR = 'DELETE_ACTOR'
const DELETE_ACTOR_SUCCESS = 'DELETE_ACTOR_SUCCESS'
const DELETE_ACTOR_REJECTED = 'DELETE_ACTOR_REJECTED'

const SET_MOVIES = 'SET_MOVIES'
const SET_MOVIES_SUCCESS = 'SET_MOVIES_SUCCESS'
const SET_MOVIES_REJECTED = 'SET_MOVIES_REJECTED'
const CREATE_MOVIE = 'CREATE_MOVIE'
const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS'
const CREATE_MOVIE_REJECTED = 'CREATE_MOVIE_REJECTED'
const UPDATE_MOVIE = 'UPDATE_MOVIE'
const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS'
const UPDATE_MOVIE_REJECTED = 'UPDATE_MOVIE_REJECTED'
const DELETE_MOVIE = 'DELETE_MOVIE'
const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS'
const DELETE_MOVIE_REJECTED = 'DELETE_MOVIE_REJECTED'

const UPDATE_QUERY = 'UPDATE_QUERY'

/**
 * STATE
 */
const defaultOptimisticState = {
  error: null,
  isFulfilled: false,
  isPending: false,
  isCreating: false,
  isUpdating: false
}

const state: State = {
  search: {
    query: '',
    type: 'MOVIES'
  },
  actors: {
    data: [],
    state: defaultOptimisticState
  },
  movies: {
    data: [],
    state: defaultOptimisticState
  }
}

/**
 * GETTERS
 */
const getters = {
  getFilteredActors ({actors, search}: {actors: OptimisticActors, search: Search}) {
    if (search.type === 'ACTORS' && search.query.length > 0) {
      return actors.data
        .filter(a => (`${a.data.firstName} ${a.data.lastName}`).includes(search.query))
        .slice(0, 5)
    }

    return []
  },
  getFilteredMovies ({movies, search}: {movies: OptimisticMovies, search: Search}) {
    if (search.type === 'MOVIES' && search.query.length > 0) {
      return movies.data
        .filter(m => m.data.name.includes(search.query))
        .slice(0, 5)
    }

    return []
  },

  getActors ({actors}: {actors: OptimisticActors}) {
    return actors.data
  },
  getMovies ({movies}: {movies: OptimisticMovies}) {
    return movies.data
  },

  getActor ({actors, movies}: {actors: OptimisticActors, movies: OptimisticMovies}, id: number) {
    const actor = actors.data.find(actor => actor.data.id === id)

    if (!actor) return null

    const actorMovies = actor.data.movies.reduce((movieList, movieId) => {
      const movie = movies.data.find(m => m.data.id === movieId)

      return [...movieList, movie]
    }, [])

    return {
      ...actor,
      actorMovies
    }
  },
  getMovie ({actors, movies}: {actors: OptimisticActors, movies: OptimisticMovies}, id: number) {
    const movie = movies.data.find(movie => movie.data.id === id)

    if (!movie) return null

    const movieActors = movie.data.actors.reduce((actorList, actorId) => {
      const actor = actors.data.find(a => a.data.id === actorId)

      return [...actorList, actor]
    }, [])

    return {
      ...movie,
      movieActors
    }
  }
}

/**
 * ACTIONS
 */
const actions = {
  // updateFoo ({commit, dispatch, state, rootState}, payload) {
  async loadActors ({commit}: any) {
    const actors = await localForage.getItem(ACTORS_KEY)
    debugger
    commit(SET_ACTORS, actors)
  }
}

const mutations = {
  [SET_ACTORS] (state: State) {
    state.actors.state.isPending = true
  },
  [SET_ACTORS_SUCCESS] (state: State, actors: Array<Actor>) {
    state.actors.data = actors
    state.actors.state.isPending = false
    state.actors.state.isFulfilled = true
  },
  [SET_ACTORS_REJECTED] (state: State, error: Error) {
    state.actors.state.isPending = false
    state.actors.state.error = error
  },
  [CREATE_ACTOR] (state: State) {
    state.actors.state.isCreating = true
  },
  [CREATE_ACTOR_SUCCESS] (state: State) {

  },
  [CREATE_ACTOR_REJECTED] (state: State) {

  },
  [UPDATE_ACTOR] (state: State) {
  },
  [UPDATE_ACTOR_SUCCESS] (state: State, actor: Actor) {
    const record = state.actors.data.find(a => a.id === actor.id)
    const actorIndex = state.actors.data.indexOf(record)
    state.actors.state.splice(actorIndex, 1, {
      data: actor,
      state: {
        ...record.state,
        isUpdating: false
      }
    })
  },
  [UPDATE_ACTOR_REJECTED] (state: State) {

  },
  [DELETE_ACTOR] (state: State) {

  },
  [DELETE_ACTOR_SUCCESS] (state: State) {

  },
  [DELETE_ACTOR_REJECTED] (state: State) {

  },

  [SET_MOVIES] (state: State) {

  },
  [SET_MOVIES_SUCCESS] (state: State) {

  },
  [SET_MOVIES_REJECTED] (state: State) {

  },
  [CREATE_MOVIE] (state: State) {

  },
  [CREATE_MOVIE_SUCCESS] (state: State) {

  },
  [CREATE_MOVIE_REJECTED] (state: State) {

  },
  [UPDATE_MOVIE] (state: State) {

  },
  [UPDATE_MOVIE_SUCCESS] (state: State) {

  },
  [UPDATE_MOVIE_REJECTED] (state: State) {

  },
  [DELETE_MOVIE] (state: State) {

  },
  [DELETE_MOVIE_SUCCESS] (state: State) {

  },
  [DELETE_MOVIE_REJECTED] (state: State) {

  },

  [UPDATE_QUERY] (state: State) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
