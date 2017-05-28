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
  ToggleDialogPayload,
  ResourceType
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
      rating: 0,
      // generate unique id
      id: rndm(8)
    }

    state[resourceType] = [newRecord, ...state[resourceType]]

    // add record id to relations
    if (resourceType === 'actors') {
      linkResources(state, 'actors', 'movies', newRecord) // eslint-disable-line
    } else if (resourceType === 'movies') {
      linkResources(state, 'movies', 'actors', newRecord) // eslint-disable-line
    }
  },
  // update record from actors or movies
  [UPDATE_RECORD] (
    state: State,
    {resourceType, record}: CreateRecordPayload
  ) {
    const recordIndex = state[resourceType].findIndex(r => r.id === record.id)

    // remove record id from relations
    if (resourceType === 'actors') {
      unlinkResources(state, 'actors', 'movies', record.id) // eslint-disable-line
    } else if (resourceType === 'movies') {
      unlinkResources(state, 'movies', 'actors', record.id) // eslint-disable-line
    }

    state[resourceType].splice(recordIndex, 1, record) // eslint-disable-line

    // add record id to relations
    if (resourceType === 'actors') {
      linkResources(state, 'actors', 'movies', record) // eslint-disable-line
    } else if (resourceType === 'movies') {
      linkResources(state, 'movies', 'actors', record) // eslint-disable-line
    }
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
    if (resourceType === 'actors') {
      unlinkResources(state, 'actors', 'movies', id)
    } else if (resourceType === 'movies') {
      unlinkResources(state, 'movies', 'actors', id)
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
    state.movieInForm = movie
  },
  [UPDATE_ACTOR_IN_FORM] (state: State, actor: UpdateActorInFormPayload) {
    state.actorInForm = actor
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

// delete rtA_id from all rtB
function unlinkResources (state: State, resourceTypeA: ResourceType, resourceTypeB: ResourceType, id: string) {
  state[resourceTypeB].forEach(resource => {
    const resourceTypeBIndex = resource[resourceTypeA].indexOf(id) // eslint-disable-line

    if (resourceTypeBIndex === -1) return

    resource[resourceTypeA].splice(resourceTypeBIndex, 1) // eslint-disable-line
  })
}

// add rtA_id to all rtB that is within rtA[rtB]
function linkResources (state: State, resourceTypeA: ResourceType, resourceTypeB: ResourceType, record: any) {
  state[resourceTypeB].forEach(resource => {
    if (record[resourceTypeB].includes(resource.id)) {
      resource[resourceTypeA].push(record.id) // eslint-disable-line
    }
  })
}
