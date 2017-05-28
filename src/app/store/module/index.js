/* @flow */

import rndm from 'rndm'
import {ACTORS_KEY, MOVIES_KEY} from 'app/config/constants' // eslint-disable-line
import {
  CREATE_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD,
  UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_TYPE,
  RATE_MOVIE,
  UPDATE_MOVIE_IN_FORM,
  UPDATE_ACTOR_IN_FORM,
  TOGGLE_DIALOG
} from './mutationTypes'
import getters from './getters'
import actions from './actions'
import {fakeMovies, fakeActors} from './fakeData'

import type {
  State,
  CreateRecordPayload,
  DeleteRecordPayload,
  SearchType,
  RateMoviePayload,
  UpdateMovieInFormPayload,
  UpdateActorInFormPayload,
  ToggleDialogPayload
} from './flowTypes'

/**
 * STATE
 */
const state: State = {
  search: {
    query: '',
    type: 'MOVIES'
  },
  actors: JSON.parse(localStorage.getItem(ACTORS_KEY) || 'null') || fakeActors,
  movies: JSON.parse(localStorage.getItem(MOVIES_KEY) || 'null') || fakeMovies,

  movieInForm: null,
  actorInForm: null,

  dialogs: {
    movie: false,
    actor: false
  }
}

const mutations = {
  // add new record to actors or movies
  [CREATE_RECORD] (
    state: State,
    {resourceType, record}: CreateRecordPayload
  ) {
    const newRecord = {
      ...record,
      // generate unique id
      id: rndm(8)
    }

    state[resourceType] = [newRecord, ...state[resourceType]]
  },
  // update record from actors or movies
  [UPDATE_RECORD] (
    state: State,
    {resourceType, record}: CreateRecordPayload
  ) {
    const recordIndex = state[resourceType].findIndex(r => r.id === record.id)

    state[resourceType].splice(recordIndex, 1, record) // eslint-disable-line
  },
  // delete record from actors or movies
  [DELETE_RECORD] (
    state: State,
    {resourceType, id}: DeleteRecordPayload
  ) {
    const recordIndex = state[resourceType].findIndex(r => r.id === id)

    // delete record
    state[resourceType].splice(recordIndex, 1)

    // remove record id from relations
    // TODO: refactor DRY
    if (resourceType === 'actors') {
      state.movies.forEach(movie => {
        const actorIndex = movie.actors.findIndex(_id => _id === id)

        movie.actors.splice(actorIndex, 1)
      })
    } else if (resourceType === 'movies') {
      state.actors.forEach(actor => {
        const movieIndex = actor.movies.findIndex(_id => _id === id)

        actor.movies.splice(movieIndex, 1)
      })
    }
  },

  [UPDATE_SEARCH_QUERY] (state: State, query: string) {
    state.search.query = query
  },
  [UPDATE_SEARCH_TYPE] (state: State, type: SearchType) {
    state.search.type = type
  },

  [RATE_MOVIE] (state: State, {movieId, rating}: RateMoviePayload) {
    const record = state.movies.find(m => m.id === movieId)

    if (!record) return

    const recordIndex = state.movies.indexOf(record)

    state.movies.splice(recordIndex, 1, {
      ...record,
      rating
    })
  },

  [UPDATE_MOVIE_IN_FORM] (state: State, movie: UpdateMovieInFormPayload) {
    this.movieInForm = movie
  },
  [UPDATE_ACTOR_IN_FORM] (state: State, actor: UpdateActorInFormPayload) {
    this.actorInForm = actor
  },

  [TOGGLE_DIALOG] (state: State, {dialog, value}: ToggleDialogPayload) {
    state.dialogs[dialog] = value // eslint-disable-line
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
