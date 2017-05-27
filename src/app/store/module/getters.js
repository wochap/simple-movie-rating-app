// @flow

import type {
  Actors,
  Movies,
  Search
} from './flowTypes'

export default {
  getFilteredActors ({actors, search}: {actors: Actors, search: Search}) {
    if (search.type === 'ACTORS' && search.query.length > 0) {
      return actors
        .filter(a => (`${a.firstName} ${a.lastName}`).includes(search.query))
        .slice(0, 5)
    }

    return []
  },
  getFilteredMovies ({movies, search}: {movies: Movies, search: Search}) {
    if (search.type === 'MOVIES' && search.query.length > 0) {
      return movies
        .filter(m => m.name.includes(search.query))
        .slice(0, 5)
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
