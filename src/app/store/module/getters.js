// @flow

import type {
  Actors,
  Movies,
  Search
} from './flowTypes'

export default {
  getSearchQuery ({search}: {search: Search}) {
    return search.query
  },
  getSearchType ({search}: {search: Search}) {
    return search.type
  },
  getSearchBoxResult ({actors, movies, search}: {actors: Actors, movies: Movies, search: Search}) {
    if (search.query.length === 0) return []

    const query = search.query.toLowerCase()

    if (search.type === 'ACTORS') {
      return actors
        .filter(a => (`${a.firstName} ${a.lastName}`).toLowerCase().includes(query))
        .slice(0, 5)
        .map(a => ({
          id: a.id,
          title: `${a.firstName} ${a.lastName}`,
          imageUrl: a.imageUrl
        }))
    } else if (search.type === 'MOVIES') {
      return movies
        .filter(m => m.name.toLowerCase().includes(query))
        .slice(0, 5)
        .map(m => ({
          id: m.id,
          title: m.name,
          imageUrl: m.imageUrl
        }))
    }

    return []
  },

  getActors ({actors}: {actors: Actors}) {
    return actors
  },
  getMovies ({movies}: {movies: Movies}) {
    return movies
  },

  getActor ({actors, movies}: {actors: Actors, movies: Movies}, id: number) {
    const actor = actors.find(actor => actor.id === id)

    if (!actor) return null

    const actorMovies = actor.movies.reduce((movieList, movieId) => {
      const movie = movies.find(m => m.id === movieId)

      return [...movieList, movie]
    }, [])

    return {
      ...actor,
      actorMovies
    }
  },
  getMovie ({actors, movies}: {actors: Actors, movies: Movies}, id: number) {
    const movie = movies.find(movie => movie.id === id)

    if (!movie) return null

    const movieActors = movie.actors.reduce((actorList, actorId) => {
      const actor = actors.find(a => a.id === actorId)

      return [...actorList, actor]
    }, [])

    return {
      ...movie,
      movieActors
    }
  }
}
