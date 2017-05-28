// @flow

import slugify from 'slugify'

import type {
  Actor,
  Movie,
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
    return actors.map(formatActor)
  },
  getMovies ({movies}: {movies: Movies}) {
    return movies.map(formatMovie)
  },

  getActor ({actors, movies, route}: {actors: Actors, movies: Movies, route: any}) {
    const actor = actors.find(actor => actor.id === route.params.id)

    if (!actor) return null

    const actorMovies = actor.movies.reduce((movieList, movieId) => {
      const movie = movies.find(m => m.id === movieId)

      if (!movie) return movieList

      return [...movieList, movie]
    }, [])

    return {
      ...formatActor(actor),
      movies: actorMovies.map(formatMovie)
    }
  },
  getMovie ({actors, movies, route}: {actors: Actors, movies: Movies, route: any}) {
    const movie = movies.find(movie => movie.id === route.params.id)

    if (!movie) return null

    const movieActors = movie.actors.reduce((actorList, actorId) => {
      const actor = actors.find(a => a.id === actorId)

      if (!actor) return actorList

      return [...actorList, actor]
    }, [])

    return {
      ...formatMovie(movie),
      actors: movieActors.map(formatActor)
    }
  }
}

function formatActor (actor: Actor) {
  const fullName = `${actor.firstName} ${actor.lastName}`

  return {
    ...actor,
    fullName,
    slug: slugify(fullName.toLowerCase())
  }
}

function formatMovie (movie: Movie) {
  return {
    ...movie,
    slug: slugify(movie.name.toLowerCase())
  }
}
