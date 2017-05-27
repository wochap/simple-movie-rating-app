import {ACTORS_KEY, MOVIES_KEY} from 'app/config/constants'
import {
  CREATE_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD,
  RATE_MOVIE
} from './module/mutationTypes'

export default function persistent (store) {
  store.subscribe(({type, payload: {resourceType}}, rootState) => {
    switch (type) {
      case CREATE_RECORD:
      case UPDATE_RECORD:
      case DELETE_RECORD: {
        const key = resourceType === 'actors' ? ACTORS_KEY : MOVIES_KEY
        localStorage.setItem(key, JSON.stringify(rootState[resourceType]))
        break
      }
      case RATE_MOVIE: {
        localStorage.setItem(MOVIES_KEY, JSON.stringify(rootState.movies))
        break
      }
    }
  })
}
