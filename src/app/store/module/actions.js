// @flow

import {
  CREATE_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD,
  UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_TYPE,
  RATE_MOVIE
} from './mutationTypes'

import type {
  CreateRecordPayload,
  DeleteRecordPayload,
  SearchType,
  RateMoviePayload
} from './flowTypes'

export default {
  createRecord (
    {commit}: any,
    createRecordPayload: CreateRecordPayload
  ) {
    commit(CREATE_RECORD, createRecordPayload)
  },
  updateRecord (
    {commit}: any,
    createRecordPayload: CreateRecordPayload
  ) {
    commit(UPDATE_RECORD, createRecordPayload)
  },
  deleteRecord (
    {commit}: any,
    deleteRecordPayload: DeleteRecordPayload
  ) {
    commit(DELETE_RECORD, deleteRecordPayload)
  },

  updateSearchQuery ({commit}: any, query: string) {
    commit(UPDATE_SEARCH_QUERY, query)
  },
  updateSearchType ({commit}: any, type: SearchType) {
    commit(UPDATE_SEARCH_TYPE, type)
  },

  rateMovie ({commit}: any, payload: RateMoviePayload) {
    commit(RATE_MOVIE, payload)
  }
}
